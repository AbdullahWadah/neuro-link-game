import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * PASTE YOUR COPIED LEVELS HERE
 * When you click 'COPY AS CODE' in the editor, paste the result inside this array.
 */
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
  },
  {
    id: 2,
    size: 5,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 1, y: 4 } },
      { color: "#007AFF", start: { x: 1, y: 3 }, end: { x: 3, y: 0 } },
      { color: "#34C759", start: { x: 3, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#FFCC00", start: { x: 2, y: 4 }, end: { x: 4, y: 3 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 2, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 4 }],
      "#007AFF": [{ x: 1, y: 3 }, { x: 3, y: 0 }],
      "#34C759": [{ x: 3, y: 1 }, { x: 2, y: 2 }],
      "#FFCC00": [{ x: 2, y: 4 }, { x: 4, y: 3 }],
      "#AF52DE": [{ x: 4, y: 0 }, { x: 2, y: 3 }]
    }
  },
  {
    id: 3,
    size: 5,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 3 } },
      { color: "#007AFF", start: { x: 4, y: 0 }, end: { x: 2, y: 2 } },
      { color: "#34C759", start: { x: 1, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#FFCC00", start: { x: 3, y: 2 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 4 }, end: { x: 0, y: 2 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 4, y: 0 }, { x: 2, y: 2 }],
      "#34C759": [{ x: 1, y: 0 }, { x: 3, y: 0 }],
      "#FFCC00": [{ x: 3, y: 2 }, { x: 4, y: 4 }],
      "#AF52DE": [{ x: 3, y: 4 }, { x: 0, y: 2 }]
    }
  },
  {
    id: 4,
    size: 5,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 2 }, end: { x: 0, y: 4 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 4, y: 1 } },
      { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 3, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 4 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 2 }, { x: 0, y: 4 }],
      "#007AFF": [{ x: 0, y: 1 }, { x: 4, y: 1 }],
      "#34C759": [{ x: 1, y: 1 }, { x: 3, y: 1 }],
      "#FFCC00": [{ x: 1, y: 3 }, { x: 3, y: 4 }],
      "#AF52DE": [{ x: 1, y: 4 }, { x: 3, y: 3 }]
    }
  },
  {
  id: 5,
size: 6,
pairs: [
  { color: "#FF3B30", start: { x: 5, y: 1 }, end: { x: 4, y: 2 } },
  { color: "#007AFF", start: { x: 5, y: 4 }, end: { x: 0, y: 5 } },
  { color: "#34C759", start: { x: 5, y: 2 }, end: { x: 0, y: 4 } },
  { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 5, y: 0 } },
  { color: "#AF52DE", start: { x: 0, y: 0 }, end: { x: 1, y: 2 } }
],
solutions: {
  "#FF3B30": [{ x: 5, y: 1 }, { x: 4, y: 2 }],
  "#007AFF": [{ x: 5, y: 4 }, { x: 0, y: 5 }],
  "#34C759": [{ x: 5, y: 2 }, { x: 0, y: 4 }],
  "#FFCC00": [{ x: 1, y: 1 }, { x: 5, y: 0 }],
  "#AF52DE": [{ x: 0, y: 0 }, { x: 1, y: 2 }]
 }
},
{
id: 6,
size: 6,
pairs: [
  { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 2, y: 1 } },
  { color: "#007AFF", start: { x: 5, y: 1 }, end: { x: 5, y: 3 } },
  { color: "#34C759", start: { x: 2, y: 2 }, end: { x: 0, y: 5 } },
  { color: "#FFCC00", start: { x: 1, y: 4 }, end: { x: 4, y: 5 } },
  { color: "#AF52DE", start: { x: 5, y: 5 }, end: { x: 2, y: 4 } }
],
solutions: {
  "#FF3B30": [{ x: 5, y: 0 }, { x: 2, y: 1 }],
  "#007AFF": [{ x: 5, y: 1 }, { x: 5, y: 3 }],
  "#34C759": [{ x: 2, y: 2 }, { x: 0, y: 5 }],
  "#FFCC00": [{ x: 1, y: 4 }, { x: 4, y: 5 }],
  "#AF52DE": [{ x: 5, y: 5 }, { x: 2, y: 4 }]
}
},
{
id: 7,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 4, y: 2 } },
  { color: "#007AFF", start: { x: 4, y: 0 }, end: { x: 1, y: 0 } },
  { color: "#34C759", start: { x: 2, y: 4 }, end: { x: 4, y: 3 } },
  { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 0, y: 4 } },
  { color: "#AF52DE", start: { x: 3, y: 2 }, end: { x: 0, y: 3 } }
],
solutions: {
  "#FF3B30": [{ x: 0, y: 0 }, { x: 4, y: 2 }],
  "#007AFF": [{ x: 4, y: 0 }, { x: 1, y: 0 }],
  "#34C759": [{ x: 2, y: 4 }, { x: 4, y: 3 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 0, y: 4 }],
  "#AF52DE": [{ x: 3, y: 2 }, { x: 0, y: 3 }]
}
},
{
id: 8,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 4, y: 4 } },
  { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 0, y: 3 } },
  { color: "#34C759", start: { x: 1, y: 0 }, end: { x: 1, y: 2 } },
  { color: "#FFCC00", start: { x: 2, y: 2 }, end: { x: 1, y: 3 } }
],
solutions: {
  "#FF3B30": [{ x: 2, y: 0 }, { x: 4, y: 4 }],
  "#007AFF": [{ x: 1, y: 1 }, { x: 0, y: 3 }],
  "#34C759": [{ x: 1, y: 0 }, { x: 1, y: 2 }],
  "#FFCC00": [{ x: 2, y: 2 }, { x: 1, y: 3 }]
}
},
{
id: 9,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 3, y: 2 } },
  { color: "#007AFF", start: { x: 3, y: 3 }, end: { x: 1, y: 3 } },
  { color: "#34C759", start: { x: 2, y: 4 }, end: { x: 0, y: 3 } },
  { color: "#FFCC00", start: { x: 2, y: 2 }, end: { x: 3, y: 4 } }
],
solutions: {
  "#FF3B30": [{ x: 1, y: 1 }, { x: 3, y: 2 }],
  "#007AFF": [{ x: 3, y: 3 }, { x: 1, y: 3 }],
  "#34C759": [{ x: 2, y: 4 }, { x: 0, y: 3 }],
  "#FFCC00": [{ x: 2, y: 2 }, { x: 3, y: 4 }]
}
},
{
id: 10,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 3, y: 1 } },
  { color: "#007AFF", start: { x: 3, y: 3 }, end: { x: 0, y: 4 } },
  { color: "#34C759", start: { x: 0, y: 1 }, end: { x: 2, y: 4 } },
  { color: "#FFCC00", start: { x: 2, y: 3 }, end: { x: 1, y: 4 } }
],
solutions: {
  "#FF3B30": [{ x: 1, y: 1 }, { x: 3, y: 1 }],
  "#007AFF": [{ x: 3, y: 3 }, { x: 0, y: 4 }],
  "#34C759": [{ x: 0, y: 1 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 2, y: 3 }, { x: 1, y: 4 }]
}
},
{
id: 11,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 4, y: 0 }, end: { x: 3, y: 2 } },
  { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 1, y: 1 } },
  { color: "#34C759", start: { x: 3, y: 3 }, end: { x: 0, y: 4 } },
  { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 1, y: 4 } }
],
solutions: {
  "#FF3B30": [{ x: 4, y: 0 }, { x: 3, y: 2 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 1, y: 1 }],
  "#34C759": [{ x: 3, y: 3 }, { x: 0, y: 4 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 1, y: 4 }]
}
},
{
id: 12,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 4 } },
  { color: "#007AFF", start: { x: 1, y: 0 }, end: { x: 1, y: 4 } },
  { color: "#34C759", start: { x: 2, y: 0 }, end: { x: 4, y: 0 } },
  { color: "#FFCC00", start: { x: 3, y: 0 }, end: { x: 3, y: 3 } }
],
solutions: {
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 4 }],
  "#007AFF": [{ x: 1, y: 0 }, { x: 1, y: 4 }],
  "#34C759": [{ x: 2, y: 0 }, { x: 4, y: 0 }],
  "#FFCC00": [{ x: 3, y: 0 }, { x: 3, y: 3 }]
}
},
{
id: 13,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 3, y: 3 }, end: { x: 1, y: 3 } },
  { color: "#007AFF", start: { x: 4, y: 2 }, end: { x: 0, y: 3 } },
  { color: "#34C759", start: { x: 4, y: 0 }, end: { x: 1, y: 1 } },
  { color: "#FFCC00", start: { x: 1, y: 0 }, end: { x: 4, y: 1 } }
],
solutions: {
  "#FF3B30": [{ x: 3, y: 3 }, { x: 1, y: 3 }],
  "#007AFF": [{ x: 4, y: 2 }, { x: 0, y: 3 }],
  "#34C759": [{ x: 4, y: 0 }, { x: 1, y: 1 }],
  "#FFCC00": [{ x: 1, y: 0 }, { x: 4, y: 1 }]
}
},
{
id: 14,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 0, y: 1 } },
  { color: "#007AFF", start: { x: 4, y: 0 }, end: { x: 0, y: 2 } },
  { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 2, y: 2 } },
  { color: "#FFCC00", start: { x: 4, y: 1 }, end: { x: 0, y: 3 } }
],
solutions: {
  "#FF3B30": [{ x: 2, y: 0 }, { x: 0, y: 1 }],
  "#007AFF": [{ x: 4, y: 0 }, { x: 0, y: 2 }],
  "#34C759": [{ x: 1, y: 1 }, { x: 2, y: 2 }],
  "#FFCC00": [{ x: 4, y: 1 }, { x: 0, y: 3 }]
}
},
{
id: 15,
size: 5,
pairs: [
  { color: "#FF3B30", start: { x: 2, y: 3 }, end: { x: 0, y: 4 } },
  { color: "#007AFF", start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
  { color: "#34C759", start: { x: 4, y: 0 }, end: { x: 2, y: 4 } },
  { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 1, y: 2 } },
  { color: "#AF52DE", start: { x: 3, y: 0 }, end: { x: 0, y: 3 } }
],
solutions: {
  "#FF3B30": [{ x: 2, y: 3 }, { x: 0, y: 4 }],
  "#007AFF": [{ x: 0, y: 0 }, { x: 2, y: 0 }],
  "#34C759": [{ x: 4, y: 0 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 1, y: 2 }],
  "#AF52DE": [{ x: 3, y: 0 }, { x: 0, y: 3 }]
}
}
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
  // First check the hardcoded manual levels
  const manual = MANUAL_LEVELS.find(l => l.id === id);
  if (manual) return manual;

  // Then check local storage for work-in-progress
  try {
    const saved = localStorage.getItem('neurolinks_custom_levels');
    if (saved) {
      const customLevels = JSON.parse(saved);
      return customLevels[id.toString()] || customLevels[id] || null;
    }
  } catch (e) {}
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