import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// Base snake (valid grid coverage)
function createSnake(size: number): Point[] {
  const path: Point[] = [];

  for (let y = 0; y < size; y++) {
    if (y % 2 === 0) {
      for (let x = 0; x < size; x++) path.push({ x, y });
    } else {
      for (let x = size - 1; x >= 0; x--) path.push({ x, y });
    }
  }

  return path;
}

// 🔥 Create interlocking puzzle segments
function createPuzzleSegments(path: Point[], pairCount: number, level: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  const chunk = Math.floor(path.length / pairCount);

  let segments: Point[][] = [];

  for (let i = 0; i < pairCount; i++) {
    const start = i * chunk;
    const end = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * chunk - 1;

    segments.push(path.slice(start, end + 1));
  }

  // 🔥 INTERLOCKING LOGIC (this is the magic)
  for (let i = 0; i < segments.length - 1; i++) {
    if ((i + level) % 2 === 0) {
      const cut = Math.floor(segments[i].length / 2);

      const partA = segments[i].slice(0, cut);
      const partB = segments[i + 1].slice(cut);

      segments[i] = [...partA, ...partB];
      segments[i + 1] = [
        ...segments[i + 1].slice(0, cut),
        ...segments[i].slice(cut)
      ];
    }
  }

  // Build pairs
  segments.forEach((segment, i) => {
    const color = COLORS[i];

    pairs.push({
      color,
      start: segment[0],
      end: segment[segment.length - 1],
    });

    solutions[color] = segment;
  });

  return { pairs, solutions };
}

// 🎯 Level builder
function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  if (id > 20) {
    size = 6;
    pairCount = 5;
  }
  if (id > 50) {
    size = 7;
    pairCount = 6;
  }
  if (id > 90) {
    size = 8;
    pairCount = 8;
  }

  // Increase difficulty
  if (id % 8 === 0) pairCount++;
  if (id % 13 === 0) pairCount++;

  let path = createSnake(size);

  // Safe transforms (no break)
  if (id % 2 === 0) path = [...path].reverse();

  if (id % 3 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x }));
  }

  if (id % 4 === 0) {
    path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));
  }

  if (id % 5 === 0) {
    path = path.map(p => ({ x: p.x, y: size - 1 - p.y }));
  }

  const { pairs, solutions } = createPuzzleSegments(path, pairCount, id);

  return {
    id,
    size,
    pairs,
    solutions
  };
}

// 🚀 EXPORT 120 LEVELS
export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) =>
  buildLevel(i + 1)
);