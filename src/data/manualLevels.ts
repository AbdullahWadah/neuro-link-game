import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * Generate a simple deterministic straight-line path between two points
 */
function generateStraightPath(start: Point, end: Point): Point[] {
  const path: Point[] = [];

  let x = start.x;
  let y = start.y;

  path.push({ x, y });

  while (x !== end.x) {
    x += x < end.x ? 1 : -1;
    path.push({ x, y });
  }

  while (y !== end.y) {
    y += y < end.y ? 1 : -1;
    path.push({ x, y });
  }

  return path;
}

/**
 * Deterministically pick pairs based on level index
 */
function generatePairs(size: number, pairCount: number, levelId: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  let colorIndex = 0;

  for (let i = 0; i < pairCount; i++) {
    // Deterministic endpoints (spread across grid)
    const start: Point = {
      x: (i + levelId) % size,
      y: (i * 2 + levelId) % size
    };

    const end: Point = {
      x: (size - 1 - i + levelId) % size,
      y: (size - 1 - (i * 2 + levelId)) % size
    };

    const color = COLORS[colorIndex % COLORS.length];
    colorIndex++;

    const path = generateStraightPath(start, end);

    pairs.push({
      color,
      start,
      end
    });

    solutions[color] = path;
  }

  return { pairs, solutions };
}

/**
 * Main level builder (NO randomness)
 */
function buildLevel(id: number): Level {
  // Clean progression:
  // 1–40   → 5x5
  // 41–80  → 6x6
  // 81–110 → 7x7
  // 111–120→ 8x8

  let size = 5;

  if (id <= 40) size = 5;
  else if (id <= 80) size = 6;
  else if (id <= 110) size = 7;
  else size = 8;

  const pairCount = size;

  const { pairs, solutions } = generatePairs(size, pairCount, id);

  return {
    id,
    size,
    pairs,
    solutions
  };
}

/**
 * Export 120 fixed levels
 */
export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) =>
  buildLevel(i + 1)
);