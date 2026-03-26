export interface Point {
  x: number;
  y: number;
}

export interface Pair {
  color: string;
  start: Point;
  end: Point;
}

export interface Level {
  id: number;
  size: number;
  pairs: Pair[];
  solutions: Record<string, Point[]>;
}

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD", 
  "#D4A5A5", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71",
  "#F472B6", "#A78BFA", "#34D399", "#FBBF24", "#60A5FA"
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const generatePlayableLevel = (id: number): Level => {
  // Difficulty ramp
  let size = 3;
  if (id > 3) size = 4;
  if (id > 10) size = 5;
  if (id > 25) size = 6;
  if (id > 50) size = 7;
  if (id > 80) size = 8;

  // Target number of pairs
  const targetPairs = Math.min(COLORS.length, Math.floor(size * 1.2) + Math.floor(id / 15));

  // Level 1 remains hardcoded for the tutorial
  if (id === 1) {
    return {
      id: 1,
      size: 3,
      pairs: [
        { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
        { color: COLORS[1], start: { x: 0, y: 1 }, end: { x: 2, y: 1 } },
        { color: COLORS[2], start: { x: 0, y: 2 }, end: { x: 2, y: 2 } }
      ],
      solutions: {
        [COLORS[0]]: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [COLORS[1]]: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [COLORS[2]]: [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
      }
    };
  }

  const seed = id * 123.456;
  let rng = seed;
  const nextRng = () => {
    rng = seededRandom(rng) * 1000;
    return rng / 1000;
  };

  // Path Merging Algorithm
  // 1. Initialize every cell as a path of length 1
  let paths: Point[][] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      paths.push([{ x, y }]);
    }
  }

  const getNeighbors = (p: Point) => {
    return [
      { x: p.x + 1, y: p.y }, { x: p.x - 1, y: p.y },
      { x: p.x, y: p.y + 1 }, { x: p.x, y: p.y - 1 }
    ].filter(n => n.x >= 0 && n.x < size && n.y >= 0 && n.y < size);
  };

  // 2. Randomly merge adjacent paths if they are endpoints
  let attempts = 0;
  while (paths.length > targetPairs && attempts < 2000) {
    attempts++;
    const p1Idx = Math.floor(nextRng() * paths.length);
    const path1 = paths[p1Idx];
    
    // Pick one of the two endpoints of path1
    const endPoint = nextRng() > 0.5 ? path1[0] : path1[path1.length - 1];
    const neighbors = getNeighbors(endPoint);
    
    for (const neighbor of neighbors) {
      const p2Idx = paths.findIndex(p => 
        p !== path1 && (
          (p[0].x === neighbor.x && p[0].y === neighbor.y) || 
          (p[p.length - 1].x === neighbor.x && p[p.length - 1].y === neighbor.y)
        )
      );

      if (p2Idx !== -1) {
        const path2 = paths[p2Idx];
        let newPath: Point[];

        // Determine merge orientation
        const isP1Start = path1[0].x === endPoint.x && path1[0].y === endPoint.y;
        const isP2Start = path2[0].x === neighbor.x && path2[0].y === neighbor.y;

        if (isP1Start && isP2Start) {
          newPath = [...path1.reverse(), ...path2];
        } else if (isP1Start && !isP2Start) {
          newPath = [...path2, ...path1];
        } else if (!isP1Start && isP2Start) {
          newPath = [...path1, ...path2];
        } else {
          newPath = [...path1, ...path2.reverse()];
        }

        paths.splice(Math.max(p1Idx, p2Idx), 1);
        paths.splice(Math.min(p1Idx, p2Idx), 1);
        paths.push(newPath);
        break;
      }
    }
  }

  // 3. Convert to Level format
  const levelPairs: Pair[] = [];
  const levelSolutions: Record<string, Point[]> = {};

  paths.forEach((path, i) => {
    const color = COLORS[i % COLORS.length];
    levelPairs.push({
      color,
      start: path[0],
      end: path[path.length - 1]
    });
    levelSolutions[color] = path;
  });

  return {
    id,
    size,
    pairs: levelPairs,
    solutions: levelSolutions
  };
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel(seed % 1000);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);