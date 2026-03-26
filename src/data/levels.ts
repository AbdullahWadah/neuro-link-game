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
  // Hardcoded perfect introductory levels
  if (id === 1) {
    return {
      id: 1, size: 3,
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

  if (id === 2) {
    return {
      id: 2, size: 3,
      pairs: [
        { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 0, y: 2 } },
        { color: COLORS[1], start: { x: 1, y: 0 }, end: { x: 1, y: 2 } },
        { color: COLORS[2], start: { x: 2, y: 0 }, end: { x: 2, y: 2 } }
      ],
      solutions: {
        [COLORS[0]]: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
        [COLORS[1]]: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [COLORS[2]]: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
      }
    };
  }

  if (id === 3) {
    return {
      id: 3, size: 3,
      pairs: [
        { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
        { color: COLORS[1], start: { x: 2, y: 0 }, end: { x: 2, y: 2 } },
        { color: COLORS[2], start: { x: 0, y: 1 }, end: { x: 1, y: 2 } }
      ],
      solutions: {
        [COLORS[0]]: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
        [COLORS[1]]: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
        [COLORS[2]]: [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
      }
    };
  }

  // Difficulty scaling (Max 7x7)
  let size = 3;
  if (id > 5) size = 4;
  if (id > 20) size = 5;
  if (id > 50) size = 6;
  if (id > 80) size = 7;

  const seed = id * 123.456;
  let rng = seed;
  const nextRng = () => {
    rng = seededRandom(rng) * 1000;
    return rng / 1000;
  };

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    
    // Try to fill the grid with paths
    let colorIdx = 0;
    let attempts = 0;
    
    while (attempts < 100) {
      // Find first empty cell
      let start: Point | null = null;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!grid[y][x]) {
            start = { x, y };
            break;
          }
        }
        if (start) break;
      }

      if (!start) break; // Grid is full

      const currentPath: Point[] = [start];
      grid[start.y][start.x] = COLORS[colorIdx % COLORS.length];
      
      // Grow path randomly
      let pathAttempts = 0;
      while (pathAttempts < 20) {
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
        grid[next.y][next.x] = COLORS[colorIdx % COLORS.length];
        pathAttempts++;
      }

      if (currentPath.length < 2) {
        // If path is too short, try to merge it with a neighbor or discard
        grid[start.y][start.x] = null;
        attempts++;
        continue;
      }

      paths.push(currentPath);
      colorIdx++;
    }

    // Check if grid is 100% filled
    const isFilled = grid.every(row => row.every(cell => cell !== null));
    if (!isFilled || paths.length < 2) return null;

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

  let level: Level | null = null;
  let genAttempts = 0;
  while (!level && genAttempts < 1000) {
    level = generate();
    genAttempts++;
  }

  return level || generatePlayableLevel(1);
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel((seed % 100) + 1);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);