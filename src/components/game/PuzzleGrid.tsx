"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Point } from '../../data/levels';
import { triggerHaptic } from '../../utils/haptics';
import { useSound } from '../../hooks/useSound';
import ParticleEffect from './ParticleEffect';
import Tutorial from './Tutorial';
import confetti from 'canvas-confetti';
import { 
  Circle, Square, Triangle, Star, 
  Hexagon, Diamond, Heart, Cloud 
} from 'lucide-react';

interface PuzzleGridProps {
  level: Level;
  onComplete: (isPerfect: boolean) => void;
  onMove?: () => void;
  onCompletedColorsChange?: (colors: Set<string>) => void;
  isMuted: boolean;
  isColorblindMode: boolean;
  hintColor?: string | null;
  showTutorial?: boolean;
}

const SYMBOLS = [
  Circle, Square, Triangle, Star, 
  Hexagon, Diamond, Heart, Cloud
];

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ 
  level, 
  onComplete, 
  onMove,
  onCompletedColorsChange,
  isMuted, 
  isColorblindMode,
  hintColor,
  showTutorial = false
}) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>({});
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [lastConnection, setLastConnection] = useState<{ x: number, y: number, color: string } | null>(null);
  const [ghostPath, setGhostPath] = useState<Point[] | null>(null);
  
  const activeColorRef = useRef<string | null>(null);
  const pathsRef = useRef<Record<string, Point[]>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { playSound } = useSound(isMuted);

  useEffect(() => {
    setPaths({});
    pathsRef.current = {};
    activeColorRef.current = null;
    setCompletedColors(new Set());
    setLastConnection(null);
    setGhostPath(null);
    onCompletedColorsChange?.(new Set());
  }, [level.id]);

  useEffect(() => {
    if (hintColor && level.solutions[hintColor]) {
      setGhostPath(level.solutions[hintColor]);
    } else {
      setGhostPath(null);
    }
  }, [hintColor, level]);

  const getGridPos = useCallback((clientX: number, clientY: number): Point | null => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const padding = 24;
    const gridWidth = rect.width - (padding * 2);
    const gridHeight = rect.height - (padding * 2);
    
    const x = Math.floor(((clientX - rect.left - padding) / gridWidth) * level.size);
    const y = Math.floor(((clientY - rect.top - padding) / gridHeight) * level.size);
    
    if (x >= 0 && x < level.size && y >= 0 && y < level.size) {
      return { x, y };
    }
    return null;
  }, [level.size]);

  const checkWin = (currentPaths: Record<string, Point[]>) => {
    const allConnected = level.pairs.every(pair => {
      const path = currentPaths[pair.color];
      if (!path || path.length < 2) return false;
      const first = path[0];
      const last = path[path.length - 1];
      
      const isStartToEnd = (first.x === pair.start.x && first.y === pair.start.y) && 
                          (last.x === pair.end.x && last.y === pair.end.y);
      const isEndToStart = (first.x === pair.end.x && first.y === pair.end.y) && 
                          (last.x === pair.start.x && last.y === pair.start.y);
      
      return isStartToEnd || isEndToStart;
    });

    if (!allConnected) return;

    const totalCells = level.size * level.size;
    const filledCells = new Set();
    Object.values(currentPaths).forEach(path => {
      path.forEach(p => filledCells.add(`${p.x},${p.y}`));
    });

    if (filledCells.size === totalCells) {
      playSound('win');
      triggerHaptic('success');
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: level.pairs.map(p => p.color),
      });
      setTimeout(() => onComplete(true), 1000);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pos = getGridPos(clientX, clientY);
    if (!pos) return;

    const pair = level.pairs.find(p => 
      (p.start.x === pos.x && p.start.y === pos.y) || 
      (p.end.x === pos.x && p.end.y === pos.y)
    );

    if (pair) {
      activeColorRef.current = pair.color;
      const newPaths = { ...pathsRef.current, [pair.color]: [pos] };
      pathsRef.current = newPaths;
      setPaths(newPaths);
      setCompletedColors(prev => {
        const next = new Set(prev);
        next.delete(pair.color);
        onCompletedColorsChange?.(next);
        return next;
      });
      triggerHaptic('light');
      playSound('click');
      onMove?.();
      return;
    }

    for (const [color, path] of Object.entries(pathsRef.current)) {
      const idx = path.findIndex(p => p.x === pos.x && p.y === pos.y);
      if (idx !== -1) {
        activeColorRef.current = color;
        const newPath = path.slice(0, idx + 1);
        const newPaths = { ...pathsRef.current, [color]: newPath };
        pathsRef.current = newPaths;
        setPaths(newPaths);
        setCompletedColors(prev => {
          const next = new Set(prev);
          next.delete(color);
          onCompletedColorsChange?.(next);
          return next;
        });
        triggerHaptic('light');
        playSound('click');
        onMove?.();
        return;
      }
    }
  };

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!activeColorRef.current) return;
    
    if (e.cancelable) e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pos = getGridPos(clientX, clientY);
    if (!pos) return;

    const color = activeColorRef.current;
    const currentPath = pathsRef.current[color] || [];
    const lastPos = currentPath[currentPath.length - 1];

    if (lastPos && (lastPos.x !== pos.x || lastPos.y !== pos.y)) {
      const dx = Math.abs(pos.x - lastPos.x);
      const dy = Math.abs(pos.y - lastPos.y);
      
      if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        if (currentPath.length > 1) {
          const prevPos = currentPath[currentPath.length - 2];
          if (pos.x === prevPos.x && pos.y === prevPos.y) {
            const newPath = currentPath.slice(0, -1);
            const newPaths = { ...pathsRef.current, [color]: newPath };
            pathsRef.current = newPaths;
            setPaths(newPaths);
            triggerHaptic('light');
            return;
          }
        }

        const pair = level.pairs.find(p => p.color === color)!;
        const isTarget = (pos.x === pair.start.x && pos.y === pair.start.y) || 
                         (pos.x === pair.end.x && pos.y === pair.end.y);
        
        const hitOtherEndpoint = level.pairs.some(p => 
          p.color !== color && 
          ((p.start.x === pos.x && p.start.y === pos.y) || (p.end.x === pos.x && p.end.y === pos.y))
        );
        
        if (hitOtherEndpoint) return;

        if (currentPath.some(p => p.x === pos.x && p.y === pos.y)) {
          const index = currentPath.findIndex(p => p.x === pos.x && p.y === pos.y);
          const newPath = currentPath.slice(0, index + 1);
          const newPaths = { ...pathsRef.current, [color]: newPath };
          pathsRef.current = newPaths;
          setPaths(newPaths);
          triggerHaptic('light');
          return;
        }

        let newPaths = { ...pathsRef.current };
        Object.entries(pathsRef.current).forEach(([otherColor, path]) => {
          if (otherColor !== color && path.some(p => p.x === pos.x && p.y === pos.y)) {
            const idx = path.findIndex(p => p.x === pos.x && p.y === pos.y);
            newPaths[otherColor] = path.slice(0, idx);
            setCompletedColors(prev => {
              const next = new Set(prev);
              next.delete(otherColor);
              onCompletedColorsChange?.(next);
              return next;
            });
          }
        });

        const newPath = [...currentPath, pos];
        newPaths[color] = newPath;
        pathsRef.current = newPaths;
        setPaths(newPaths);
        triggerHaptic('light');

        if (isTarget && currentPath.length > 0) {
          activeColorRef.current = null;
          setCompletedColors(prev => {
            const next = new Set(prev).add(color);
            onCompletedColorsChange?.(next);
            return next;
          });
          
          const rect = containerRef.current!.getBoundingClientRect();
          const padding = 24;
          const gridWidth = rect.width - (padding * 2);
          const gridHeight = rect.height - (padding * 2);
          const cellWidth = gridWidth / level.size;
          const cellHeight = gridHeight / level.size;
          
          setLastConnection({
            x: padding + (pos.x + 0.5) * cellWidth,
            y: padding + (pos.y + 0.5) * cellHeight,
            color: color
          });

          playSound('connect');
          triggerHaptic('medium');
          checkWin(newPaths);
        }
      }
    }
  }, [level.pairs, level.size, getGridPos, playSound, onCompletedColorsChange]);

  const handleEnd = useCallback(() => {
    activeColorRef.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [handleMove, handleEnd]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full max-md:max-w-[90vw] max-w-md bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] border border-white/10 overflow-hidden touch-none select-none"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      <AnimatePresence>
        {showTutorial && <Tutorial level={level} />}
      </AnimatePresence>

      <div 
        className="grid gap-4 h-full w-full"
        style={{ 
          gridTemplateColumns: `repeat(${level.size}, 1fr)`,
          gridTemplateRows: `repeat(${level.size}, 1fr)`
        }}
      >
        {Array.from({ length: level.size * level.size }).map((_, i) => {
          const x = i % level.size;
          const y = Math.floor(i / level.size);
          const pairIndex = level.pairs.findIndex(p => 
            (p.start.x === x && p.start.y === y) || (p.end.x === x && p.end.y === y)
          );
          const pair = pairIndex !== -1 ? level.pairs[pairIndex] : null;
          const SymbolIcon = pair ? SYMBOLS[pairIndex % SYMBOLS.length] : null;
          const isHinted = pair && hintColor === pair.color;

          return (
            <div key={i} className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              {pair && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: isHinted ? [1, 1.2, 1] : 1,
                    boxShadow: completedColors.has(pair.color) 
                      ? `0 0 30px ${pair.color}88` 
                      : isHinted 
                        ? `0 0 40px ${pair.color}` 
                        : `0 0 15px ${pair.color}44`
                  }}
                  transition={isHinted ? { duration: 1, repeat: Infinity } : {}}
                  className="absolute w-10 h-10 rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: pair.color }}
                >
                  {isColorblindMode && SymbolIcon ? (
                    <SymbolIcon size={16} className="text-white/80" />
                  ) : (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 rounded-full bg-white/30" 
                    />
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <svg 
        className="absolute inset-0 pointer-events-none w-full h-full p-6"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {ghostPath && (
          <motion.polyline
            points={ghostPath.map(p => {
              const cellWidth = 100 / level.size;
              const cellHeight = 100 / level.size;
              return `${(p.x + 0.5) * cellWidth},${(p.y + 0.5) * cellHeight}`;
            }).join(' ')}
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="2,4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {Object.entries(paths).map(([color, path]) => (
          <g key={color}>
            <motion.polyline
              points={path.map(p => {
                const cellWidth = 100 / level.size;
                const cellHeight = 100 / level.size;
                return `${(p.x + 0.5) * cellWidth},${(p.y + 0.5) * cellHeight}`;
              }).join(' ')}
              fill="none"
              stroke={color}
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-20"
            />
            <motion.polyline
              points={path.map(p => {
                const cellWidth = 100 / level.size;
                const cellHeight = 100 / level.size;
                return `${(p.x + 0.5) * cellWidth},${(p.y + 0.5) * cellHeight}`;
              }).join(' ')}
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </g>
        ))}
      </svg>

      <AnimatePresence>
        {lastConnection && (
          <ParticleEffect 
            key={Date.now()}
            x={lastConnection.x} 
            y={lastConnection.y} 
            color={lastConnection.color} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PuzzleGrid;