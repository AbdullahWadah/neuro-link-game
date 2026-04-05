"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Point } from '../../types/game';
import { useHaptics } from '../../hooks/useHaptics';

interface PuzzleGridProps {
  level: Level;
  initialPaths?: Record<string, Point[]>;
  onComplete: (perfect: boolean) => void;
  onMove?: () => void;
  onPathsChange?: (paths: Record<string, Point[]>) => void;
  onCompletedColorsChange?: (colors: Set<string>) => void;
  isMuted: boolean;
  isHapticEnabled: boolean;
  isColorblindMode: boolean;
  hintColor?: string | null;
  showTutorial?: boolean;
}

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
  showTutorial
}) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>(initialPaths);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);
  const { triggerHaptic } = useHaptics();

  const cellSize = 100 / level.size;

  useEffect(() => {
    const completed = new Set<string>();
    Object.entries(paths).forEach(([color, path]) => {
      const pair = level.pairs.find(p => p.color === color);
      if (pair && path.length >= 2) {
        const start = path[0];
        const end = path[path.length - 1];
        const isStartMatch = (start.x === pair.start.x && start.y === pair.start.y) || (start.x === pair.end.x && start.y === pair.end.y);
        const isEndMatch = (end.x === pair.start.x && end.y === pair.start.y) || (end.x === pair.end.x && end.y === pair.end.y);
        if (isStartMatch && isEndMatch) {
          completed.add(color);
        }
      }
    });
    setCompletedColors(completed);
    onCompletedColorsChange?.(completed);

    if (completed.size === level.pairs.length) {
      const totalCells = level.size * level.size;
      const filledCells = new Set();
      Object.values(paths).forEach(path => {
        path.forEach(p => filledCells.add(`${p.x},${p.y}`));
      });
      onComplete(filledCells.size === totalCells);
    }
  }, [paths, level.pairs, level.size, onComplete, onCompletedColorsChange]);

  const getCellFromEvent = (e: React.MouseEvent | React.TouchEvent): Point | null => {
    if (!gridRef.current) return null;
    const rect = gridRef.current.getBoundingClientRect();
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
    const cell = getCellFromEvent(e);
    if (!cell) return;

    const pair = level.pairs.find(p => 
      (p.start.x === cell.x && p.start.y === cell.y) || 
      (p.end.x === cell.x && p.end.y === cell.y)
    );

    if (pair) {
      if (isHapticEnabled) triggerHaptic('light');
      setActiveColor(pair.color);
      setPaths(prev => ({ ...prev, [pair.color]: [cell] }));
      onMove?.();
    } else {
      const colorAtCell = Object.entries(paths).find(([_, path]) => 
        path.some(p => p.x === cell.x && p.y === cell.y)
      )?.[0];
      
      if (colorAtCell) {
        setActiveColor(colorAtCell);
        const path = paths[colorAtCell];
        const index = path.findIndex(p => p.x === cell.x && p.y === cell.y);
        setPaths(prev => ({ ...prev, [colorAtCell]: path.slice(0, index + 1) }));
      }
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!activeColor) return;
    const cell = getCellFromEvent(e);
    if (!cell) return;

    const currentPath = paths[activeColor] || [];
    const lastPoint = currentPath[currentPath.length - 1];

    if (lastPoint.x === cell.x && lastPoint.y === cell.y) return;

    const isAdjacent = Math.abs(lastPoint.x - cell.x) + Math.abs(lastPoint.y - cell.y) === 1;
    if (!isAdjacent) return;

    // Check if cell is occupied by another color's endpoint
    const otherPair = level.pairs.find(p => 
      p.color !== activeColor && 
      ((p.start.x === cell.x && p.start.y === cell.y) || (p.end.x === cell.x && p.end.y === cell.y))
    );
    if (otherPair) return;

    // Check if cell is occupied by another path
    const otherColor = Object.entries(paths).find(([color, path]) => 
      color !== activeColor && path.some(p => p.x === cell.x && p.y === cell.y)
    )?.[0];

    if (otherColor) {
      setPaths(prev => {
        const newPaths = { ...prev };
        const otherPath = [...newPaths[otherColor]];
        const index = otherPath.findIndex(p => p.x === cell.x && p.y === cell.y);
        newPaths[otherColor] = otherPath.slice(0, index);
        return newPaths;
      });
    }

    setPaths(prev => {
      const newPath = [...(prev[activeColor] || [])];
      const existingIndex = newPath.findIndex(p => p.x === cell.x && p.y === cell.y);
      
      if (existingIndex !== -1) {
        return { ...prev, [activeColor]: newPath.slice(0, existingIndex + 1) };
      } else {
        if (isHapticEnabled) triggerHaptic('selection');
        return { ...prev, [activeColor]: [...newPath, cell] };
      }
    });
  };

  const handleEnd = () => {
    if (activeColor) {
      onPathsChange?.(paths);
      setActiveColor(null);
    }
  };

  // Get the hint path for the current hint color
  const getHintPath = () => {
    if (!hintColor || !level.solutions) return null;
    return level.solutions[hintColor] || null;
  };

  const currentHintPath = getHintPath();

  return (
    <div 
      ref={gridRef}
      className="relative aspect-square w-full max-w-[min(85vw,400px)] bg-white/5 rounded-2xl border border-white/10 overflow-hidden touch-none shadow-2xl"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* Grid Lines */}
      <div className="absolute inset-0 grid" style={{ 
        gridTemplateColumns: `repeat(${level.size}, 1fr)`,
        gridTemplateRows: `repeat(${level.size}, 1fr)`
      }}>
        {Array.from({ length: level.size * level.size }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/5" />
        ))}
      </div>

      {/* Hint Path Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <AnimatePresence>
          {currentHintPath && (
            <motion.polyline
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              points={currentHintPath.map(p => `${(p.x + 0.5) * cellSize}% ${(p.y + 0.5) * cellSize}%`).join(' ')}
              fill="none"
              stroke={hintColor!}
              strokeWidth={`${cellSize * 0.4}%`}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              style={{ strokeDasharray: '10, 10' }}
            />
          )}
        </AnimatePresence>
      </svg>

      {/* Active Paths Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        {Object.entries(paths).map(([color, path]) => (
          <polyline
            key={color}
            points={path.map(p => `${(p.x + 0.5) * cellSize}% ${(p.y + 0.5) * cellSize}%`).join(' ')}
            fill="none"
            stroke={color}
            strokeWidth={`${cellSize * 0.5}%`}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-200"
            style={{ 
              filter: completedColors.has(color) ? `drop-shadow(0 0 8px ${color})` : 'none',
              opacity: activeColor && activeColor !== color ? 0.6 : 1
            }}
          />
        ))}
      </svg>

      {/* Nodes Layer */}
      {level.pairs.map((pair, i) => (
        <React.Fragment key={i}>
          {[pair.start, pair.end].map((pos, j) => (
            <div
              key={`${i}-${j}`}
              className="absolute flex items-center justify-center transition-transform duration-300"
              style={{
                left: `${pos.x * cellSize}%`,
                top: `${pos.y * cellSize}%`,
                width: `${cellSize}%`,
                height: `${cellSize}%`,
                padding: '15%'
              }}
            >
              <div 
                className="w-full h-full rounded-full shadow-lg relative"
                style={{ 
                  backgroundColor: pair.color,
                  boxShadow: completedColors.has(pair.color) ? `0 0 15px ${pair.color}` : 'none'
                }}
              >
                {isColorblindMode && (
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white/50">
                    {pair.color.charAt(1).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PuzzleGrid;