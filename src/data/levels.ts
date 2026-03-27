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
  // 1. Determine Structure based on requirements
  let size = 4;
  let targetPairs = 4;

  if (id <= 10) {
    size = 4;
    targetPairs = 4;
  } else if (id <= 30) {
    size = 5;
    targetPairs = 5;
  } else if (id <= 60) {
    size = 6;
    targetPairs = 6;
  } else if (id <= 100) {
    size = 7;
    targetPairs = 7;
  } else {
    size = 8;
    targetPairs = 8;
  }

  // Use a unique seed for every level to prevent repetition
  const baseSeed = id * 791.9 + size * 13.7;
  let currentSeed = baseSeed;
  
  const nextRng = () => {
    currentSeed = seededRandom(currentSeed) * 1000;
    return currentSeed / 1000;
  };

  const getDistance = (p1: Point, p2: Point) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    let colorIdx = 0;
    
    // Try to fill the grid with winding paths
    for (let p = 0; p < targetPairs; p++) {
      const emptyCells: Point[] = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!grid[y][x]) emptyCells.push({ x, y });
        }
      }

      if (emptyCells.length === 0) break;
      
      // Pick a random start point
      const start = emptyCells[Math.floor(nextRng() * emptyCells.length)];
      const currentPath: Point[] = [start];
      const color = COLORS[colorIdx % COLORS.length];
      grid[start.y][start.x] = color;
      
      let stuck = false;
      while (!stuck) {
        const last = currentPath[currentPath.length - 1];
        const neighbors = [
          { x: last.x + 1, y: last.y }, { x: last.x - 1, y: last.y },
          { x: last.x, y: last.y + 1 }, { x: last.x, y: last.y - 1 }
        ].filter(n => 
          n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]
        );

        if (neighbors.length === 0) {
          stuck = true;
        } else {
          // Prioritize neighbors that have fewer empty neighbors to create winding paths
          neighbors.sort((a, b) => {
            const countEmpty = (p: Point) => [
              { x: p.x + 1, y: p.y }, { x: p.x - 1, y: p.y },
              { x: p.x, y: p.y + 1 }, { x: p.x, y: p.y - 1 }
            ].filter(n => n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]).length;
            return countEmpty(a) - countEmpty(b);
          });

          // Add some randomness to the choice but favor the winding heuristic
          const next = nextRng() > 0.15 ? neighbors[0] : neighbors[Math.floor(nextRng() * neighbors.length)];
          currentPath.push(next);
          grid[next.y][next.x] = color;
        }
      }

      // Validation: Path must be long enough and endpoints must have a minimum distance
      const minPathLength = size - 1;
      const minEndpointDist = size >= 6 ? 3 : 2;

      if (currentPath.length < minPathLength || getDistance(currentPath[0], currentPath[currentPath.length - 1]) < minEndpointDist) {
        // Backtrack if path is too simple
        currentPath.forEach(p => grid[p.y][p.x] = null);
        p--; // Retry this pair
        continue;
      }

      paths.push(currentPath);
      colorIdx++;
    }

    // Final Validation: Grid must be at least 90% full to ensure difficulty
    const filledCount = grid.flat().filter(c => c !== null).length;
    const fillRatio = filledCount / (size * size);
    
    if (fillRatio < 0.90 || paths.length !== targetPairs) return null;

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
  let attempts = 0;
  // High attempt limit to ensure we find a high-quality, high-fill grid
  while (!level && attempts < 5000) {
    level = generate();
    attempts++;
  }

  // Fallback only if generation fails after 5000 attempts (extremely unlikely)
  return level || {
    id, size,
    pairs: Array.from({ length: targetPairs }, (_, i) => ({
      color: COLORS[i % COLORS.length],
      start: { x: 0, y: i },
      end: { x: size - 1, y: i }
    })),
    solutions: {}
  };
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel((seed % 120) + 1);
};

export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);