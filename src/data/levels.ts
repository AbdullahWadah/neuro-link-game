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
  // Difficulty scaling (Max 7x7 as requested)
  let size = 3;
  if (id > 5) size = 4;
  if (id > 20) size = 5;
  if (id > 50) size = 6;
  if (id > 80) size = 7;

  // Hardcoded Level 1 for the tutorial
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

  const seed = id * 789.123;
  let rng = seed;
  const nextRng = () => {
    rng = seededRandom(rng) * 1000;
    return rng / 1000;
  };

  const generate = (): Level | null => {
    const grid: boolean[][] = Array(size).fill(null).map(() => Array(size).fill(false));
    const pairs: Pair[] = [];
    const solutions: Record<string, Point[]> = {};
    
    const numPairs = size === 3 ? 3 : size === 4 ? 4 : size === 5 ? 5 : size === 6 ? 6 : 7;

    for (let i = 0; i < numPairs; i++) {
      let emptyCells: Point[] = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!grid[y][x]) emptyCells.push({ x, y });
        }
      }

      if (emptyCells.length === 0) break;
      const start = emptyCells[Math.floor(nextRng() * emptyCells.length)];
      
      let currentPath: Point[] = [start];
      grid[start.y][start.x] = true;
      
      const targetLength = Math.floor(nextRng() * (size * 1.2)) + 2;

      for (let step = 0; step < 30; step++) {
        const last = currentPath[currentPath.length - 1];
        const neighbors = [
          { x: last.x + 1, y: last.y }, { x: last.x - 1, y: last.y },
          { x: last.x, y: last.y + 1 }, { x: last.x, y: last.y - 1 }
        ].filter(n => 
          n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]
        );

        if (neighbors.length === 0) break;
        
        const next = neighbors[Math.floor(nextRng() * neighbors.length)];
        currentPath.push(next);
        grid[next.y][next.x] = true;

        if (currentPath.length >= targetLength) break;
      }

      if (currentPath.length < 2) {
        currentPath.forEach(p => grid[p.y][p.x] = false);
        continue;
      }

      const color = COLORS[i % COLORS.length];
      pairs.push({
        color,
        start: currentPath[0],
        end: currentPath[currentPath.length - 1]
      });
      solutions[color] = currentPath;
    }

    if (pairs.length < numPairs - 1) return null;

    return { id, size, pairs, solutions };
  };

  let level: Level | null = null;
  let attempts = 0;
  while (!level && attempts < 200) {
    level = generate();
    attempts++;
  }

  return level || generatePlayableLevel(1);
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel((seed % 100) + 1);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);