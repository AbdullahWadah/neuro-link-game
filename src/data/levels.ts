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
  "#F472B6", "#A78BFA", "#34D399", "#FBBF24", "#60A5FA",
  "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const generatePlayableLevel = (id: number): Level => {
  // Strict Grid Size Progression
  let size = 3;
  let targetPairs = 3;

  if (id <= 10) {
    size = 3;
    targetPairs = 3;
  } else if (id <= 30) {
    size = 4;
    targetPairs = 4;
  } else if (id <= 55) {
    size = 5;
    targetPairs = 5;
  } else if (id <= 80) {
    size = 6;
    targetPairs = 6;
  } else {
    size = 7;
    targetPairs = Math.min(8, 6 + Math.floor((id - 80) / 5));
  }

  const seed = id * 133.7 + size * 42;
  let rng = seed;
  const nextRng = () => {
    rng = seededRandom(rng) * 1000;
    return rng / 1000;
  };

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    
    // Attempt to fill the grid by growing paths
    let colorIdx = 0;
    let attempts = 0;
    
    // We want to reach exactly targetPairs if possible, or at least close to it
    while (colorIdx < targetPairs && attempts < 200) {
      // Find a random empty cell to start a new path
      const emptyCells: Point[] = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!grid[y][x]) emptyCells.push({ x, y });
        }
      }

      if (emptyCells.length === 0) break;
      
      const start = emptyCells[Math.floor(nextRng() * emptyCells.length)];
      const currentPath: Point[] = [start];
      const color = COLORS[colorIdx % COLORS.length];
      grid[start.y][start.x] = color;
      
      // Grow path
      let growing = true;
      while (growing) {
        const last = currentPath[currentPath.length - 1];
        const neighbors = [
          { x: last.x + 1, y: last.y }, { x: last.x - 1, y: last.y },
          { x: last.x, y: last.y + 1 }, { x: last.x, y: last.y - 1 }
        ].filter(n => 
          n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]
        );

        if (neighbors.length === 0) {
          growing = false;
        } else {
          // Prefer neighbors that have fewer empty neighbors to keep paths tight
          neighbors.sort((a, b) => {
            const getEmptyCount = (p: Point) => [
              { x: p.x + 1, y: p.y }, { x: p.x - 1, y: p.y },
              { x: p.x, y: p.y + 1 }, { x: p.x, y: p.y - 1 }
            ].filter(n => n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]).length;
            return getEmptyCount(a) - getEmptyCount(b);
          });

          // Add some randomness to the choice
          const next = nextRng() > 0.2 ? neighbors[0] : neighbors[Math.floor(nextRng() * neighbors.length)];
          currentPath.push(next);
          grid[next.y][next.x] = color;
        }
      }

      if (currentPath.length < 2) {
        grid[start.y][start.x] = null;
        attempts++;
        continue;
      }

      paths.push(currentPath);
      colorIdx++;
    }

    // Final check: Is the grid 100% filled?
    const isFilled = grid.every(row => row.every(cell => cell !== null));
    if (!isFilled || paths.length < targetPairs - 1) return null;

    const pairs: Pair[] = paths.map((path, i) => ({
      color: COLORS[i % COLORS.length],
      start: path[0],
      end: path[path.length - 1]
    }));

    const solutions: Record<string, Point[]> = {};
    paths.forEach((path, i) => {
      solutions[COLORS[i % COLORS.length]] = path;
    });

    return { id, size, pairs, solutions };
  };

  // Try multiple times to get a perfect level
  let level: Level | null = null;
  let genAttempts = 0;
  while (!level && genAttempts < 2000) {
    level = generate();
    genAttempts++;
  }

  // Fallback to a simple but guaranteed level if generation fails (should be rare with 2000 attempts)
  return level || {
    id, size,
    pairs: Array.from({ length: size }, (_, i) => ({
      color: COLORS[i % COLORS.length],
      start: { x: 0, y: i },
      end: { x: size - 1, y: i }
    })),
    solutions: {}
  };
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel((seed % 100) + 1);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);