import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// 🔥 Create a random valid path using BFS-style walk
function createPath(size: number, occupied: Set<string>): Point[] {
  const path: Point[] = [];

  let x = Math.floor(Math.random() * size);
  let y = Math.floor(Math.random() * size);

  const key = (x: number, y: number) => `${x},${y}`;

  while (occupied.has(key(x, y))) {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  }

  path.push({ x, y });
  occupied.add(key(x, y));

  const length = Math.floor(size * 2 + Math.random() * size);

  for (let i = 0; i < length; i++) {
    const directions = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ];

    directions.sort(() => Math.random() - 0.5);

    let moved = false;

    for (const d of directions) {
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
        occupied.add(key(x, y));
        moved = true;
        break;
      }
    }

    if (!moved) break;
  }

  return path;
}

// 🎯 Build level
function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 5;

  if (id > 30) { size = 6; pairCount = 6; }
  if (id > 60) { size = 7; pairCount = 7; }
  if (id > 90) { size = 8; pairCount = 8; }

  const occupied = new Set<string>();
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  for (let i = 0; i < pairCount; i++) {
    let path: Point[] = [];

    let attempts = 0;

    while (path.length < size && attempts < 50) {
      path = createPath(size, occupied);
      attempts++;
    }

    if (path.length < 2) continue;

    const color = COLORS[i];

    pairs.push({
      color,
      start: path[0],
      end: path[path.length - 1],
    });

    solutions[color] = path;
  }

  return { id, size, pairs, solutions };
}

// 🚀 EXPORT
export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) =>
  buildLevel(i + 1)
);