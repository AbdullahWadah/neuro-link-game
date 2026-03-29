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

function split(path: Point[], pairCount: number, seed: number) {
  const chunk = Math.floor(path.length / pairCount);
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  for (let i = 0; i < pairCount; i++) {
    const start = i * chunk;
    const end = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * chunk - 1;

    let segment = path.slice(start, end + 1);

    // safe variation
    if ((i + seed) % 2 === 0) segment = [...segment].reverse();

    const color = COLORS[i % COLORS.length];

    pairs.push({
      color,
      start: segment[0],
      end: segment[segment.length - 1],
    });

    solutions[color] = segment;
  }

  return { pairs, solutions };
}

function buildLevel(id: number): Level {
  let size = 5;
  let pairs = 5;

  if (id > 30) { size = 6; pairs = 6; }
  if (id > 60) { size = 7; pairs = 7; }
  if (id > 90) { size = 8; pairs = 8; }

  let path = snake(size);

  // variation
  if (id % 2 === 0) path = [...path].reverse();
  if (id % 3 === 0) path = path.map(p => ({ x: p.y, y: p.x }));
  if (id % 5 === 0) path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));

  const { pairs: p, solutions } = split(path, pairs, id);

  return {
    id,
    size,
    pairs: p,
    solutions
  };
}

export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) => 
  buildLevel(i + 1)
);