"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

  const activeColorRef = useRef<string | null>(null);
  const pathsRef = useRef<Record<string, Point[]>>(initialPaths);
  const containerRef = useRef<HTMLDivElement>(null);

  const callbacksRef = useRef({
    onMove,
    onPathsChange,
    onComplete,
    onCompletedColorsChange,
    isHapticEnabled
  });

  useEffect(() => {
    callbacksRef.current = {
      onMove,
      onPathsChange,
      onComplete,
      onCompletedColorsChange,
      isHapticEnabled
    };
  }, [onMove, onPathsChange, onComplete, onCompletedColorsChange, isHapticEnabled]);

  const { playSound } = useSound(isMuted);

  // Expand solution path
  const expandPath = useCallback((sparsePath: Point[]) => {
    if (!sparsePath || sparsePath.length < 2) return sparsePath;
    const expanded: Point[] = [sparsePath[0]];

    for (let i = 0; i < sparsePath.length - 1; i++) {
      const start = sparsePath[i];
      const end = sparsePath[i + 1];
      let currX = start.x;
      let currY = start.y;

      while (currX !== end.x) {
        currX += end.x > currX ? 1 : -1;
        expanded.push({ x: currX, y: currY });
      }
      while (currY !== end.y) {
        currY += end.y > currY ? 1 : -1;
        expanded.push({ x: currX, y: currY });
      }
    }

    return expanded.filter((p, i, self) => 
      i === 0 || !(p.x === self[i-1].x && p.y === self[i-1].y)
    );
  }, []);

  // 🔥 NEW: Get next correct hint step
  const getNextHintStep = useCallback((color: string, currentPath: Point[]) => {
    const solution = expandPath(level.solutions[color]);

    for (let i = 0; i < currentPath.length; i++) {
      if (
        currentPath[i].x !== solution[i]?.x ||
        currentPath[i].y !== solution[i]?.y
      ) {
        return solution[i];
      }
    }

    return solution[currentPath.length];
  }, [level, expandPath]);

  // 🔥 NEW: hint step
  const hintStep = useMemo(() => {
    if (!hintColor) return null;
    const currentPath = paths[hintColor] || [];
    return getNextHintStep(hintColor, currentPath);
  }, [hintColor, paths, getNextHintStep]);

  // 🔥 NEW: convert to SVG coords
  const hintPosition = useMemo(() => {
    if (!hintStep) return null;

    return {
      x: ((hintStep.x + 0.5) / level.size) * 100,
      y: ((hintStep.y + 0.5) / level.size) * 100
    };
  }, [hintStep, level.size]);

  // 🔥 FIXED: trim incorrect path instead of deleting
  useEffect(() => {
    if (hintColor && paths[hintColor]) {
      const solution = expandPath(level.solutions[hintColor]);
      const current = paths[hintColor];

      let correctLength = 0;
      for (let i = 0; i < current.length; i++) {
        if (
          current[i].x === solution[i]?.x &&
          current[i].y === solution[i]?.y
        ) {
          correctLength++;
        } else break;
      }

      if (correctLength < current.length) {
        const newPaths = { ...paths };
        newPaths[hintColor] = current.slice(0, correctLength);

        setPaths(newPaths);
        pathsRef.current = newPaths;
        callbacksRef.current.onPathsChange?.(newPaths);
      }
    }
  }, [hintColor, level, expandPath, paths]);

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

  // ⚠️ FIXED BUG HERE
  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!activeColorRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const pos = getGridPos(clientX, clientY);
    if (!pos) return;

    const color = activeColorRef.current;
    const currentPath = pathsRef.current[color] || [];
    const lastPos = currentPath[currentPath.length - 1];

    if (!lastPos) return;

    const dx = Math.abs(pos.x - lastPos.x);
    const dy = Math.abs(pos.y - lastPos.y);

    if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {

      let newPaths = { ...pathsRef.current };

      Object.entries(pathsRef.current).forEach(([otherColor, path]) => {
        if (
          otherColor !== color &&
          path.some(p => p.x === pos.x && p.y === pos.y) // ✅ FIXED HERE
        ) {
          const idx = path.findIndex(p => p.x === pos.x && p.y === pos.y);
          newPaths[otherColor] = path.slice(0, idx);
        }
      });

      const newPath = [...currentPath, pos];
      newPaths[color] = newPath;

      pathsRef.current = newPaths;
      setPaths(newPaths);
      callbacksRef.current.onPathsChange?.(newPaths);
    }

  }, [getGridPos]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full max-w-[min(90vw,75vh)] bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-6"
    >

      <svg 
        className="absolute inset-0 pointer-events-none w-full h-full p-6"
        viewBox="0 0 100 100"
      >

        {/* 🔥 NEW HINT DOT */}
        {hintPosition && (
          <>
            <motion.circle
              cx={hintPosition.x}
              cy={hintPosition.y}
              r="6"
              fill="transparent"
              stroke={hintColor || "white"}
              strokeWidth="1.5"
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            <motion.circle
              cx={hintPosition.x}
              cy={hintPosition.y}
              r="3"
              fill={hintColor || "white"}
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              animate={{ scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </>
        )}

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