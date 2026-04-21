"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Level, Point } from '../../types/game';
import { triggerHaptic } from '../../utils/haptics';
import { useSound } from '../../hooks/useSound';
import ParticleEffect from './ParticleEffect';
import Tutorial from './Tutorial';
import {
  Circle,
  Square,
  Triangle,
  Star,
  Hexagon,
  Diamond,
  Heart,
  Cloud,
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
  hintAnimationMs?: number;
}

const SYMBOLS = [Circle, Square, Triangle, Star, Hexagon, Diamond, Heart, Cloud];
const EMPTY_PATHS: Record<string, Point[]> = {};

const PuzzleGrid: React.FC<PuzzleGridProps> = ({
  level,
  initialPaths = EMPTY_PATHS,
  onComplete,
  onMove,
  onPathsChange,
  onCompletedColorsChange,
  isMuted,
  isHapticEnabled,
  isColorblindMode,
  hintColor,
  showTutorial = false,
  hintAnimationMs = 4800,
}) => {
  const [paths, setPaths] = useState<Record<string, Point[]>>(initialPaths);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [lastConnection, setLastConnection] = useState<{ x: number; y: number; color: string } | null>(null);

  const activeColorRef = useRef<string | null>(null);
  const pathsRef = useRef<Record<string, Point[]>>(initialPaths);
  const containerRef = useRef<HTMLDivElement>(null);

  const callbacksRef = useRef({
    onMove,
    onPathsChange,
    onComplete,
    onCompletedColorsChange,
    isHapticEnabled,
  });

  useEffect(() => {
    callbacksRef.current = {
      onMove,
      onPathsChange,
      onComplete,
      onCompletedColorsChange,
      isHapticEnabled,
    };
  }, [onMove, onPathsChange, onComplete, onCompletedColorsChange, isHapticEnabled]);

  const { playSound } = useSound(isMuted);

  const gridPadding = useMemo(() => {
    if (level.size >= 8) return 14;
    if (level.size >= 7) return 18;
    return 24;
  }, [level.size]);

  const gridGap = useMemo(() => {
    if (level.size >= 8) return 6;
    if (level.size >= 7) return 9;
    return 12;
  }, [level.size]);

  const endpointSize = useMemo(() => {
    if (level.size >= 8) return 30;
    if (level.size >= 7) return 36;
    return 40;
  }, [level.size]);

  const pathStroke = useMemo(() => {
    if (level.size >= 8) return { glow: 7.5, line: 4.5 };
    if (level.size >= 7) return { glow: 8.5, line: 5.2 };
    return { glow: 10, line: 6 };
  }, [level.size]);

  const expandPath = useCallback((sparsePath: Point[]) => {
    if (!sparsePath || sparsePath.length < 2) return sparsePath;

    const expanded: Point[] = [sparsePath[0]];

    for (let i = 0; i < sparsePath.length - 1; i += 1) {
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

    return expanded.filter((point, index, self) => index === 0 || !(point.x === self[index - 1].x && point.y === self[index - 1].y));
  }, []);

  useEffect(() => {
    const completed = new Set<string>();

    Object.entries(initialPaths).forEach(([color, path]) => {
      const pair = level.pairs.find(p => p.color === color);
      if (!pair || path.length < 2) return;

      const first = path[0];
      const last = path[path.length - 1];
      const isConnected =
        (first.x === pair.start.x && first.y === pair.start.y && last.x === pair.end.x && last.y === pair.end.y) ||
        (first.x === pair.end.x && first.y === pair.end.y && last.x === pair.start.x && last.y === pair.start.y);

      if (isConnected) {
        completed.add(color);
      }
    });

    setPaths(initialPaths);
    pathsRef.current = initialPaths;
    setCompletedColors(completed);
    callbacksRef.current.onCompletedColorsChange?.(completed);
    callbacksRef.current.onPathsChange?.(initialPaths);
  }, [level.id, level.pairs, initialPaths]);

  const getGridPos = useCallback(
    (clientX: number, clientY: number): Point | null => {
      if (!containerRef.current) return null;

      const rect = containerRef.current.getBoundingClientRect();
      const gridWidth = rect.width - gridPadding * 2;
      const gridHeight = rect.height - gridPadding * 2;
      const x = Math.floor(((clientX - rect.left - gridPadding) / gridWidth) * level.size);
      const y = Math.floor(((clientY - rect.top - gridPadding) / gridHeight) * level.size);

      if (x >= 0 && x < level.size && y >= 0 && y < level.size) {
        return { x, y };
      }

      return null;
    },
    [gridPadding, level.size],
  );

  const checkWin = useCallback(
    (currentPaths: Record<string, Point[]>) => {
      const allConnected = level.pairs.every(pair => {
        const path = currentPaths[pair.color];
        if (!path || path.length < 2) return false;

        const first = path[0];
        const last = path[path.length - 1];

        return (
          (first.x === pair.start.x && first.y === pair.start.y && last.x === pair.end.x && last.y === pair.end.y) ||
          (first.x === pair.end.x && first.y === pair.end.y && last.x === pair.start.x && last.y === pair.start.y)
        );
      });

      if (!allConnected) return;

      const totalCells = level.size * level.size;
      const filledCells = new Set<string>();

      Object.values(currentPaths).forEach(path => {
        path.forEach(point => filledCells.add(`${point.x},${point.y}`));
      });

      if (filledCells.size === totalCells) {
        playSound('win');
        if (callbacksRef.current.isHapticEnabled) triggerHaptic('success');
        window.setTimeout(() => callbacksRef.current.onComplete(true), 400);
      }
    },
    [level, playSound],
  );

  const handleStart = (event: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in event) {
      event.preventDefault();
    }

    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    const pos = getGridPos(clientX, clientY);
    if (!pos) return;

    const endpointPair = level.pairs.find(
      pair =>
        (pair.start.x === pos.x && pair.start.y === pos.y) ||
        (pair.end.x === pos.x && pair.end.y === pos.y),
    );

    if (endpointPair) {
      activeColorRef.current = endpointPair.color;
      const newPaths = { ...pathsRef.current, [endpointPair.color]: [pos] };
      pathsRef.current = newPaths;
      setPaths(newPaths);
      callbacksRef.current.onPathsChange?.(newPaths);
      setCompletedColors(prev => {
        const next = new Set(prev);
        next.delete(endpointPair.color);
        callbacksRef.current.onCompletedColorsChange?.(next);
        return next;
      });
      if (callbacksRef.current.isHapticEnabled) triggerHaptic('light');
      playSound('click');
      callbacksRef.current.onMove?.();
      return;
    }

    for (const [color, path] of Object.entries(pathsRef.current)) {
      const index = path.findIndex(point => point.x === pos.x && point.y === pos.y);
      if (index === -1) continue;

      activeColorRef.current = color;
      const newPath = path.slice(0, index + 1);
      const newPaths = { ...pathsRef.current, [color]: newPath };
      pathsRef.current = newPaths;
      setPaths(newPaths);
      callbacksRef.current.onPathsChange?.(newPaths);
      setCompletedColors(prev => {
        const next = new Set(prev);
        next.delete(color);
        callbacksRef.current.onCompletedColorsChange?.(next);
        return next;
      });
      if (callbacksRef.current.isHapticEnabled) triggerHaptic('light');
      playSound('click');
      callbacksRef.current.onMove?.();
      return;
    }
  };

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!activeColorRef.current) return;

      if ('touches' in event) {
        event.preventDefault();
      }

      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      const pos = getGridPos(clientX, clientY);
      if (!pos) return;

      const color = activeColorRef.current;
      const currentPath = pathsRef.current[color] || [];
      const lastPos = currentPath[currentPath.length - 1];
      if (!lastPos || (lastPos.x === pos.x && lastPos.y === pos.y)) return;

      const dx = Math.abs(pos.x - lastPos.x);
      const dy = Math.abs(pos.y - lastPos.y);
      if (!((dx === 1 && dy === 0) || (dx === 0 && dy === 1))) return;

      if (currentPath.length > 1) {
        const prevPos = currentPath[currentPath.length - 2];
        if (pos.x === prevPos.x && pos.y === prevPos.y) {
          const newPath = currentPath.slice(0, -1);
          const newPaths = { ...pathsRef.current, [color]: newPath };
          pathsRef.current = newPaths;
          setPaths(newPaths);
          callbacksRef.current.onPathsChange?.(newPaths);
          if (callbacksRef.current.isHapticEnabled) triggerHaptic('light');
          return;
        }
      }

      const pair = level.pairs.find(p => p.color === color);
      if (!pair) return;

      const isTarget =
        (pos.x === pair.start.x && pos.y === pair.start.y) ||
        (pos.x === pair.end.x && pos.y === pair.end.y);

      const hitOtherEndpoint = level.pairs.some(
        p =>
          p.color !== color &&
          ((p.start.x === pos.x && p.start.y === pos.y) || (p.end.x === pos.x && p.end.y === pos.y)),
      );

      if (hitOtherEndpoint) return;

      if (currentPath.some(point => point.x === pos.x && point.y === pos.y)) {
        const index = currentPath.findIndex(point => point.x === pos.x && point.y === pos.y);
        const newPath = currentPath.slice(0, index + 1);
        const newPaths = { ...pathsRef.current, [color]: newPath };
        pathsRef.current = newPaths;
        setPaths(newPaths);
        callbacksRef.current.onPathsChange?.(newPaths);
        if (callbacksRef.current.isHapticEnabled) triggerHaptic('light');
        return;
      }

      let newPaths = { ...pathsRef.current };

      Object.entries(pathsRef.current).forEach(([otherColor, otherPath]) => {
        if (otherColor === color || !otherPath.some(point => point.x === pos.x && point.y === pos.y)) return;

        const index = otherPath.findIndex(point => point.x === pos.x && point.y === pos.y);
        newPaths[otherColor] = otherPath.slice(0, index);
        setCompletedColors(prev => {
          const next = new Set(prev);
          next.delete(otherColor);
          callbacksRef.current.onCompletedColorsChange?.(next);
          return next;
        });
      });

      const newPath = [...currentPath, pos];
      newPaths[color] = newPath;
      pathsRef.current = newPaths;
      setPaths(newPaths);
      callbacksRef.current.onPathsChange?.(newPaths);
      if (callbacksRef.current.isHapticEnabled) triggerHaptic('light');

      if (!isTarget || currentPath.length === 0) return;

      activeColorRef.current = null;
      setCompletedColors(prev => {
        const next = new Set(prev).add(color);
        callbacksRef.current.onCompletedColorsChange?.(next);
        return next;
      });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const gridWidth = rect.width - gridPadding * 2;
        const gridHeight = rect.height - gridPadding * 2;
        const cellWidth = gridWidth / level.size;
        const cellHeight = gridHeight / level.size;

        setLastConnection({
          x: gridPadding + (pos.x + 0.5) * cellWidth,
          y: gridPadding + (pos.y + 0.5) * cellHeight,
          color,
        });
      }

      playSound('connect');
      if (callbacksRef.current.isHapticEnabled) triggerHaptic('medium');
      checkWin(newPaths);
    },
    [checkWin, getGridPos, gridPadding, level, playSound],
  );

  const handleEnd = useCallback(() => {
    activeColorRef.current = null;
  }, []);

  useEffect(() => {
    const options = { passive: false } as AddEventListenerOptions;

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

  const ghostPath = useMemo(() => {
    if (!hintColor) return null;
    const solution = level.solutions[hintColor];
    if (!solution) return null;
    return expandPath(solution);
  }, [expandPath, hintColor, level]);

  const ghostPoints = useMemo(() => {
    if (!ghostPath) return [];

    return ghostPath.map(point => ({
      x: ((point.x + 0.5) / level.size) * 100,
      y: ((point.y + 0.5) / level.size) * 100,
    }));
  }, [ghostPath, level.size]);

  const ghostPolyline = useMemo(() => ghostPoints.map(point => `${point.x},${point.y}`).join(' '), [ghostPoints]);
  const hintAnimationSeconds = Math.max(4.8, hintAnimationMs / 1000);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-[min(94vw,72vh)] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 select-none touch-none sm:max-w-[min(95vw,80vh)]"
      style={{ padding: gridPadding, touchAction: 'none' }}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      <AnimatePresence>{showTutorial && <Tutorial level={level} />}</AnimatePresence>

      <div
        className="grid h-full w-full"
        style={{
          gap: gridGap,
          gridTemplateColumns: `repeat(${level.size}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${level.size}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: level.size * level.size }).map((_, index) => {
          const x = index % level.size;
          const y = Math.floor(index / level.size);
          const pairIndex = level.pairs.findIndex(
            pair => (pair.start.x === x && pair.start.y === y) || (pair.end.x === x && pair.end.y === y),
          );
          const pair = pairIndex !== -1 ? level.pairs[pairIndex] : null;
          const SymbolIcon = pair ? SYMBOLS[pairIndex % SYMBOLS.length] : null;
          const isHinted = pair && hintColor === pair.color;

          return (
            <div key={index} className="relative flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
              {pair && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: isHinted ? [1, 1.15, 1.06, 1] : 1,
                    boxShadow: completedColors.has(pair.color)
                      ? `${pair.color}88 0px 0px 28px`
                      : isHinted
                        ? `${pair.color} 0px 0px 42px`
                        : `${pair.color}44 0px 0px 16px`,
                  }}
                  transition={isHinted ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.25 }}
                  className="absolute z-10 flex cursor-pointer items-center justify-center rounded-full shadow-lg"
                  style={{ backgroundColor: pair.color, width: endpointSize, height: endpointSize }}
                >
                  {isColorblindMode && SymbolIcon ? (
                    <SymbolIcon size={Math.max(14, endpointSize * 0.42)} className="text-white/85" />
                  ) : (
                    <motion.div
                      animate={{ scale: [1, 1.18, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="rounded-full bg-white/30"
                      style={{ width: Math.max(8, endpointSize * 0.28), height: Math.max(8, endpointSize * 0.28) }}
                    />
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <svg
        className="pointer-events-none absolute"
        style={{ inset: gridPadding }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {ghostPoints.length > 0 && (

          <>
            <motion.polyline
              points={ghostPolyline}
              fill="none"
              stroke="white"
              strokeWidth={pathStroke.line + 0.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-15 blur-[2px]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 0.28, 0.18] }}
              transition={{ duration: hintAnimationSeconds * 0.55, ease: 'easeOut' }}
            />
            <motion.polyline
              points={ghostPolyline}
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              strokeDasharray="3 5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 0.7, 0.15, 0],
                strokeDashoffset: [18, 0, -18, -30],
              }}
              transition={{
                duration: hintAnimationSeconds,
                ease: 'easeInOut',
                times: [0, 0.38, 0.8, 1],
              }}
            />
          </>
        )}

        {Object.entries(paths).map(([color, path]) => {
          const polyline = path
            .map(point => {
              const cellWidth = 100 / level.size;
              const cellHeight = 100 / level.size;
              return `${(point.x + 0.5) * cellWidth},${(point.y + 0.5) * cellHeight}`;
            })
            .join(' ');

          return (
            <g key={color}>
              <polyline
                points={polyline}
                fill="none"
                stroke={color}
                strokeWidth={pathStroke.glow}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
              />
              <polyline
                points={polyline}
                fill="none"
                stroke={color}
                strokeWidth={pathStroke.line}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {lastConnection && <ParticleEffect key={`${lastConnection.color}-${lastConnection.x}-${lastConnection.y}`} x={lastConnection.x} y={lastConnection.y} color={lastConnection.color} />}
      </AnimatePresence>
    </div>
  );
};

export default PuzzleGrid;
