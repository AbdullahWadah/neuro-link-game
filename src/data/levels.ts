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
}

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD", 
  "#D4A5A5", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71"
];

// Improved generator that ensures solvability by simulating paths
const generateSolvableLevel = (id: number, size: number): Level => {
  const pairs: Pair[] = [];
  const grid = Array(size).fill(null).map(() => Array(size).fill(-1));
  const pairCount = Math.min(size + Math.floor(id / 20), COLORS.length);

  const getNeighbors = (p: Point, currentGrid: number[][]) => {
    const neighbors: Point[] = [];
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [dx, dy] of dirs) {
      const nx = p.x + dx;
      const ny = p.y + dy;
      if (nx >= 0 && nx < size && ny >= 0 && ny < size && currentGrid[ny][nx] === -1) {
        neighbors.push({ x: nx, y: ny });
      }
    }
    return neighbors;
  };

  let attempts = 0;
  while (pairs.length < pairCount && attempts < 50) {
    attempts++;
    let start: Point | null = null;
    const emptyCells: Point[] = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === -1) emptyCells.push({ x, y });
      }
    }

    if (emptyCells.length < 2) break;
    start = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    let current = start;
    let path: Point[] = [start];
    grid[current.y][current.x] = pairs.length;
    
    // Random walk length based on grid size
    const targetLength = Math.floor(Math.random() * size) + 2;
    
    for (let j = 0; j < targetLength; j++) {
      const neighbors = getNeighbors(current, grid);
      if (neighbors.length === 0) break;
      current = neighbors[Math.floor(Math.random() * neighbors.length)];
      grid[current.y][current.x] = pairs.length;
      path.push(current);
    }

    if (path.length >= 2) {
      pairs.push({
        color: COLORS[pairs.length % COLORS.length],
        start: path[0],
        end: path[path.length - 1]
      });
    }
  }

  return { id, size, pairs };
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 5) size = 4;
    if (i > 20) size = 5;
    if (i > 50) size = 6;
    if (i > 80) size = 7;
    levels.push(generateSolvableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();