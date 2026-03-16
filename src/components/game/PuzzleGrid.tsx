import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Point } from '../../data/levels';
import { triggerHaptic } from '../../utils/haptics';
import { useSound } from '../../hooks/useSound';
import ParticleEffect from './ParticleEffect';
import confetti from 'canvas-confetti';
import { 
  Circle, Square, Triangle, Star, 
  Hexagon, Diamond, Heart, Cloud 
} from 'lucide-react';

interface PuzzleGridProps {
  level: Level;
  onComplete: (isPerfect: boolean) => void;
  isMuted: boolean;
  isColorblindMode: boolean;
  hintColor?: string | null;
}

const SYMBOLS = [
  Circle, Square, Triangle, Star, 
  Hexagon, Diamond, Heart, Cloud
];

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ 
  level, 
  onComplete, 
  isMuted, 
  isColorblindMode,
  hintColor 
}) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>({});
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [lastConnection, setLastConnection] = useState<{ x: number, y: number, color: string } | null>(null);
  const { playSound } = useSound(isMuted);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPaths({});
    setActiveColor(null);
    setCompletedColors(new Set());
    setLastConnection(null);
  }, [level]);

  const getGridPos = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent): Point | null => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }
    
    const x = Math.floor(((clientX - rect.left) / rect.width) * level.size);
    const y = Math.floor(((clientY - rect.top) / rect.height) * level.size);
    
    if (x >= 0 && x < level.size && y >= 0 && y < level.size) {
      return { x, y };
    }
    return null;
  }, [level.size]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const pos = getGridPos(e);
    if (!pos) return;

    const pair = level.pairs.find(p => 
      (p.start.x === pos.x && p.start.y === pos.y) || 
      (p.end.x === pos.x && p.end.y === pos.y)
    );

    if (pair) {
      setActiveColor(pair.color);
      setCompletedColors(prev => {
        const next = new Set(prev);
        next.delete(pair.color);
        return next;
      });
      setPaths(prev => ({ ...prev, [pair.color]: [pos] }));
      triggerHaptic(5);
      playSound('click');
    } else {
      const existingPathColor = Object.entries(paths).find(([_, path]) => 
        path.some(p => p.x === pos.x && p.y === pos.y)
      )?.[0];

      if (existingPathColor) {
        setActiveColor(existingPathColor);
        setCompletedColors(prev => {
          const next = new Set(prev);
          next.delete(existingPathColor);
          return next;
        });
        setPaths(prev => {
          const path = prev[existingPathColor];
          const index = path.findIndex(p => p.x === pos.x && p.y === pos.y);
          return { ...prev, [existingPathColor]: path.slice(0, index + 1) };
        });
        triggerHaptic(5);
      }
    }
  };

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!activeColor) return;
    const pos = getGridPos(e);
    if (!pos) return;

    const currentPath = paths[activeColor] || [];
    const lastPos = currentPath[currentPath.length - 1];

    if (lastPos && (lastPos.x !== pos.x || lastPos.y !== pos.y)) {
      const dx = Math.abs(pos.x - lastPos.x);
      const dy = Math.abs(pos.y - lastPos.y);
      
      if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        if (currentPath.length > 1) {
          const secondLastPos = currentPath[currentPath.length - 2];
          if (pos.x === secondLastPos.x && pos.y === secondLastPos.y) {
            setPaths(prev => ({
              ...prev,
              [activeColor]: currentPath.slice(0, -1)
            }));
            triggerHaptic(2);
            return;
          }
        }

        const hitOtherNode = level.pairs.some(p => 
          p.color !== activeColor && 
          ((p.start.x === pos.x && p.start.y === pos.y) || (p.end.x === pos.x && p.end.y === pos.y))
        );
        if (hitOtherNode) return;

        if (currentPath.some(p => p.x === pos.x && p.y === pos.y)) {
          const index = currentPath.findIndex(p => p.x === pos.x && p.y === pos.y);
          setPaths(prev => ({
            ...prev,
            [activeColor]: currentPath.slice(0, index + 1)
          }));
          triggerHaptic(2);
          return;
        }

        let newPaths = { ...paths };
        Object.entries(paths).forEach(([color, path]) => {
          if (color !== activeColor && path.some(p => p.x === pos.x && p.y === pos.y)) {
            delete newPaths[color];
            setCompletedColors(prev => {
              const next = new Set(prev);
              next.delete(color);
              return next;
            });
          }
        });

        const newPath = [...currentPath, pos];
        newPaths[activeColor] = newPath;
        setPaths(newPaths);
        triggerHaptic(2);

        const pair = level.pairs.find(p => p.color === activeColor)!;
        const isEnd = (pos.x === pair.start.x && pos.y === pair.start.y) || 
                      (pos.x === pair.end.x && pos.y === pair.end.y);
        
        if (isEnd && currentPath.length > 0) {
          setActiveColor(null);
          setCompletedColors(prev => new Set(prev).add(activeColor));
          
          const rect = containerRef.current!.getBoundingClientRect();
          const cellWidth = rect.width / level.size;
          const cellHeight = rect.height / level.size;
          setLastConnection({
            x: (pos.x + 0.5) * cellWidth,
            y: (pos.y + 0.5) * cellHeight,
            color: activeColor
          });

          playSound('connect');
          checkWin(newPaths);
        }
      }
    }
  }, [activeColor, paths, level.pairs, level.size, getGridPos, playSound]);

  const checkWin = (currentPaths: Record<string, Point[]>) => {
    const allConnected = level.pairs.every(pair => {
      const path = currentPaths[pair.color];
      if (!path) return false;
      const hasStart = path.some(p => p.x === pair.start.x && p.y === pair.start.y);
      const hasEnd = path.some(p => p.x === pair.end.x && p.y === pair.end.y);
      return hasStart && hasEnd;
    });

    if (allConnected) {
      const totalCells = level.size * level.size;
      const filledCells = new Set();
      Object.values(currentPaths).forEach(path => {
        path.forEach(p => filledCells.add(`${p.x},${p.y}`));
      });
      const isPerfect = filledCells.size === totalCells;

      playSound('win');
      triggerHaptic([10, 50, 10]);
      confetti({
        particleCount: isPerfect ? 250 : 150,
        spread: isPerfect ? 100 : 80,
        origin: { y: 0.6 },
        colors: level.pairs.map(p => p.color),
        ticks: 200
      });
      setTimeout(() => onComplete(isPerfect), 1200);
    }
  };

  const handleEnd = useCallback(() => setActiveColor(null), []);

  useEffect(() => {
    if (activeColor) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [activeColor, handleMove, handleEnd]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full max-md:max-w-[90vw] max-w-md bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-white/50 overflow-hidden touch-none select-none"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
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
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300/30" />
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

      <svg className="absolute inset-0 pointer-events-none w-full h-full p-6">
        <defs>
          {level.pairs.map(p => (
            <filter key={`glow-${p.color}`} id={`glow-${p.color.replace('#', '')}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          ))}
        </defs>
        {Object.entries(paths).map(([color, path]) => (
          <g key={color}>
            <motion.polyline
              points={path.map(p => {
                const cellWidth = 100 / level.size;
                const cellHeight = 100 / level.size;
                return `${(p.x + 0.5) * cellWidth}% ${(p.y + 0.5) * cellHeight}%`;
              }).join(' ')}
              fill="none"
              stroke={color}
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-20"
              style={{ filter: `url(#glow-${color.replace('#', '')})` }}
            />
            <motion.polyline
              points={path.map(p => {
                const cellWidth = 100 / level.size;
                const cellHeight = 100 / level.size;
                return `${(p.x + 0.5) * cellWidth}% ${(p.y + 0.5) * cellHeight}%`;
              }).join(' ')}
              fill="none"
              stroke={color}
              strokeWidth="10"
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