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

// Simple seeded random for deterministic levels
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generatePlayableLevel = (id: number, size: number): Level => {
  const seed = id * 123.456;
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

  // Fill the grid by growing paths
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (grid[y][x] !== -1) continue;

      let current: Point = { x, y };
      let path: Point[] = [current];
      grid[y][x] = pathId;

      const targetLength = Math.floor(seededRandom(seed + pathId) * (size * 2)) + 3;
      
      for (let i = 0; i < targetLength; i++) {
        const neighbors = getNeighbors(current.x, current.y)
          .filter(n => grid[n.y][n.x] === -1);
        
        if (neighbors.length === 0) break;
        
        // Pick neighbor based on seed
        const next = neighbors[Math.floor(seededRandom(seed + pathId + i) * neighbors.length)];
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

  // Ensure all cells are filled by attaching orphans to nearest paths
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (grid[y][x] === -1) {
        const neighbors = getNeighbors(x, y).filter(n => grid[n.y][n.x] !== -1);
        if (neighbors.length > 0) {
          const neighbor = neighbors[0];
          const pId = grid[neighbor.y][neighbor.x];
          const color = COLORS[pId % COLORS.length];
          grid[y][x] = pId;
          
          // Insert into solution path at the right spot
          const path = solutions[color];
          const idx = path.findIndex(p => p.x === neighbor.x && p.y === neighbor.y);
          if (idx === 0) {
            path.unshift({ x, y });
            pairs.find(p => p.color === color)!.start = { x, y };
          } else if (idx === path.length - 1) {
            path.push({ x, y });
            pairs.find(p => p.color === color)!.end = { x, y };
          }
        }
      }
    }
  }

  return { id, size, pairs, solutions };
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 10) size = 4;
    if (i > 30) size = 5;
    if (i > 60) size = 6;
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();