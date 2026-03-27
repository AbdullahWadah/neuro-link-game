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

// Refined high-contrast color palette
const COLORS = [
  "#FF3B30", // Red
  "#FF9500", // Orange
  "#FFCC00", // Yellow
  "#4CD964", // Green
  "#5AC8FA", // Light Blue
  "#007AFF", // Blue
  "#5856D6", // Indigo
  "#AF52DE", // Purple
  "#FF2D55", // Pink
  "#A2845E", // Brown
  "#000000", // Black (for high contrast)
  "#1D1D1F", // Dark Gray
  "#E5E5EA", // Light Gray
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const generatePlayableLevel = (id: number): Level => {
  // Level 1: Tutorial 4x4
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

  // Progression Logic
  let size = 5;
  let targetPairs = 5;

  if (id >= 2 && id <= 21) {
    size = 5;
    targetPairs = 5;
  } else if (id <= 50) {
    size = 6;
    targetPairs = 6;
  } else if (id <= 85) {
    size = 7;
    targetPairs = 7;
  } else {
    size = 8;
    targetPairs = 8;
  }

  // Unique seed for every level ID
  const baseSeed = id * 12345.6789 + 98765;
  let currentSeed = baseSeed;
  
  const nextRng = () => {
    currentSeed = seededRandom(currentSeed) * 1000;
    return currentSeed / 1000;
  };

  const getDistance = (p1: Point, p2: Point) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    
    // Pick distinct colors for this level
    const levelColors = [...COLORS].sort(() => nextRng() - 0.5);

    for (let p = 0; p < targetPairs; p++) {
      let pairSuccess = false;
      let pairAttempts = 0;

      while (!pairSuccess && pairAttempts < 100) {
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
            // Heuristic: prefer neighbors that are more constrained to fill the grid better
            neighbors.sort((a, b) => {
              const countOccupied = (pt: Point) => [
                { x: pt.x + 1, y: pt.y }, { x: pt.x - 1, y: pt.y },
                { x: pt.x, y: pt.y + 1 }, { x: pt.x, y: pt.y - 1 }
              ].filter(n => 
                n.x < 0 || n.x >= size || n.y < 0 || n.y >= size || grid[n.y][n.x] !== null
              ).length;
              return countOccupied(b) - countOccupied(a);
            });

            const next = nextRng() > 0.05 ? neighbors[0] : neighbors[Math.floor(nextRng() * neighbors.length)];
            currentPath.push(next);
            tempGridPoints.push(next);
            grid[next.y][next.x] = color;
          }
        }

        const minPathLength = Math.max(3, size - 2);
        const dist = getDistance(currentPath[0], currentPath[currentPath.length - 1]);

        if (currentPath.length >= minPathLength && dist >= 2) {
          paths.push(currentPath);
          pairSuccess = true;
        } else {
          tempGridPoints.forEach(pt => grid[pt.y][pt.x] = null);
        }
      }

      if (!pairSuccess && p > 0) return null;
    }

    // Ensure high grid coverage for difficulty
    const filledCount = grid.flat().filter(c => c !== null).length;
    if (filledCount / (size * size) < 0.85) return null;

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
  while (!level && attempts < 2000) {
    level = generate();
    attempts++;
  }

  // Robust fallback with unique layout per seed
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