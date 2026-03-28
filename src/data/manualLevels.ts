import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// 🧠 Create a more complex snake with twists
function createComplexPath(size: number): Point[] {
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

  // 🔀 Add twists (this is what makes it tricky)
  for (let i = 2; i < path.length - 2; i += 4) {
    const temp = path[i];
    path[i] = path[i + 1];
    path[i + 1] = temp;
  }

  return path;
}

// ✂️ Split path into deceptive segments
function splitPathDeceptive(path: Point[], pairCount: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  const chunk = Math.floor(path.length / pairCount);

  for (let i = 0; i < pairCount; i++) {
    const startIdx = i * chunk;
    const endIdx = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * chunk - 1;

    let segment = path.slice(startIdx, endIdx + 1);

    // 🔥 Trick: reverse some segments → misleading layout
    if (i % 2 === 1) {
      segment = segment.reverse();
    }

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

// 🎯 Build level with aggressive difficulty scaling
function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  // 📈 Difficulty progression
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

  // 🔥 Increase complexity faster
  if (id % 7 === 0) pairCount++;
  if (id % 11 === 0) pairCount++;

  const basePath = createComplexPath(size);

  let path = [...basePath];

  // 🔀 Stronger variation (prevents repetition)
  if (id % 2 === 0) path.reverse();

  if (id % 3 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x }));
  }

  if (id % 4 === 0) {
    path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));
  }

  if (id % 5 === 0) {
    path = path.map(p => ({ x: p.x, y: size - 1 - p.y }));
  }

  const { pairs, solutions } = splitPathDeceptive(path, pairCount);

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