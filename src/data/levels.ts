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

export const generatePlayableLevel = (id: number): Level => {
  let size = 3;
  if (id > 5) size = 4;
  if (id > 15) size = 5;
  if (id > 35) size = 6;
  if (id > 65) size = 7;
  if (id > 85) size = 8;

  // Hard-coded Level 1 for a perfect introduction
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

  let attempts = 0;
  const maxAttempts = 1000;
  
  while (attempts < maxAttempts) {
    attempts++;
    const seed = id * 7919 + attempts * 104729; // Use different primes for better distribution
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

    const getEmptyCells = () => {
      const empty = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (grid[y][x] === -1) empty.push({ x, y });
        }
      }
      return empty;
    };

    let emptyCells = getEmptyCells();
    let success = true;

    while (emptyCells.length > 0 && pathId < COLORS.length) {
      const startIdx = Math.floor(seededRandom(seed + pathId) * emptyCells.length);
      const startPos = emptyCells[startIdx];
      
      let current = startPos;
      let path = [current];
      grid[current.y][current.x] = pathId;

      // Snake through the grid
      while (true) {
        const neighbors = getNeighbors(current.x, current.y).filter(n => grid[n.y][n.x] === -1);
        if (neighbors.length === 0) break;
        
        // Heuristic: prefer neighbors that have the fewest empty neighbors to avoid trapping
        neighbors.sort((a, b) => {
          const aFree = getNeighbors(a.x, a.y).filter(n => grid[n.y][n.x] === -1).length;
          const bFree = getNeighbors(b.x, b.y).filter(n => grid[n.y][n.x] === -1).length;
          return aFree - bFree;
        });

        // Add some randomness to the choice
        const nextIdx = seededRandom(seed + path.length + pathId) < 0.8 ? 0 : Math.floor(seededRandom(seed) * neighbors.length);
        const next = neighbors[nextIdx] || neighbors[0];
        
        grid[next.y][next.x] = pathId;
        path.push(next);
        current = next;
      }

      if (path.length >= 2) {
        const color = COLORS[pathId % COLORS.length];
        pairs.push({
          color,
          start: path[0],
          end: path[path.length - 1]
        });
        solutions[color] = path;
        pathId++;
      } else {
        // If we couldn't make a path of at least 2 cells, this attempt is likely to fail 100% coverage
        success = false;
        break;
      }
      
      emptyCells = getEmptyCells();
    }

    // Only accept if EVERY cell is filled and we have at least a few pairs
    if (success && emptyCells.length === 0 && pairs.length >= 2) {
      return { id, size, pairs, solutions };
    }
  }

  // Ultimate fallback: simple 3x3 grid
  return {
    id,
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
};

export const generateDailyLevel = (seed: number): Level => {
  return generatePlayableLevel(seed % 1000);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);