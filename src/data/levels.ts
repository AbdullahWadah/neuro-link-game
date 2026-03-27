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
    
    for (let p = 0; p < targetPairs; p++) {
      let pairSuccess = false;
      let pairAttempts = 0;

      while (!pairSuccess && pairAttempts < 50) {
        pairAttempts++;
        const emptyCells: Point[] = [];
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            if (!grid[y][x]) emptyCells.push({ x, y });
          }
        }

        if (emptyCells.length === 0) break;
        
        const start = emptyCells[Math.floor(nextRng() * emptyCells.length)];
        const currentPath: Point[] = [start];
        const color = COLORS[p % COLORS.length];
        
        // Temporarily mark grid to simulate path
        const tempGridPoints: Point[] = [start];
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
            neighbors.sort((a, b) => {
              const countEmpty = (pt: Point) => [
                { x: pt.x + 1, y: pt.y }, { x: pt.x - 1, y: pt.y },
                { x: pt.x, y: pt.y + 1 }, { x: pt.x, y: pt.y - 1 }
              ].filter(n => n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]).length;
              return countEmpty(a) - countEmpty(b);
            });

            const next = nextRng() > 0.2 ? neighbors[0] : neighbors[Math.floor(nextRng() * neighbors.length)];
            currentPath.push(next);
            tempGridPoints.push(next);
            grid[next.y][next.x] = color;
          }
        }

        const minPathLength = size - 1;
        const minEndpointDist = size >= 6 ? 3 : 2;

        if (currentPath.length >= minPathLength && getDistance(currentPath[0], currentPath[currentPath.length - 1]) >= minEndpointDist) {
          paths.push(currentPath);
          pairSuccess = true;
        } else {
          // Cleanup failed path
          tempGridPoints.forEach(pt => grid[pt.y][pt.x] = null);
        }
      }

      if (!pairSuccess) return null;
    }

    const filledCount = grid.flat().filter(c => c !== null).length;
    const fillRatio = filledCount / (size * size);
    
    if (fillRatio < 0.80 || paths.length !== targetPairs) return null;

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
  while (!level && attempts < 1000) {
    level = generate();
    attempts++;
  }

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