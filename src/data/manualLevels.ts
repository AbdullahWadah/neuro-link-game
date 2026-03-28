import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// 🧠 Create a snake path that fills the grid (NO overlaps, Flow-style)
function createSnakePath(size: number): Point[] {
  const path: Point[] = [];

  for (let y = 0; y < size; y++) {
    if (y % 2 === 0) {
      for (let x = 0; x < size; x++) {
        path.push({ x, y });
      }
    } else {
      for (let x = size - 1; x >= 0; x--) {
        path.push({ x, y });
      }
    }
  }

  return path;
}

// ✂️ Split snake into N valid segments (pairs)
function splitPath(path: Point[], pairCount: number) {
  const segmentLength = Math.floor(path.length / pairCount);
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  for (let i = 0; i < pairCount; i++) {
    const startIdx = i * segmentLength;
    const endIdx = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * segmentLength - 1;

    const segment = path.slice(startIdx, endIdx + 1);
    const color = COLORS[i];

    pairs.push({
      color,
      start: segment[0],
      end: segment[segment.length - 1],
    });

    solutions[color] = segment;
  }

  return { pairs, solutions };
}

// 🎯 MAIN LEVEL BUILDER
function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  if (id > 30) {
    size = 6;
    pairCount = 5;
  }
  if (id > 70) {
    size = 7;
    pairCount = 6;
  }
  if (id > 100) {
    size = 8;
    pairCount = 8;
  }

  // Increase difficulty slightly
  if (id % 10 === 0) pairCount++;

  const basePath = createSnakePath(size);

  // 🔀 Variation: rotate / reverse for uniqueness
  let path = [...basePath];

  if (id % 2 === 0) path.reverse();

  if (id % 3 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x })); // transpose
  }

  if (id % 5 === 0) {
    path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));
  }

  const { pairs, solutions } = splitPath(path, pairCount);

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