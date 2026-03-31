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

const generatePlayableLevel = (id: number, size: number, complexity: number = 1): Level => {
  const seed = id * 123.456;
  let attempts = 0;
  
  while (attempts < 100) {
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

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] !== -1) continue;

        let current: Point = { x, y };
        let path: Point[] = [current];
        grid[y][x] = pathId;

        const targetLength = Math.floor(seededRandom(seed + pathId + attempts) * (size * complexity)) + 3;
        
        for (let i = 0; i < targetLength; i++) {
          const neighbors = getNeighbors(current.x, current.y)
            .filter(n => grid[n.y][n.x] === -1);
          
          if (neighbors.length === 0) break;
          
          const next = neighbors[Math.floor(seededRandom(seed + pathId + i + attempts) * neighbors.length)];
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
          grid[y][x] = -1; 
        }
        
        if (pathId >= COLORS.length) break;
      }
      if (pathId >= COLORS.length) break;
    }

    let allFilled = true;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === -1) {
          allFilled = false;
          break;
        }
      }
      if (!allFilled) break;
    }

    if (allFilled && pairs.length >= (size - 1)) {
      return { id, size, pairs, solutions };
    }
  }

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
  return generatePlayableLevel(seed, 7, 2);
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 120; i++) {
    let size = 3;
    if (i > 10) size = 4;
    if (i > 30) size = 5;
    if (i > 60) size = 6;
    if (i > 90) size = 7;
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();