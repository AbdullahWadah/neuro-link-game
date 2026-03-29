import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

function createPath(size: number, occupied: Set<string>): Point[] {
  const path: Point[] = [];
  const key = (x: number, y: number) => `${x},${y}`;

  let x = Math.floor(Math.random() * size);
  let y = Math.floor(Math.random() * size);

  let attempts = 0;
  while (occupied.has(key(x, y)) && attempts < 100) {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
    attempts++;
  }

  if (attempts >= 100) return [];

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
      if (nx >= 0 && ny >= 0 && nx < size && ny < size && !occupied.has(key(nx, ny))) {
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

export function buildManualLevel(id: number): Level {
  // 🎯 Clean progression (5 → 8 over 120 levels)
  const size = Math.min(8, 5 + Math.floor((id - 1) / 40));
  const pairCount = size; // always match size (Flow-style)

  const occupied = new Set<string>();
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  for (let i = 0; i < pairCount; i++) {
  let path: Point[] = [];
  let attempts = 0;

  while (path.length < 2 && attempts < 100) {
    path = createPath(size, occupied);
    attempts++;
  }

  // ✅ Final safety fallback
  if (!path || path.length < 2) {
    const fallbackCells: Point[] = [];

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        fallbackCells.push({ x, y });
      }
    }

    path = [fallbackCells[0], fallbackCells[1]];
  }

  const color = COLORS[i % COLORS.length];

  const start = path[0];
  const end = path[path.length - 1];

  // ✅ Extra guard (prevents undefined crash)
  if (!start || !end) continue;

  pairs.push({
    color,
    start,
    end,
  });

  solutions[color] = path;

  const key = (p: Point) => `${p.x},${p.y}`;
  occupied.add(key(start));
  occupied.add(key(end));
}

  return { id, size, pairs, solutions };
}