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

const generatePlayableLevel = (id: number, size: number): Level => {
  // Hard-coded Level 1 to ensure tutorial works perfectly
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

  const seed = id * 133.7 + size * 42;
  let attempts = 0;
  
  while (attempts < 500) {
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
    
    while (emptyCells.length > 0 && pathId < COLORS.length) {
      const startIdx = Math.floor(seededRandom(seed + pathId + attempts) * emptyCells.length);
      const startPos = emptyCells[startIdx];
      
      let current = startPos;
      let path = [current];
      grid[current.y][current.x] = pathId;

      // Try to make paths as long as possible to fill the grid
      const targetLength = size * size; 
      
      for (let i = 0; i < targetLength; i++) {
        const neighbors = getNeighbors(current.x, current.y).filter(n => grid[n.y][n.x] === -1);
        if (neighbors.length === 0) break;
        
        // Heuristic: prefer neighbors that have the fewest empty neighbors (hugging walls/paths)
        neighbors.sort((a, b) => {
          const aFree = getNeighbors(a.x, a.y).filter(n => grid[n.y][n.x] === -1).length;
          const bFree = getNeighbors(b.x, b.y).filter(n => grid[n.y][n.x] === -1).length;
          return aFree - bFree;
        });

        const next = neighbors[0];
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
        path.forEach(p => grid[p.y][p.x] = -1);
        emptyCells = emptyCells.filter(c => c.x !== startPos.x || c.y !== startPos.y);
      }
      
      emptyCells = getEmptyCells();
    }

    // CRITICAL: Only accept levels where 100% of the grid is filled
    if (emptyCells.length === 0 && pairs.length >= Math.floor(size * 0.8)) {
      return { id, size, pairs, solutions };
    }
  }

  // Guaranteed 100% filled fallback for 3x3
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
  return generatePlayableLevel(seed, 8);
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 5) size = 4;
    if (i > 15) size = 5;
    if (i > 35) size = 6;
    if (i > 65) size = 7;
    if (i > 85) size = 8;
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();