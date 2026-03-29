import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// 🔥 Build a full-grid Hamiltonian path (snake base)
function buildFullPath(size: number): Point[] {
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

// 🔥 Break path into segments (Flow style)
function createFlowPairs(path: Point[], pairCount: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  const length = path.length;

  // Choose cut points far apart
  const indices: number[] = [];

  while (indices.length < pairCount * 2) {
    const idx = Math.floor(Math.random() * length);

    if (
      !indices.includes(idx) &&
      indices.every(i => Math.abs(i - idx) > length / (pairCount * 2))
    ) {
      indices.push(idx);
    }
  }

  indices.sort((a, b) => a - b);

  for (let i = 0; i < pairCount; i++) {
    const startIdx = indices[i];
    const endIdx = indices[i + pairCount];

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

// 🎯 Build level
function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 5;

  if (id <= 30) { size = 5; pairCount = 5; }
  else if (id <= 60) { size = 6; pairCount = 6; }
  else if (id <= 90) { size = 7; pairCount = 7; }
  else { size = 8; pairCount = 8; }

  let path = buildFullPath(size);

  // 🔥 add variation
  if (id % 2 === 0) path = [...path].reverse();

  if (id % 3 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x }));
  }

  if (id % 4 === 0) {
    path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));
  }

  const { pairs, solutions } = createFlowPairs(path, pairCount);

  return {
    id,
    size,
    pairs,
    solutions
  };
}

// 🚀 EXPORT
export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) =>
  buildLevel(i + 1)
);