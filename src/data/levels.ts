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

// A more robust generator that partitions the grid into paths first
const generatePlayableLevel = (id: number, size: number): Level => {
  const grid = Array(size).fill(null).map(() => Array(size).fill(-1));
  const pairs: Pair[] = [];
  let pathId = 0;

  // Helper to get valid neighbors
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

      // Try to grow the path to a reasonable length
      const targetLength = Math.floor(Math.random() * (size * 1.5)) + 2;
      
      for (let i = 0; i < targetLength; i++) {
        const neighbors = getNeighbors(current.x, current.y)
          .filter(n => grid[n.y][n.x] === -1);
        
        if (neighbors.length === 0) break;
        
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        grid[next.y][next.x] = pathId;
        path.push(next);
        current = next;
      }

      if (path.length >= 2) {
        pairs.push({
          color: COLORS[pathId % COLORS.length],
          start: path[0],
          end: path[path.length - 1]
        });
        pathId++;
      } else {
        // If path is too short, try to merge it with a neighbor or just leave it
        // For simplicity in this generator, we'll just reset and try again if it fails too much
        // but usually, we just need to ensure we don't have isolated single cells.
        grid[y][x] = -1; 
      }
      
      if (pathId >= COLORS.length) break;
    }
    if (pathId >= COLORS.length) break;
  }

  // Final pass: if any cells are still -1, try to attach them to existing paths
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (grid[y][x] === -1) {
        const neighbors = getNeighbors(x, y).filter(n => grid[n.y][n.x] !== -1);
        if (neighbors.length > 0) {
          const neighbor = neighbors[0];
          const pId = grid[neighbor.y][neighbor.x];
          grid[y][x] = pId;
          // Update the pair's start or end to include this cell if it's adjacent to an endpoint
          const pair = pairs[pId];
          if (pair) {
            if (Math.abs(pair.start.x - x) + Math.abs(pair.start.y - y) === 1) {
              pair.start = { x, y };
            } else if (Math.abs(pair.end.x - x) + Math.abs(pair.end.y - y) === 1) {
              pair.end = { x, y };
            }
          }
        }
      }
    }
  }

  return { id, size, pairs };
};

const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  for (let i = 1; i <= 100; i++) {
    // Gradually increase size
    let size = 3;
    if (i > 10) size = 4;
    if (i > 30) size = 5;
    if (i > 60) size = 6;
    levels.push(generatePlayableLevel(i, size));
  }
  return levels;
};

export const LEVELS = generateLevels();