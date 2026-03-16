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

// Improved generator that ensures solvability by "walking" paths
const generateSolvableLevel = (id: number, size: number): Level => {
  const pairs: Pair[] = [];
  const grid = Array(size).fill(null).map(() => Array(size).fill(false));
  const pairCount = Math.min(size + Math.floor(id / 25), COLORS.length);

  const getNeighbors = (p: Point) => {
    const neighbors: Point[] = [];
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [dx, dy] of dirs) {
      const nx = p.x + dx;
      const ny = p.y + dy;
      if (nx >= 0 && nx < size && ny >= 0 && ny < size && !grid[ny][nx]) {
        neighbors.push({ x: nx, y: ny });
      }
    }
    return neighbors;
  };

  for (let i = 0; i < pairCount; i++) {
    // Find a random empty starting point
    let start: Point | null = null;
    const emptyCells: Point[] = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (!grid[y][x]) emptyCells.push({ x, y });
      }
    }

    if (emptyCells.length < 2) break;
    start = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    // Do a short random walk to find an end point
    let current = start;
    grid[current.y][current.x] = true;
    let pathLength = Math.floor(Math.random() * 3) + 2; // Ensure some distance
    
    for (let j = 0; j < pathLength; j++) {
      const neighbors = getNeighbors(current);
      if (neighbors.length === 0) break;
      current = neighbors[Math.floor(Math.random() * neighbors.length)];
      grid[current.y][current.x] = true;
    }

    pairs.push({
      color: COLORS[i],
      start,
      end: current
    });
  }

  return { id, size, pairs };
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 10) size = 4;
    if (i > 30) size = 5;
    if (i > 60) size = 6;
    if (i > 85) size = 7;
    levels.push(generateSolvableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();