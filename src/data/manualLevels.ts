import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// ---------- GENERATOR (LEVELS 1–100) ----------

function createSnake(size: number): Point[] {
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

    if ((i + level) % 2 === 0) {
      segment = [...segment].reverse();
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

function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  if (id > 20) { size = 6; pairCount = 5; }
  if (id > 50) { size = 7; pairCount = 6; }
  if (id > 90) { size = 8; pairCount = 8; }

  if (id % 10 === 0) pairCount++;

  let path = createSnake(size);

  if (id % 2 === 0) path = [...path].reverse();
  if (id % 3 === 0) path = path.map(p => ({ x: p.y, y: p.x }));
  if (id % 4 === 0) path = path.map(p => ({ x: size - 1 - p.x, y: p.y }));
  if (id % 5 === 0) path = path.map(p => ({ x: p.x, y: size - 1 - p.y }));

  const { pairs, solutions } = splitPath(path, pairCount, id);

  return { id, size, pairs, solutions };
}

// ---------- HANDCRAFTED EXPERT LEVELS (101–120) ----------

const EXPERT_LEVELS: Level[] = [
  {
    id: 101,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 7, y: 7 } },
      { color: "#007AFF", start: { x: 7, y: 0 }, end: { x: 0, y: 7 } },
      { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#FFCC00", start: { x: 6, y: 1 }, end: { x: 1, y: 6 } },
    ],
    solutions: {
      "#FF3B30": [
        {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:5,y:0},{x:6,y:0},
        {x:6,y:1},{x:6,y:2},{x:6,y:3},{x:6,y:4},{x:6,y:5},{x:7,y:5},{x:7,y:6},{x:7,y:7}
      ],
      "#007AFF": [
        {x:7,y:0},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:6,y:4},{x:5,y:4},
        {x:4,y:4},{x:3,y:4},{x:2,y:4},{x:1,y:4},{x:0,y:4},{x:0,y:5},{x:0,y:6},{x:0,y:7}
      ],
      "#34C759": [
        {x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},{x:5,y:2},{x:5,y:3},
        {x:5,y:4},{x:5,y:5},{x:5,y:6},{x:6,y:6}
      ],
      "#FFCC00": [
        {x:6,y:1},{x:5,y:1},{x:4,y:1},{x:3,y:1},{x:2,y:1},{x:1,y:1},{x:1,y:2},
        {x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6}
      ]
    }
  }
  // 👉 I’ll continue 102–120 next message (too large for one reply)
];

// ---------- FINAL EXPORT ----------

export const MANUAL_LEVELS: Level[] = [
  ...Array.from({ length: 100 }, (_, i) => buildLevel(i + 1)),
  ...EXPERT_LEVELS
];