import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * Helper to create a level manually.
 * You just need to provide the path for each color. 
 * The start and end points are automatically derived from the path.
 */
const createLevel = (id: number, size: number, paths: Point[][]): Level => {
  const levelPairs = paths.map((path, i) => ({
    color: COLORS[i % COLORS.length],
    start: path[0],
    end: path[path.length - 1]
  }));

  const solutions: Record<string, Point[]> = {};
  paths.forEach((path, i) => {
    solutions[COLORS[i % COLORS.length]] = path;
  });

  return {
    id,
    size,
    pairs: levelPairs,
    solutions
  };
};

// --- EDIT YOUR LEVELS HERE ---
const manualDefinitions: Level[] = [
  // Level 1: Simple 5x5
  createLevel(1, 5, [
    [{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:2, y:1}, {x:2, y:2}],
    [{x:4, y:0}, {x:4, y:1}, {x:4, y:2}, {x:4, y:3}, {x:4, y:4}, {x:3, y:4}, {x:2, y:4}]
  ]),
  
  // Level 2: 5x5 with 3 colors
  createLevel(2, 5, [
    [{x:0, y:0}, {x:0, y:1}, {x:0, y:2}],
    [{x:1, y:0}, {x:1, y:1}, {x:1, y:2}],
    [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}]
  ]),
];

/**
 * Fallback generator for levels that haven't been manually defined yet.
 * This ensures the game doesn't crash if you haven't written all 120 levels.
 */
function generateFallbackLevel(id: number): Level {
  const size = id <= 20 ? 5 : id <= 50 ? 6 : id <= 80 ? 7 : 8;
  const pairCount = Math.min(size, 8);
  
  const pairs = [];
  const solutions: Record<string, Point[]> = {};
  
  for (let i = 0; i < pairCount; i++) {
    const start = { x: i, y: 0 };
    const end = { x: i, y: size - 1 };
    const color = COLORS[i % COLORS.length];
    
    const path = [];
    for (let y = 0; y < size; y++) path.push({ x: i, y });
    
    pairs.push({ color, start, end });
    solutions[color] = path;
  }
  
  return { id, size, pairs, solutions };
}

// Export the full list of 120 levels
export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) => {
  const id = i + 1;
  const manual = manualDefinitions.find(l => l.id === id);
  return manual || generateFallbackLevel(id);
});