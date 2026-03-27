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
  "#000000", // Black
  "#1D1D1F", // Dark Gray
  "#E5E5EA", // Light Gray
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const generatePlayableLevel = (id: number): Level => {
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

  const baseSeed = id * 12345.6789 + 98765;
  let currentSeed = baseSeed;
  
  const nextRng = () => {
    currentSeed = seededRandom(currentSeed) * 1000;
    return currentSeed / 1000;
  };

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    const levelColors = [...COLORS].sort(() => nextRng() - 0.5);

    for (let p = 0; p < targetPairs; p++) {
      let pairSuccess = false;
      let pairAttempts = 0;

      while (!pairSuccess && pairAttempts < 150) {
        pairAttempts++;
        const emptyCells: Point[] = [];
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            if (!grid[y][x]) emptyCells.push({ x, y });
          }
        }

        if (emptyCells.length === 0) break;
        
        // Pick a random start point that isn't necessarily on the edge
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
            // To avoid "facing each other", we favor winding paths
            // We do this by adding a bit of randomness to the neighbor selection
            // but still preferring neighbors that keep the grid fillable.
            neighbors.sort((a, b) => {
              const countOccupied = (pt: Point) => [
                { x: pt.x + 1, y: pt.y }, { x: pt.x - 1, y: pt.y },
                { x: pt.x, y: pt.y + 1 }, { x: pt.x, y: pt.y - 1 }
              ].filter(n => 
                n.x < 0 || n.x >= size || n.y < 0 || n.y >= size || grid[n.y][n.x] !== null
              ).length;
              
              // Mix of constraint-based and random to create winding paths
              const scoreA = countOccupied(a) + nextRng() * 2;
              const scoreB = countOccupied(b) + nextRng() * 2;
              return scoreB - scoreA;
            });

            const next = neighbors[0];
            currentPath.push(next);
            tempGridPoints.push(next);
            grid[next.y][next.x] = color;
          }
        }

        // Ensure the path is long enough and the ends aren't too close
        const minPathLength = Math.max(4, size - 1);
        const dist = Math.abs(currentPath[0].x - currentPath[currentPath.length - 1].x) + 
                     Math.abs(currentPath[0].y - currentPath[currentPath.length - 1].y);

        if (currentPath.length >= minPathLength && dist >= 2) {
          paths.push(currentPath);
          pairSuccess = true;
        } else {
          tempGridPoints.forEach(pt => grid[pt.y][pt.x] = null);
        }
      }

      if (!pairSuccess && p > 0) return null;
    }

    const filledCount = grid.flat().filter(c => c !== null).length;
    // High coverage requirement for logical puzzles
    if (filledCount / (size * size) < 0.90) return null;

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
  while (!level && attempts < 3000) {
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