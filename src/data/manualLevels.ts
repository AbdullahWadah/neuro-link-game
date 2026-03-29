import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * Helper to create a level manually.
 */
export const createLevel = (id: number, size: number, paths: Point[][]): Level => {
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

/**
 * Retrieves a custom level from local storage if it exists.
 */
export const getCustomLevel = (id: number): Level | null => {
  try {
    const saved = localStorage.getItem('neurolinks_custom_levels');
    if (saved) {
      const customLevels = JSON.parse(saved);
      // Check both string and number keys to be safe
      return customLevels[id.toString()] || customLevels[id] || null;
    }
  } catch (e) {
    console.error("Failed to load custom levels", e);
  }
  return null;
};

/**
 * Saves a custom level to local storage.
 */
export const saveCustomLevelToStorage = (level: Level) => {
  try {
    const saved = localStorage.getItem('neurolinks_custom_levels');
    const customLevels = saved ? JSON.parse(saved) : {};
    // Always use string keys for consistency in JSON
    customLevels[level.id.toString()] = level;
    localStorage.setItem('neurolinks_custom_levels', JSON.stringify(customLevels));
  } catch (e) {
    console.error("Failed to save custom level", e);
  }
};

/**
 * Clears all custom levels.
 */
export const clearAllCustomLevels = () => {
  localStorage.removeItem('neurolinks_custom_levels');
};

// --- DEFAULT LEVELS ---
const manualDefinitions: Level[] = [
  createLevel(1, 5, [
    [{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:2, y:1}, {x:2, y:2}],
    [{x:4, y:0}, {x:4, y:1}, {x:4, y:2}, {x:4, y:3}, {x:4, y:4}, {x:3, y:4}, {x:2, y:4}]
  ]),
  createLevel(2, 5, [
    [{x:0, y:0}, {x:0, y:1}, {x:0, y:2}],
    [{x:1, y:0}, {x:1, y:1}, {x:1, y:2}],
    [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}]
  ]),
];

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

export const MANUAL_LEVELS: Level[] = Array.from({ length: 120 }, (_, i) => {
  const id = i + 1;
  const manual = manualDefinitions.find(l => l.id === id);
  return manual || generateFallbackLevel(id);
});