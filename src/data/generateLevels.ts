import fs from "fs";

type Point = { x: number; y: number };

type Level = {
  id: number;
  size: number;
  pairs: {
    color: string;
    start: Point;
    end: Point;
  }[];
  solutions: Record<string, Point[]>;
};

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// Snake (valid base)
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

// Shuffle segments safely
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
    if ((i + seed) % 2 === 0) segment = segment.reverse();

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

function buildLevel(id: number): Level {
  let size = 5;
  let pairs = 5;

  if (id > 30) { size = 6; pairs = 6; }
  if (id > 60) { size = 7; pairs = 7; }
  if (id > 90) { size = 8; pairs = 8; }

  let path = snake(size);

  // variation
  if (id % 2 === 0) path = path.reverse();
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

// generate all levels
const levels: Level[] = [];
for (let i = 1; i <= 120; i++) {
  levels.push(buildLevel(i));
}

// write to file
// Note: This part requires a Node.js environment to execute
try {
  fs.writeFileSync(
    "manualLevelsGenerated.json",
    JSON.stringify(levels, null, 2)
  );
  console.log("✅ 120 levels generated!");
} catch (e) {
  console.log("Note: fs.writeFileSync only works in Node.js environments.");
}