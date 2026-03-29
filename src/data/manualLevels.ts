import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

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

function spiral(size: number): Point[] {
  const path: Point[] = [];
  let top = 0, bottom = size - 1, left = 0, right = size - 1;
  while (top <= bottom && left <= right) {
    for (let x = left; x <= right; x++) path.push({ x, y: top });
    top++;
    for (let y = top; y <= bottom; y++) path.push({ x: right, y });
    right--;
    if (top <= bottom) {
      for (let x = right; x >= left; x--) path.push({ x, y: bottom });
      bottom--;
    }
    if (left <= right) {
      for (let y = bottom; y >= top; y--) path.push({ x: left, y });
      left++;
    }
  }
  return path;
}

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

function createPath(size: number, occupied: Set<string>): Point[] {
  const path: Point[] = [];
  const key = (x: number, y: number) => `${x},${y}`;

  let x = Math.floor(Math.random() * size);
  let y = Math.floor(Math.random() * size);

  while (occupied.has(key(x, y))) {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  }

  path.push({ x, y });
  occupied.add(key(x, y));

  const maxSteps = size * 3;

  for (let i = 0; i < maxSteps; i++) {
    const dirs = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ].sort(() => Math.random() - 0.5);

    let moved = false;

    for (const d of dirs) {
      const nx = x + d.dx;
      const ny = y + d.dy;

      if (
        nx >= 0 && ny >= 0 &&
        nx < size && ny < size &&
        !occupied.has(key(nx, ny))
      ) {
        x = nx;
        y = ny;
        path.push({ x, y });
        occupied.add(key(nx, ny));
        moved = true;
        break;
      }
    }

    if (!moved) break;
  }

  return path;
}

function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 5;

  if (id <= 30) { size = 5; pairCount = 5; }
  else if (id <= 60) { size = 6; pairCount = 6; }
  else if (id <= 90) { size = 7; pairCount = 7; }
  else { size = 8; pairCount = 8; }

  const occupied = new Set<string>();
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  for (let i = 0; i < pairCount; i++) {
    let path: Point[] = [];
    let attempts = 0;

    while (path.length < 2 && attempts < 50) {
      path = createPath(size, occupied);
      attempts++;
    }

    if (path.length < 2) continue;

    const color = COLORS[i % COLORS.length];

    pairs.push({
      color,
      start: path[0],
      end: path[path.length - 1],
    });

    solutions[color] = path;
  }

  return { id, size, pairs, solutions };
}

export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) => buildLevel(i + 1));