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

    const startPositions: Point[] = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        startPositions.push({ x, y });
      }
    }
    
    for (let i = startPositions.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed + i + attempts) * (i + 1));
      [startPositions[i], startPositions[j]] = [startPositions[j], startPositions[i]];
    }

    for (const startPos of startPositions) {
      if (grid[startPos.y][startPos.x] !== -1) continue;

      let current: Point = startPos;
      let path: Point[] = [current];
      grid[current.y][current.x] = pathId;

      const targetLength = Math.floor(seededRandom(seed + pathId + attempts) * (size * size)) + size;
      
      for (let i = 0; i < targetLength; i++) {
        const neighbors = getNeighbors(current.x, current.y)
          .filter(n => grid[n.y][n.x] === -1);
        
        if (neighbors.length === 0) break;
        
        neighbors.sort((a, b) => {
          const aFree = getNeighbors(a.x, a.y).filter(n => grid[n.y][n.x] === -1).length;
          const bFree = getNeighbors(b.x, b.y).filter(n => grid[n.y][n.x] === -1).length;
          if (aFree !== bFree) return aFree - bFree;
          return seededRandom(seed + a.x + b.y + i) - 0.5;
        });

        const next = neighbors[0];
        grid[next.y][next.x] = pathId;
        path.push(next);
        current = next;
      }

      if (path.length >= Math.max(3, Math.floor(size * 0.8))) {
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
      }
      
      if (pathId >= Math.min(COLORS.length, size + 2)) break;
    }

    let filledCount = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] !== -1) filledCount++;
      }
    }

    if (filledCount >= (size * size * 0.95) && pairs.length >= size) {
      return { id, size, pairs, solutions };
    }
  }

  return {
    id,
    size: 3,
    pairs: [
      { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
      { color: COLORS[1], start: { x: 2, y: 0 }, end: { x: 0, y: 2 } },
      { color: COLORS[2], start: { x: 2, y: 2 }, end: { x: 1, y: 0 } }
    ],
    solutions: {
      [COLORS[0]]: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
      [COLORS[1]]: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
      [COLORS[2]]: [{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 0 }]
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
    if (i > 3) size = 4;
    if (i > 12) size = 5;
    if (i > 30) size = 6;
    if (i > 60) size = 7;
    if (i > 85) size = 8;
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();