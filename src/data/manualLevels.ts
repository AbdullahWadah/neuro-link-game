import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// ---------- DIFFERENT BASE PATTERNS ----------

// Snake
function snake(size: number): Point[] {
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

// Spiral (less repetitive 🔥)
function spiral(size: number): Point[] {
  const path: Point[] = [];
  let top = 0, bottom = size - 1, left = 0, right = size - 1;

  while (top <= bottom && left <= right) {
    // Top row
    for (let x = left; x <= right; x++) path.push({ x, y: top });
    top++;

    // Right column
    for (let y = top; y <= bottom; y++) path.push({ x: right, y });
    right--;

    // Bottom row
    for (let x = right; x >= left; x--) path.push({ x, y: bottom });
    bottom--;

    // Left column
    for (let y = bottom; y >= top; y--) path.push({ x: left, y });
    left++;
  }

  return path;
}

// Zigzag blocks (more tricky)
function zigzag(size: number): Point[] {
  const path: Point[] = [];

  for (let x = 0; x < size; x++) {
    if (x % 2 === 0) {
      for (let y = 0; y < size; y++) path.push({ x, y });
    } else {
      for (let y = size - 1; y >= 0; y--) path.push({ x, y });
    }
  }

  return path;
}

// ---------- SPLIT ----------

function splitPath(path: Point[], pairCount: number, level: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  const chunk = Math.floor(path.length / pairCount);

  for (let i = 0; i < pairCount; i++) {
    const start = i * chunk;
    const end = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * chunk - 1;

    let segment = path.slice(start, end + 1);

    // safe variation
    if ((i + level) % 2 === 0) segment = segment.reverse();

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

// ---------- LEVEL BUILDER ----------

function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  // ✅ FIXED progression
  if (id <= 20) {
    size = 5;
    pairCount = 4;
  } else if (id <= 50) {
    size = 6;
    pairCount = 5;
  } else if (id <= 90) {
    size = 7;
    pairCount = 6;
  } else {
    size = 8;
    pairCount = 8;
  }

  // Slight difficulty scaling
  if (id % 10 === 0) pairCount++;

  // 🔥 Pattern variation (fix repetition)
  let path: Point[];

  if (id % 3 === 0) path = spiral(size);
  else if (id % 3 === 1) path = snake(size);
  else path = zigzag(size);

  // Safe transforms
  if (id % 2 === 0) path = [...path].reverse();

  // Rotate 90 deg
  if (id % 4 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x }));
  }

  const { pairs, solutions } = splitPath(path, pairCount, id);

  return { id, size, pairs, solutions };
}

// ---------- EXPORT ----------

export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) => 
  buildLevel(i + 1)
);