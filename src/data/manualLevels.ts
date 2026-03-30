import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * Helper to create a level object from editor data.
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
 * Retrieves a custom level from local storage.
 */
export const getCustomLevel = (id: number): Level | null => {
  try {
    const saved = localStorage.getItem('neurolinks_custom_levels');
    if (saved) {
      const customLevels = JSON.parse(saved);
      // Check both string and number keys for robustness
      return customLevels[id.toString()] || customLevels[id] || null;
    }
  } catch (e) {
    console.error("Error reading custom levels", e);
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
    customLevels[level.id.toString()] = level;
    localStorage.setItem('neurolinks_custom_levels', JSON.stringify(customLevels));
  } catch (e) {
    console.error("Failed to save custom level", e);
  }
};

/**
 * Clears all custom levels and resets to empty.
 */
export const clearAllCustomLevels = () => {
  localStorage.removeItem('neurolinks_custom_levels');
};

/**
 * A simple placeholder for levels that haven't been designed yet.
 * This ensures the game doesn't crash while you're building your levels.
 */
export const getPlaceholderLevel = (id: number): Level => {
  return {
    id,
    size: 5,
    pairs: [
      { color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      [COLORS[0]]: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }]
    }
  };
};
export const MANUAL_LEVELS: Level[] = [
  {
    id: 1,
    size: 5,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 3, y: 0 }, end: { x: 3, y: 4 } },
      { color: "#34C759", start: { x: 2, y: 0 }, end: { x: 0, y: 4 } },
      { color: "#FFCC00", start: { x: 3, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 2, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 0 }, { x: 0, y: 3 }],
      "#007AFF": [{ x: 3, y: 0 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 2, y: 0 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 3, y: 1 }, { x: 2, y: 2 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 2, y: 4 }]
    }
  }
];
while (MANUAL_LEVELS.length < 120) {
  MANUAL_LEVELS.push(getPlaceholderLevel(MANUAL_LEVELS.length + 1));
}