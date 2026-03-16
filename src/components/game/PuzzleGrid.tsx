import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Level, Point } from '../../data/levels';
import confetti from 'canvas-confetti';

interface PuzzleGridProps {
  level: Level;
  onComplete: () => void;
}

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ level, onComplete }) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>({});
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPaths({});
    setActiveColor(null);
  }, [level]);

  const getGridPos = (e: React.MouseEvent | React.TouchEvent): Point | null => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const x = Math.floor(((clientX - rect.left) / rect.width) * level.size);
    const y = Math.floor(((clientY - rect.top) / rect.height) * level.size);
    
    if (x >= 0 && x < level.size && y >= 0 && y < level.size) {
      return { x, y };
    }
    return null;
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const pos = getGridPos(e);
    if (!pos) return;

    const pair = level.pairs.find(p => 
      (p.start.x === pos.x && p.start.y === pos.y) || 
      (p.end.x === pos.x && p.end.y === pos.y)
    );

    if (pair) {
      setActiveColor(pair.color);
      setPaths(prev => ({ ...prev, [pair.color]: [pos] }));
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!activeColor) return;
    const pos = getGridPos(e);
    if (!pos) return;

    const currentPath = paths[activeColor] || [];
    const lastPos = currentPath[currentPath.length - 1];

    if (lastPos && (lastPos.x !== pos.x || lastPos.y !== pos.y)) {
      // Only allow orthogonal moves
      const dx = Math.abs(pos.x - lastPos.x);
      const dy = Math.abs(pos.y - lastPos.y);
      if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        // Check if point is already used by another path
        const isUsed = Object.entries(paths).some(([color, path]) => 
          color !== activeColor && path.some(p => p.x === pos.x && p.y === pos.y)
        );
        
        if (!isUsed) {
          const newPath = [...currentPath, pos];
          setPaths(prev => ({ ...prev, [activeColor]: newPath }));

          // Check if reached end
          const pair = level.pairs.find(p => p.color === activeColor)!;
          const isEnd = (pos.x === pair.start.x && pos.y === pair.start.y) || 
                        (pos.x === pair.end.x && pos.y === pair.end.y);
          
          if (isEnd && currentPath.length > 0) {
            setActiveColor(null);
            checkWin({ ...paths, [activeColor]: newPath });
          }
        }
      }
    }
  };

  const checkWin = (currentPaths: Record<string, Point[]>) => {
    const allConnected = level.pairs.every(pair => {
      const path = currentPaths[pair.color];
      if (!path) return false;
      const hasStart = path.some(p => p.x === pair.start.x && p.y === pair.start.y);
      const hasEnd = path.some(p => p.x === pair.end.x && p.y === pair.end.y);
      return hasStart && hasEnd;
    });

    if (allConnected) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: level.pairs.map(p => p.color)
      });
      setTimeout(onComplete, 1000);
    }
  };

  const handleEnd = () => setActiveColor(null);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full max-w-md bg-white/50 backdrop-blur-md rounded-3xl p-4 shadow-inner overflow-hidden touch-none"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div 
        className="grid gap-2 h-full w-full"
        style={{ 
          gridTemplateColumns: `repeat(${level.size}, 1fr)`,
          gridTemplateRows: `repeat(${level.size}, 1fr)`
        }}
      >
        {Array.from({ length: level.size * level.size }).map((_, i) => {
          const x = i % level.size;
          const y = Math.floor(i / level.size);
          const pair = level.pairs.find(p => 
            (p.start.x === x && p.start.y === y) || (p.end.x === x && p.end.y === y)
          );

          return (
            <div key={i} className="relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-200/50" />
              {pair && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute w-8 h-8 rounded-full shadow-lg z-10"
                  style={{ backgroundColor: pair.color }}
                />
              )}
            </div>
          );
        })}
      </div>

      <svg className="absolute inset-0 pointer-events-none w-full h-full p-4">
        {Object.entries(paths).map(([color, path]) => (
          <motion.polyline
            key={color}
            points={path.map(p => {
              const cellWidth = 100 / level.size;
              const cellHeight = 100 / level.size;
              return `${(p.x + 0.5) * cellWidth}% ${(p.y + 0.5) * cellHeight}%`;
            }).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            className="opacity-80"
          />
        ))}
      </svg>
    </div>
  );
};

export default PuzzleGrid;