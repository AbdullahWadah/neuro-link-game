"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Point } from '../../data/levels';
import { triggerHaptic } from '../../utils/haptics';
import { useSound } from '../../hooks/useSound';
import ParticleEffect from './ParticleEffect';
import Tutorial from './Tutorial';
import { 
  Circle, Square, Triangle, Star, 
  Hexagon, Diamond, Heart, Cloud 
} from 'lucide-react';

interface PuzzleGridProps {
  level: Level;
  initialPaths?: Record<string, Point[]>;
  onComplete: (isPerfect: boolean) => void;
  onMove?: () => void;
  onPathsChange?: (paths: Record<string, Point[]>) => void;
  onCompletedColorsChange?: (colors: Set<string>) => void;
  isMuted: boolean;
  isHapticEnabled: boolean;
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
  initialPaths = {},
  onComplete, 
  onMove,
  onPathsChange,
  onCompletedColorsChange,
  isMuted, 
  isHapticEnabled,
  isColorblindMode,
  hintColor,
  showTutorial = false
}) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>(initialPaths);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [lastConnection, setLastConnection] = useState<{ x: number, y: number, color: string } | null>(null);
  const [ghostPath, setGhostPath] = useState<Point[] | null>(null);
  
  const activeColorRef = useRef<string | null>(null);
  const pathsRef = useRef<Record<string, Point[]>>(initialPaths);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const levelRef = useRef(level);
  const onMoveRef = useRef(onMove);
  const onPathsChangeRef = useRef(onPathsChange);
  const onCompleteRef = useRef(onComplete);
  const onCompletedColorsChangeRef = useRef(onCompletedColorsChange);
  const isHapticEnabledRef = useRef(isHapticEnabled);

  useEffect(() => {
    levelRef.current = level;
    onMoveRef.current = onMove;
    onPathsChangeRef.current = onPathsChange;
    onCompleteRef.current = onComplete;
    onCompletedColorsChangeRef.current = onCompletedColorsChange;
    isHapticEnabledRef.current = isHapticEnabled;
  }, [level, onMove, onPathsChange, onComplete, onCompletedColorsChange, isHapticEnabled]);

  const { playSound } = useSound(isMuted);

  // Initialize completed colors from initial paths
  useEffect(() => {
    const completed = new Set<string>();
    Object.entries(initialPaths).forEach(([color, path]) => {
      const pair = level.pairs.find(p => p.color === color);
      if (pair && path.length >= 2) {
        const first = path[0];
        const last = path[path.length - 1];
        const isStartToEnd = (first.x === pair.start.x && first.y === pair.start.y) && 
                            (last.x === pair.end.x && last.y === pair.end.y);
        const isEndToStart = (first.x === pair.end.x && first.y === pair.end.y) && 
                            (last.x === pair.start.x && last.y === pair.start.y);
        if (isStartToEnd || isEndToStart) {
          completed.add(color);
        }
      }
    });
    setCompletedColors(completed);
    onCompletedColorsChange?.(completed);
    onPathsChange?.(initialPaths);
  }, [level.id, initialPaths]);

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
    
    const x = Math.floor(((clientX - rect.left - padding) / gridWidth) * levelRef.current.size);
    const y = Math.floor(((clientY - rect.top - padding) / gridHeight) * levelRef.current.size);
    
    if (x >= 0 && x < levelRef.current.size && y >= 0 && y < levelRef.current.size) {
      return { x, y };
    }
    return null;
  }, []);

  const checkWin = (currentPaths: Record<string, Point[]>) => {
    const currentLevel = levelRef.current;
    const allConnected = currentLevel.pairs.every(pair => {
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

    const totalCells = currentLevel.size * currentLevel.size;
    const filledCells = new Set();
    Object.values(currentPaths).forEach(path => {
      path.forEach(p => filledCells.add(`${p.x},${p.y}`));
    });

    if (filledCells.size === totalCells) {
      playSound('win');
      if (isHapticEnabledRef.current) triggerHaptic('success');
      setTimeout(() => onCompleteRef.current(true), 400);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pos = getGridPos(clientX, clientY);
    if (!pos) return;

    const currentLevel = levelRef.current;
    const pair = currentLevel.pairs.find(p => 
      (p.start.x === pos.x && p.start.y === pos.y) || 
      (p.end.x === pos.x && p.end.y === pos.y)
    );

    if (pair) {
      activeColorRef.current = pair.color;
      const newPaths = { ...pathsRef.current, [pair.color]: [pos] };
      pathsRef.current = newPaths;
      setPaths(newPaths);
      onPathsChangeRef.current?.(newPaths);
      setCompletedColors(prev => {
        const next = new Set(prev);
        next.delete(pair.color);
        onCompletedColorsChangeRef.current?.(next);
        return next;
      });
      if (isHapticEnabledRef.current) triggerHaptic('light');
      playSound('click');
      onMoveRef.current?.();
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
        onPathsChangeRef.current?.(newPaths);
        setCompletedColors(prev => {
          const next = new Set(prev);
          next.delete(color);
          onCompletedColorsChangeRef.current?.(next);
          return next;
        });
        if (isHapticEnabledRef.current) triggerHaptic('light');
        playSound('click');
        onMoveRef.current?.();
        return;
      }
    }
  };

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!activeColorRef.current) return;
    
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
        const currentLevel = levelRef.current;
        
        if (currentPath.length > 1) {
          const prevPos = currentPath[currentPath.length - 2];
          if (pos.x === prevPos.x && pos.y === prevPos.y) {
            const newPath = currentPath.slice(0, -1);
            const newPaths = { ...pathsRef.current, [color]: newPath };
            pathsRef.current = newPaths;
            setPaths(newPaths);
            onPathsChangeRef.current?.(newPaths);
            if (isHapticEnabledRef.current) triggerHaptic('light');
            return;
          }
        }

        const pair = currentLevel.pairs.find(p => p.color === color)!;
        const isTarget = (pos.x === pair.start.x && pos.y === pair.start.y) || 
                         (pos.x === pair.end.x && pos.y === pair.end.y);
        
        const hitOtherEndpoint = currentLevel.pairs.some(p => 
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
          onPathsChangeRef.current?.(newPaths);
          if (isHapticEnabledRef.current) triggerHaptic('light');
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
              onCompletedColorsChangeRef.current?.(next);
              return next;
            });
          }
        });

        const newPath = [...currentPath, pos];
        newPaths[color] = newPath;
        pathsRef.current = newPaths;
        setPaths(newPaths);
        onPathsChangeRef.current?.(newPaths);
        if (isHapticEnabledRef.current) triggerHaptic('light');

        if (isTarget && currentPath.length > 0) {
          activeColorRef.current = null;
          setCompletedColors(prev => {
            const next = new Set(prev).add(color);
            onCompletedColorsChangeRef.current?.(next);
            return next;
          });
          
          const rect = containerRef.current!.getBoundingClientRect();
          const padding = 24;
          const gridWidth = rect.width - (padding * 2);
          const gridHeight = rect.height - (padding * 2);
          const cellWidth = gridWidth / currentLevel.size;
          const cellHeight = gridHeight / currentLevel.size;
          
          setLastConnection({
            x: padding + (pos.x + 0.5) * cellWidth,
            y: padding + (pos.y + 0.5) * cellHeight,
            color: color
          });

          playSound('connect');
          if (isHapticEnabledRef.current) triggerHaptic('medium');
          checkWin(newPaths);
        }
      }
    }
  }, [getGridPos, playSound]);

  const handleEnd = useCallback(() => {
    activeColorRef.current = null;
  }, []);

  useEffect(() => {
    const options = { passive: false };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, options);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [handleMove, handleEnd]);

  const getContainerMaxWidth = () => {
    if (level.size <= 4) return 'max-w-md';
    if (level.size === 5) return 'max-w-lg';
    if (level.size === 6) return 'max-w-xl';
    if (level.size === 7) return 'max-w-2xl';
    return 'max-w-3xl';
  };

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-square w-full max-md:max-w-[95vw] ${getContainerMaxWidth()} bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] border border-white/10 overflow-hidden touch-none select-none transition-all duration-500`}
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