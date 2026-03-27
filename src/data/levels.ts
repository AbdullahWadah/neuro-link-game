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
  // Level 1 is hardcoded for the tutorial
  if (id === 1) {
    return {
      id: 1,
      size: 4,
      pairs: [
        { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
        { color: COLORS[1], start: { x: 1, y: 0 }, end: { x: 3, y: 0 } },
        { color: COLORS[2], start: { x: 1, y: 1 }, end: { x: 3, y: 3 } },
        { color: COLORS[3], start: { x: 3, y: 1 }, end: { x: 3, y: 2 } },
      ],
      solutions: {
        [COLORS[0]]: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
        [COLORS[1]]: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
        [COLORS[2]]: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
        [COLORS[3]]: [{ x: 3, y: 1 }, { x: 3, y: 2 }],
      }
    };
  }

  let size = 4;
  let targetPairs = 4; // Default to 4 for 4x4 levels

  if (id <= 15) {
    size = 4;
    targetPairs = 4;
  } else if (id <= 40) {
    size = 5;
    targetPairs = 5;
  } else if (id <= 70) {
    size = 6;
    targetPairs = 6;
  } else if (id <= 100) {
    size = 7;
    targetPairs = 7;
  } else {
    size = 8;
    targetPairs = 8;
  }

  const baseSeed = id * 1548.5863 + 7919;
  let currentSeed = baseSeed;
  
  const nextRng = () => {
    currentSeed = seededRandom(currentSeed) * 1000;
    return currentSeed / 1000;
  };

  const getDistance = (p1: Point, p2: Point) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    const levelColors = [...COLORS].sort(() => nextRng() - 0.5);

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
        const color = levelColors[p % levelColors.length];
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
              const countOccupied = (pt: Point) => [
                { x: pt.x + 1, y: pt.y }, { x: pt.x - 1, y: pt.y },
                { x: pt.x, y: pt.y + 1 }, { x: pt.x, y: pt.y - 1 }
              ].filter(n => 
                n.x < 0 || n.x >= size || n.y < 0 || n.y >= size || grid[n.y][n.x] !== null
              ).length;
              return countOccupied(b) - countOccupied(a);
            });

            const next = nextRng() > 0.1 ? neighbors[0] : neighbors[Math.floor(nextRng() * neighbors.length)];
            currentPath.push(next);
            tempGridPoints.push(next);
            grid[next.y][next.x] = color;
          }
        }

        const minPathLength = Math.max(2, size - 2);
        const dist = getDistance(currentPath[0], currentPath[currentPath.length - 1]);

        if (currentPath.length >= minPathLength && dist >= 1) {
          paths.push(currentPath);
          pairSuccess = true;
        } else {
          tempGridPoints.forEach(pt => grid[pt.y][pt.x] = null);
        }
      }

      if (!pairSuccess && p > 0) return null;
    }

    const filledCount = grid.flat().filter(c => c !== null).length;
    if (filledCount / (size * size) < 0.80) return null;

    const pairs: Pair[] = paths.map((path, i) => ({
      color: levelColors[i % levelColors.length],
      start: path[0],
      end: path[path.length - 1]
    }));

    const solutions: Record<string, Point[]> = {};
    paths.forEach((path, i) => {
      solutions[levelColors[i % levelColors.length]] = path;
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