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
  "#D4A5A5", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71"
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generatePlayableLevel = (id: number, size: number, complexity: number = 1.5): Level => {
  const seed = id * 123.456;
  let attempts = 0;
  
  while (attempts < 200) {
    attempts++;
    const grid = Array(size).fill(null).map(() => Array(size).fill(-1));
    const pairs: Pair[] = [];
    const solutions: Record<string, Point[]> = {};
    let pathId = 0;

    const getNeighbors = (x: number, y: number) => {
      return [
        { x: x + 1, y }, { x: x - 1, y },
        { x, y: y + 1 }, { x, y: y - 1 }
      ].filter(p => p.x >= 0 && p.x < size && p.y >= 0 && p.y < size);
    };

    // Try to fill the grid with winding paths
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] !== -1) continue;

        let current: Point = { x, y };
        let path: Point[] = [current];
        grid[y][x] = pathId;

        // Increase target length for more complexity
        const targetLength = Math.floor(seededRandom(seed + pathId + attempts) * (size * size * 0.8)) + 4;
        
        for (let i = 0; i < targetLength; i++) {
          const neighbors = getNeighbors(current.x, current.y)
            .filter(n => grid[n.y][n.x] === -1);
          
          if (neighbors.length === 0) break;
          
          // Heuristic: prefer neighbors that have fewer free neighbors to create more "winding" paths
          neighbors.sort((a, b) => {
            const aFree = getNeighbors(a.x, a.y).filter(n => grid[n.y][n.x] === -1).length;
            const bFree = getNeighbors(b.x, b.y).filter(n => grid[n.y][n.x] === -1).length;
            return aFree - bFree;
          });

          // Add some randomness to the heuristic
          const next = seededRandom(seed + pathId + i + attempts) > 0.3 ? neighbors[0] : neighbors[Math.floor(seededRandom(seed + pathId + i + attempts) * neighbors.length)];
          
          grid[next.y][next.x] = pathId;
          path.push(next);
          current = next;
        }

        if (path.length >= 3) { // Minimum path length of 3 for more trickiness
          const color = COLORS[pathId % COLORS.length];
          pairs.push({
            color,
            start: path[0],
            end: path[path.length - 1]
          });
          solutions[color] = path;
          pathId++;
        } else {
          // Backtrack if path is too short
          path.forEach(p => grid[p.y][p.x] = -1);
        }
        
        if (pathId >= COLORS.length) break;
      }
      if (pathId >= COLORS.length) break;
    }

    // Check if grid is sufficiently filled (at least 90%)
    let filledCount = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] !== -1) filledCount++;
      }
    }

    if (filledCount >= (size * size * 0.9) && pairs.length >= (size - 1)) {
      return { id, size, pairs, solutions };
    }
  }

  // Fallback for very small grids
  return {
    id,
    size: 3,
    pairs: [
      { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 2, y: 1 } },
      { color: COLORS[1], start: { x: 0, y: 1 }, end: { x: 2, y: 2 } },
      { color: COLORS[2], start: { x: 0, y: 2 }, end: { x: 1, y: 0 } }
    ],
    solutions: {} // Solutions are generated on the fly or not strictly needed for fallback
  };
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel(seed, 8, 2.5);
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 5) size = 4;   // Start 4x4 earlier
    if (i > 20) size = 5;  // Start 5x5 earlier
    if (i > 45) size = 6;  // Start 6x6 earlier
    if (i > 75) size = 7;  // Add 7x7 for end-game challenge
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();