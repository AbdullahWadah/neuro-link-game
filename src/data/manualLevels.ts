import { Level, Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

/**
 * MANUAL_LEVELS contains the grid size and pair positions for all 120 levels.
 * Solutions are empty by default and can be defined via the Hint Editor.
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
      "#FF3B30": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#34C759": [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }],
      "#007AFF": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }]
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
      "#FF3B30": [{ x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }],
      "#34C759": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      "#FFCC00": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }],
      "#007AFF": [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#AF52DE": [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 2, y: 3 }]
    }
  },
  {
    id: 3,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 2 }, end: { x: 5, y: 0 } },
      { color: "#007AFF", start: { x: 1, y: 5 }, end: { x: 0, y: 4 } },
      { color: "#34C759", start: { x: 5, y: 5 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 2, y: 1 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 1 }, end: { x: 4, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }],
      "#34C759": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }],
      "#007AFF": [{ x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }],
      "#AF52DE": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }]
    }
  },
  {
    id: 4,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 3 }, end: { x: 5, y: 4 } },
      { color: "#007AFF", start: { x: 5, y: 3 }, end: { x: 4, y: 1 } },
      { color: "#34C759", start: { x: 1, y: 0 }, end: { x: 5, y: 2 } },
      { color: "#FFCC00", start: { x: 5, y: 5 }, end: { x: 3, y: 5 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 2, y: 5 } },
      { color: "#FF9500", start: { x: 3, y: 2 }, end: { x: 0, y: 0 } }
    ],
    solutions: {
      "#FF9500": [{ x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 0 }],
      "#34C759": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#007AFF": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }],
      "#AF52DE": [{ x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
      "#FF3B30": [{ x: 1, y: 3 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }],
      "#FFCC00": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }]
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
      "#AF52DE": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
      "#FFCC00": [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
      "#FF3B30": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }],
      "#34C759": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#007AFF": [{ x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 0, y: 5 }]
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
      "#FF3B30": [{ x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      "#34C759": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#FFCC00": [{ x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }],
      "#AF52DE": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }],
      "#007AFF": [{ x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 1 }]
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
      "#007AFF": [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }],
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
      "#AF52DE": [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#FFCC00": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 0, y: 4 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }]
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
      "#34C759": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
      "#FF3B30": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 3 }],
      "#FFCC00": [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }]
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
      "#34C759": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }],
      "#FFCC00": [{ x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#007AFF": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }]
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
      "#34C759": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }],
      "#FF3B30": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#007AFF": [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
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
      "#FF3B30": [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }],
      "#34C759": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }]
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
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#007AFF": [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      "#34C759": [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }],
      "#FFCC00": [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }]
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
      "#FFCC00": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }],
      "#34C759": [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#007AFF": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 3 }],
      "#FF3B30": [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
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
      "#FF3B30": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#34C759": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      "#007AFF": [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
      "#FFCC00": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 3 }]
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
      "#007AFF": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      "#AF52DE": [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#FFCC00": [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#FF3B30": [{ x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 0, y: 4 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }]
    }
  },
  {
    id: 16,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 4, y: 2 } },
      { color: "#007AFF", start: { x: 2, y: 0 }, end: { x: 5, y: 2 } },
      { color: "#34C759", start: { x: 3, y: 3 }, end: { x: 0, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 3 }, end: { x: 0, y: 5 } },
      { color: "#AF52DE", start: { x: 1, y: 4 }, end: { x: 5, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
      "#34C759": [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 1 }],
      "#007AFF": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#FFCC00": [{ x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }],
      "#AF52DE": [{ x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }]
    }
  },
  {
    id: 17,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 1, y: 4 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 2, y: 4 }, end: { x: 4, y: 3 } },
      { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 5, y: 1 } },
      { color: "#AF52DE", start: { x: 4, y: 1 }, end: { x: 1, y: 2 } },
      { color: "#FF9500", start: { x: 3, y: 2 }, end: { x: 0, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#FF9500": [{ x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }],
      "#FFCC00": [{ x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
      "#007AFF": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }]
    }
  },
  {
    id: 18,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#007AFF", start: { x: 5, y: 0 }, end: { x: 3, y: 2 } },
      { color: "#34C759", start: { x: 5, y: 1 }, end: { x: 2, y: 4 } },
      { color: "#FFCC00", start: { x: 1, y: 4 }, end: { x: 4, y: 2 } },
      { color: "#AF52DE", start: { x: 0, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#FF9500", start: { x: 1, y: 2 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#007AFF": [{ x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
      "#FF9500": [{ x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }],
      "#34C759": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }]
    }
  },
  {
    id: 19,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
      { color: "#007AFF", start: { x: 1, y: 0 }, end: { x: 1, y: 3 } },
      { color: "#34C759", start: { x: 3, y: 1 }, end: { x: 3, y: 3 } },
      { color: "#FFCC00", start: { x: 3, y: 4 }, end: { x: 3, y: 0 } },
      { color: "#AF52DE", start: { x: 5, y: 0 }, end: { x: 4, y: 5 } },
      { color: "#FF9500", start: { x: 3, y: 5 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }],
      "#007AFF": [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#FFCC00": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#AF52DE": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }],
      "#FF9500": [{ x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }]
    }
  },
  {
    id: 20,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 0, y: 4 }, end: { x: 2, y: 4 } },
      { color: "#34C759", start: { x: 0, y: 5 }, end: { x: 5, y: 4 } },
      { color: "#FFCC00", start: { x: 5, y: 2 }, end: { x: 3, y: 4 } },
      { color: "#AF52DE", start: { x: 5, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#FF9500", start: { x: 3, y: 1 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
      "#FF9500": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
      "#FFCC00": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#007AFF": [{ x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }]
    }
  },
  {
    id: 21,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 0, y: 2 } },
      { color: "#007AFF", start: { x: 5, y: 2 }, end: { x: 2, y: 2 } },
      { color: "#34C759", start: { x: 3, y: 3 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 3, y: 4 }, end: { x: 4, y: 1 } },
      { color: "#AF52DE", start: { x: 2, y: 1 }, end: { x: 5, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      "#AF52DE": [{ x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }],
      "#007AFF": [{ x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 2 }],
      "#FFCC00": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }]
    }
  },
  {
    id: 22,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 0, y: 5 } },
      { color: "#007AFF", start: { x: 3, y: 1 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 4, y: 3 }, end: { x: 0, y: 3 } },
      { color: "#FFCC00", start: { x: 3, y: 0 }, end: { x: 0, y: 2 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 2, y: 2 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#007AFF": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }],
      "#34C759": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }],
      "#FF3B30": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }]
    }
  },
  {
    id: 23,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 2, y: 4 } },
      { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 4, y: 5 } },
      { color: "#34C759", start: { x: 4, y: 4 }, end: { x: 3, y: 1 } },
      { color: "#FFCC00", start: { x: 3, y: 4 }, end: { x: 1, y: 1 } },
      { color: "#AF52DE", start: { x: 3, y: 5 }, end: { x: 0, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 2, y: 4 }],
      "#AF52DE": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }],
      "#FFCC00": [{ x: 3, y: 4 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#34C759": [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#007AFF": [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }]
    }
  },
   {
    id: 25,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#007AFF", start: { x: 0, y: 4 }, end: { x: 2, y: 5 } },
      { color: "#34C759", start: { x: 2, y: 2 }, end: { x: 1, y: 3 } },
      { color: "#FFCC00", start: { x: 3, y: 2 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#FFCC00": [{ x: 0, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }],
      "#34C759": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }],
      "#007AFF": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }]
    }
  },
  {
    id: 26,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 0, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 4 }, end: { x: 4, y: 1 } },
      { color: "#34C759", start: { x: 3, y: 2 }, end: { x: 5, y: 3 } },
      { color: "#FFCC00", start: { x: 4, y: 4 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 0, y: 1 }, end: { x: 4, y: 5 } }
    ],
    solutions: {
      "#AF52DE": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#007AFF": [{ x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }],
      "#34C759": [{ x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }]
    }
  },
  {
    id: 27,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 5, y: 4 } },
      { color: "#007AFF", start: { x: 2, y: 1 }, end: { x: 2, y: 4 } },
      { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 0, y: 5 } },
      { color: "#FFCC00", start: { x: 1, y: 2 }, end: { x: 3, y: 5 } },
      { color: "#AF52DE", start: { x: 4, y: 1 }, end: { x: 4, y: 3 } },
      { color: "#FF9500", start: { x: 3, y: 1 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }],
      "#AF52DE": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
      "#FF9500": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }],
      "#007AFF": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#34C759": [{ x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#FFCC00": [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 28,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 1, y: 2 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 0, y: 3 } },
      { color: "#34C759", start: { x: 0, y: 4 }, end: { x: 4, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 3, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 5 }, end: { x: 2, y: 2 } },
      { color: "#FF9500", start: { x: 2, y: 4 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
      "#007AFF": [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#34C759": [{ x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }],
      "#FF9500": [{ x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }]
    }
  },
  {
    id: 29,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 5, y: 0 } },
      { color: "#007AFF", start: { x: 2, y: 3 }, end: { x: 0, y: 5 } },
      { color: "#34C759", start: { x: 0, y: 1 }, end: { x: 1, y: 5 } },
      { color: "#FFCC00", start: { x: 2, y: 5 }, end: { x: 5, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 4, y: 2 } },
      { color: "#FF9500", start: { x: 2, y: 2 }, end: { x: 0, y: 2 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
      "#FF9500": [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
      "#34C759": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#FFCC00": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }],
      "#AF52DE": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }]
    }
  },
  {
    id: 30,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 5, y: 1 } },
      { color: "#007AFF", start: { x: 3, y: 1 }, end: { x: 3, y: 5 } },
      { color: "#34C759", start: { x: 3, y: 2 }, end: { x: 0, y: 1 } },
      { color: "#FFCC00", start: { x: 1, y: 2 }, end: { x: 0, y: 3 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 0, y: 4 } },
      { color: "#FF9500", start: { x: 4, y: 3 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }],
      "#34C759": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      "#007AFF": [{ x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
      "#FF9500": [{ x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }]
    }
  },
  {
    id: 31,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 4 }, end: { x: 0, y: 5 } },
      { color: "#007AFF", start: { x: 2, y: 4 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 3 }, end: { x: 4, y: 4 } },
      { color: "#FFCC00", start: { x: 2, y: 3 }, end: { x: 3, y: 2 } },
      { color: "#AF52DE", start: { x: 2, y: 5 }, end: { x: 0, y: 4 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      "#007AFF": [{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }],
      "#FF3B30": [{ x: 1, y: 4 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#AF52DE": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#34C759": [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }]
    }
  },
  {
    id: 32,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 1, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 1, y: 4 } },
      { color: "#34C759", start: { x: 1, y: 3 }, end: { x: 3, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 1 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 0 }, end: { x: 4, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
      "#AF52DE": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }],
      "#FFCC00": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#34C759": [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 1, y: 3 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }]
    }
  },
  {
    id: 33,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 4, y: 5 } },
      { color: "#007AFF", start: { x: 3, y: 2 }, end: { x: 0, y: 3 } },
      { color: "#34C759", start: { x: 5, y: 5 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 3, y: 5 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
      "#FFCC00": [{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }],
      "#34C759": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
    }
  },
  {
    id: 34,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 4, y: 4 } },
      { color: "#007AFF", start: { x: 5, y: 4 }, end: { x: 0, y: 4 } },
      { color: "#34C759", start: { x: 0, y: 3 }, end: { x: 4, y: 2 } },
      { color: "#FFCC00", start: { x: 3, y: 0 }, end: { x: 2, y: 3 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 1, y: 1 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      "#AF52DE": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 0 }],
      "#FF3B30": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#34C759": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 0, y: 3 }],
      "#007AFF": [{ x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }]
    }
  },
  {
    id: 35,
    size: 6,
    pairs: [
      { color: "#FF3B30", start: { x: 4, y: 1 }, end: { x: 5, y: 4 } },
      { color: "#007AFF", start: { x: 0, y: 2 }, end: { x: 3, y: 4 } },
      { color: "#34C759", start: { x: 2, y: 2 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 5, y: 5 }, end: { x: 1, y: 2 } },
      { color: "#AF52DE", start: { x: 5, y: 3 }, end: { x: 0, y: 0 } }
    ],
    solutions: {
      "#AF52DE": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }],
      "#FF3B30": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 4 }],
      "#FFCC00": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      "#34C759": [{ x: 1, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }],
      "#007AFF": [{ x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    }
  },
  {
    id: 36,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 0, y: 4 } },
      { color: "#007AFF", start: { x: 4, y: 6 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 1, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 0, y: 6 } },
      { color: "#AF52DE", start: { x: 0, y: 5 }, end: { x: 3, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#AF52DE": [{ x: 0, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 3, y: 6 }],
      "#007AFF": [{ x: 4, y: 6 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#34C759": [{ x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 1 }]
    }
  },
  {
    id: 37,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#007AFF", start: { x: 3, y: 5 }, end: { x: 6, y: 0 } },
      { color: "#34C759", start: { x: 3, y: 6 }, end: { x: 5, y: 5 } },
      { color: "#FFCC00", start: { x: 2, y: 1 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 4 }, end: { x: 1, y: 5 } },
      { color: "#FF9500", start: { x: 1, y: 1 }, end: { x: 4, y: 3 } },
      { color: "#5AC8FA", start: { x: 6, y: 2 }, end: { x: 5, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }],
      "#007AFF": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 2, y: 5 }, { x: 3, y: 5 }],
      "#AF52DE": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#FF9500": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }],
      "#FFCC00": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 4, y: 4 }],
      "#5AC8FA": [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#34C759": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 3, y: 6 }]
    }
  },
  {
    id: 39,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 4, y: 1 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#34C759", start: { x: 4, y: 2 }, end: { x: 1, y: 3 } },
      { color: "#FFCC00", start: { x: 0, y: 3 }, end: { x: 5, y: 4 } },
      { color: "#AF52DE", start: { x: 2, y: 4 }, end: { x: 6, y: 1 } },
      { color: "#FF9500", start: { x: 6, y: 2 }, end: { x: 5, y: 6 } },
      { color: "#5AC8FA", start: { x: 5, y: 5 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      "#34C759": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#AF52DE": [{ x: 2, y: 4 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 6, y: 1 }],
      "#FF9500": [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#FFCC00": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }],
      "#5AC8FA": [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 40,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 3, y: 2 }, end: { x: 5, y: 2 } },
      { color: "#FFCC00", start: { x: 0, y: 6 }, end: { x: 4, y: 6 } },
      { color: "#AF52DE", start: { x: 1, y: 4 }, end: { x: 3, y: 4 } },
      { color: "#FF9500", start: { x: 5, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#5AC8FA", start: { x: 5, y: 6 }, end: { x: 2, y: 3 } },
      { color: "#FF2D55", start: { x: 4, y: 4 }, end: { x: 6, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
      "#007AFF": [{ x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }],
      "#FF9500": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
      "#34C759": [{ x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }],
      "#AF52DE": [{ x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#5AC8FA": [{ x: 2, y: 3 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 6 }],
      "#FF2D55": [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#FFCC00": [{ x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }]
    }
  },
  {
    id: 41,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 6, y: 5 } },
      { color: "#007AFF", start: { x: 2, y: 4 }, end: { x: 3, y: 2 } },
      { color: "#34C759", start: { x: 2, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#FFCC00", start: { x: 2, y: 1 }, end: { x: 5, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 0 }, end: { x: 6, y: 4 } },
      { color: "#FF9500", start: { x: 5, y: 3 }, end: { x: 3, y: 1 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }],
      "#AF52DE": [{ x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }],
      "#FF9500": [{ x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }],
      "#FFCC00": [{ x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      "#34C759": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }]
    }
  },
  {
    id: 42,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 5, y: 2 } },
      { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#34C759", start: { x: 6, y: 5 }, end: { x: 2, y: 4 } },
      { color: "#FFCC00", start: { x: 2, y: 5 }, end: { x: 3, y: 1 } },
      { color: "#AF52DE", start: { x: 6, y: 0 }, end: { x: 5, y: 3 } },
      { color: "#FF9500", start: { x: 3, y: 3 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#AF52DE": [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 5, y: 3 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }],
      "#007AFF": [{ x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }],
      "#FFCC00": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
      "#FF9500": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }]
    }
  },
  {
    id: 43,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 3, y: 0 }, end: { x: 5, y: 2 } },
      { color: "#007AFF", start: { x: 3, y: 1 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 5, y: 1 }, end: { x: 1, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 3 }, end: { x: 1, y: 5 } },
      { color: "#AF52DE", start: { x: 4, y: 4 }, end: { x: 6, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }],
      "#34C759": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#007AFF": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }],
      "#FFCC00": [{ x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#AF52DE": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }]
    }
  },
  {
    id: 44,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 5 }, end: { x: 4, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 3 }, end: { x: 5, y: 2 } },
      { color: "#34C759", start: { x: 0, y: 4 }, end: { x: 6, y: 3 } },
      { color: "#FFCC00", start: { x: 6, y: 6 }, end: { x: 2, y: 5 } },
      { color: "#AF52DE", start: { x: 5, y: 6 }, end: { x: 0, y: 6 } },
      { color: "#FF9500", start: { x: 5, y: 5 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      "#34C759": [{ x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#007AFF": [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#FF3B30": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#FFCC00": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#FF9500": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }],
      "#AF52DE": [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }]
    }
  },
  {
    id: 45,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 6 }, end: { x: 5, y: 4 } },
      { color: "#007AFF", start: { x: 6, y: 0 }, end: { x: 2, y: 0 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 1, y: 5 } },
      { color: "#FFCC00", start: { x: 4, y: 6 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 5, y: 3 }, end: { x: 2, y: 1 } },
      { color: "#FF9500", start: { x: 5, y: 2 }, end: { x: 1, y: 1 } },
      { color: "#5AC8FA", start: { x: 1, y: 0 }, end: { x: 4, y: 3 } }
    ],
    solutions: {
      "#5AC8FA": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }],
      "#007AFF": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#AF52DE": [{ x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 5, y: 3 }],
      "#FF9500": [{ x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#FF3B30": [{ x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#34C759": [{ x: 5, y: 6 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }]
    }
  },
  {
    id: 46,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 4, y: 5 } },
      { color: "#007AFF", start: { x: 6, y: 1 }, end: { x: 1, y: 1 } },
      { color: "#34C759", start: { x: 2, y: 1 }, end: { x: 3, y: 4 } },
      { color: "#FFCC00", start: { x: 2, y: 3 }, end: { x: 3, y: 5 } },
      { color: "#AF52DE", start: { x: 5, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#FF9500", start: { x: 3, y: 1 }, end: { x: 0, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
      "#AF52DE": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#007AFF": [{ x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#FF9500": [{ x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }],
      "#34C759": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }],
      "#FFCC00": [{ x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 47,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#007AFF", start: { x: 0, y: 2 }, end: { x: 3, y: 2 } },
      { color: "#34C759", start: { x: 2, y: 1 }, end: { x: 1, y: 5 } },
      { color: "#FFCC00", start: { x: 5, y: 1 }, end: { x: 1, y: 6 } },
      { color: "#AF52DE", start: { x: 5, y: 5 }, end: { x: 6, y: 6 } },
      { color: "#FF9500", start: { x: 5, y: 6 }, end: { x: 3, y: 6 } },
      { color: "#5AC8FA", start: { x: 6, y: 0 }, end: { x: 4, y: 2 } },
      { color: "#FF2D55", start: { x: 5, y: 2 }, end: { x: 3, y: 4 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#34C759": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }],
      "#5AC8FA": [{ x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#FFCC00": [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }],
      "#FF2D55": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }],
      "#FF9500": [{ x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }],
      "#AF52DE": [{ x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 6 }]
    }
  },
  {
    id: 48,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 5 }, end: { x: 2, y: 4 } },
      { color: "#007AFF", start: { x: 5, y: 1 }, end: { x: 0, y: 1 } },
      { color: "#34C759", start: { x: 5, y: 2 }, end: { x: 0, y: 4 } },
      { color: "#FFCC00", start: { x: 5, y: 5 }, end: { x: 1, y: 3 } },
      { color: "#AF52DE", start: { x: 2, y: 3 }, end: { x: 4, y: 3 } },
      { color: "#FF9500", start: { x: 5, y: 3 }, end: { x: 0, y: 0 } }
    ],
    solutions: {
      "#FF9500": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 5, y: 3 }],
      "#007AFF": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
      "#34C759": [{ x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }],
      "#FFCC00": [{ x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#FF3B30": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }],
      "#AF52DE": [{ x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }]
    }
  },
  {
    id: 49,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#007AFF", start: { x: 1, y: 5 }, end: { x: 6, y: 0 } },
      { color: "#34C759", start: { x: 1, y: 3 }, end: { x: 0, y: 5 } },
      { color: "#FFCC00", start: { x: 1, y: 2 }, end: { x: 5, y: 1 } },
      { color: "#AF52DE", start: { x: 3, y: 6 }, end: { x: 6, y: 1 } },
      { color: "#FF9500", start: { x: 4, y: 1 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      "#FF9500": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#FFCC00": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
      "#34C759": [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }],
      "#007AFF": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#AF52DE": [{ x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }]
    }
  },
  {
    id: 50,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#007AFF", start: { x: 0, y: 0 }, end: { x: 5, y: 4 } },
      { color: "#34C759", start: { x: 4, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#FFCC00", start: { x: 5, y: 1 }, end: { x: 1, y: 5 } },
      { color: "#AF52DE", start: { x: 6, y: 5 }, end: { x: 3, y: 5 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 5, y: 4 }],
      "#FFCC00": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#AF52DE": [{ x: 3, y: 5 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }],
      "#FF3B30": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
      "#34C759": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 51,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 1 }, end: { x: 2, y: 3 } },
      { color: "#007AFF", start: { x: 3, y: 6 }, end: { x: 6, y: 0 } },
      { color: "#34C759", start: { x: 4, y: 6 }, end: { x: 3, y: 3 } },
      { color: "#FFCC00", start: { x: 5, y: 6 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 2, y: 4 }, end: { x: 1, y: 1 } },
      { color: "#FF9500", start: { x: 1, y: 5 }, end: { x: 4, y: 3 } }
    ],
    solutions: {
      "#AF52DE": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 2, y: 4 }],
      "#FF3B30": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      "#007AFF": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }],
      "#FF9500": [{ x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#34C759": [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 6 }],
      "#FFCC00": [{ x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }]
    }
  },
  {
    id: 52,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 5, y: 6 } },
      { color: "#34C759", start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
      { color: "#FFCC00", start: { x: 2, y: 2 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 1, y: 0 }, end: { x: 5, y: 3 } },
      { color: "#FF9500", start: { x: 5, y: 4 }, end: { x: 2, y: 5 } },
      { color: "#5AC8FA", start: { x: 2, y: 4 }, end: { x: 3, y: 5 } }
    ],
    solutions: {
      "#34C759": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 5, y: 3 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 0 }],
      "#FF3B30": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#007AFF": [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#FFCC00": [{ x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#FF9500": [{ x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 4 }],
      "#5AC8FA": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 53,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 5, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 3 }, end: { x: 1, y: 6 } },
      { color: "#34C759", start: { x: 6, y: 2 }, end: { x: 0, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 5, y: 3 } },
      { color: "#FF9500", start: { x: 6, y: 3 }, end: { x: 1, y: 4 } },
      { color: "#5AC8FA", start: { x: 0, y: 6 }, end: { x: 1, y: 5 } }
    ],
    solutions: {
      "#34C759": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }],
      "#FF3B30": [{ x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#AF52DE": [{ x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }],
      "#FF9500": [{ x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }],
      "#007AFF": [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }],
      "#5AC8FA": [{ x: 1, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 6 }]
    }
  },
  {
    id: 54,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#007AFF", start: { x: 6, y: 5 }, end: { x: 1, y: 0 } },
      { color: "#34C759", start: { x: 2, y: 0 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 1, y: 5 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 5, y: 3 }, end: { x: 5, y: 1 } },
      { color: "#FF9500", start: { x: 5, y: 0 }, end: { x: 3, y: 5 } },
      { color: "#5AC8FA", start: { x: 3, y: 0 }, end: { x: 4, y: 3 } }
    ],
    solutions: {
      "#007AFF": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }],
      "#AF52DE": [{ x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }],
      "#FF9500": [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#34C759": [{ x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }],
      "#5AC8FA": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
    }
  },
  {
    id: 55,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 3, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 4 }, end: { x: 2, y: 5 } },
      { color: "#34C759", start: { x: 3, y: 5 }, end: { x: 4, y: 2 } },
      { color: "#FFCC00", start: { x: 4, y: 5 }, end: { x: 5, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 3 }, end: { x: 5, y: 5 } },
      { color: "#FF9500", start: { x: 4, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#5AC8FA", start: { x: 2, y: 4 }, end: { x: 6, y: 2 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#FF9500": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }],
      "#5AC8FA": [{ x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#AF52DE": [{ x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 5, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
      "#34C759": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }],
      "#007AFF": [{ x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }]
    }
  },
  {
    id: 56,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 1 }, end: { x: 5, y: 4 } },
      { color: "#007AFF", start: { x: 4, y: 4 }, end: { x: 2, y: 4 } },
      { color: "#34C759", start: { x: 6, y: 3 }, end: { x: 4, y: 2 } },
      { color: "#FFCC00", start: { x: 4, y: 3 }, end: { x: 1, y: 1 } },
      { color: "#AF52DE", start: { x: 5, y: 5 }, end: { x: 1, y: 2 } },
      { color: "#FF9500", start: { x: 3, y: 2 }, end: { x: 6, y: 4 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      "#007AFF": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }],
      "#FF3B30": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }],
      "#34C759": [{ x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
      "#FF9500": [{ x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }]
    }
  },
  {
    id: 57,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#007AFF", start: { x: 2, y: 1 }, end: { x: 4, y: 6 } },
      { color: "#34C759", start: { x: 1, y: 2 }, end: { x: 6, y: 3 } },
      { color: "#FFCC00", start: { x: 2, y: 4 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 6, y: 5 }, end: { x: 5, y: 1 } },
      { color: "#FF9500", start: { x: 6, y: 6 }, end: { x: 4, y: 2 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#007AFF": [{ x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }],
      "#34C759": [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }],
      "#AF52DE": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }],
      "#FF9500": [{ x: 6, y: 6 }, { x: 5, y: 6 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }]
    }
  },
  {
    id: 58,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 5 }, end: { x: 6, y: 6 } },
      { color: "#007AFF", start: { x: 6, y: 1 }, end: { x: 0, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 4 }, end: { x: 5, y: 6 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 4, y: 4 } },
      { color: "#AF52DE", start: { x: 2, y: 3 }, end: { x: 3, y: 4 } },
      { color: "#FF9500", start: { x: 2, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#5AC8FA", start: { x: 5, y: 3 }, end: { x: 4, y: 2 } }
    ],
    solutions: {
      "#FF9500": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#5AC8FA": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }],
      "#AF52DE": [{ x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }],
      "#FFCC00": [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#007AFF": [{ x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#34C759": [{ x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }],
      "#FF3B30": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }]
    }
  },
  {
    id: 59,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 0 }, end: { x: 6, y: 5 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 6, y: 6 }, end: { x: 1, y: 2 } },
      { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 3, y: 5 } },
      { color: "#AF52DE", start: { x: 2, y: 5 }, end: { x: 2, y: 2 } },
      { color: "#FF9500", start: { x: 2, y: 4 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#007AFF": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#FF3B30": [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }],
      "#34C759": [{ x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
      "#FF9500": [{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }],
      "#FFCC00": [{ x: 3, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }]
    }
  },
  {
    id: 60,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 3, y: 6 } },
      { color: "#007AFF", start: { x: 2, y: 5 }, end: { x: 1, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 2 }, end: { x: 5, y: 1 } },
      { color: "#FFCC00", start: { x: 5, y: 2 }, end: { x: 4, y: 6 } },
      { color: "#AF52DE", start: { x: 5, y: 6 }, end: { x: 3, y: 0 } },
      { color: "#FF9500", start: { x: 5, y: 5 }, end: { x: 5, y: 3 } },
      { color: "#5AC8FA", start: { x: 4, y: 4 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#34C759": [{ x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
      "#AF52DE": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#FF9500": [{ x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 6 }],
      "#FF3B30": [{ x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      "#5AC8FA": [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#007AFF": [{ x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }]
    }
  },
  {
    id: 61,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 0, y: 6 }, end: { x: 2, y: 5 } },
      { color: "#34C759", start: { x: 1, y: 6 }, end: { x: 2, y: 4 } },
      { color: "#FFCC00", start: { x: 6, y: 0 }, end: { x: 4, y: 6 } },
      { color: "#AF52DE", start: { x: 5, y: 0 }, end: { x: 5, y: 4 } },
      { color: "#FF9500", start: { x: 5, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#5AC8FA", start: { x: 0, y: 4 }, end: { x: 1, y: 0 } },
      { color: "#FF2D55", start: { x: 2, y: 3 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#5AC8FA": [{ x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }],
      "#007AFF": [{ x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#FF2D55": [{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }],
      "#AF52DE": [{ x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }],
      "#FF9500": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }]
    }
  },
  {
    id: 62,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 5, y: 1 } },
      { color: "#007AFF", start: { x: 0, y: 5 }, end: { x: 6, y: 3 } },
      { color: "#34C759", start: { x: 0, y: 6 }, end: { x: 3, y: 2 } },
      { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 6, y: 4 } },
      { color: "#AF52DE", start: { x: 4, y: 2 }, end: { x: 3, y: 5 } },
      { color: "#FF9500", start: { x: 4, y: 5 }, end: { x: 5, y: 2 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
      "#007AFF": [{ x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#34C759": [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#FFCC00": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }],
      "#FF9500": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }],
      "#AF52DE": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 63,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 3, y: 0 }, end: { x: 6, y: 3 } },
      { color: "#007AFF", start: { x: 6, y: 0 }, end: { x: 4, y: 1 } },
      { color: "#34C759", start: { x: 4, y: 0 }, end: { x: 5, y: 1 } },
      { color: "#FFCC00", start: { x: 3, y: 1 }, end: { x: 1, y: 1 } },
      { color: "#AF52DE", start: { x: 2, y: 1 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }],
      "#007AFF": [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 1 }],
      "#34C759": [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }],
      "#FFCC00": [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }]
    }
  },
  {
    id: 64,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#34C759", start: { x: 2, y: 1 }, end: { x: 0, y: 5 } },
      { color: "#FFCC00", start: { x: 6, y: 6 }, end: { x: 2, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 6, y: 5 } },
      { color: "#FF9500", start: { x: 4, y: 3 }, end: { x: 6, y: 2 } },
      { color: "#5AC8FA", start: { x: 6, y: 0 }, end: { x: 4, y: 1 } },
      { color: "#FF2D55", start: { x: 6, y: 4 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }],
      "#34C759": [{ x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#5AC8FA": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }],
      "#FF3B30": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#FFCC00": [{ x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }],
      "#AF52DE": [{ x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }],
      "#FF2D55": [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }],
      "#FF9500": [{ x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 2 }]
    }
  },
  {
    id: 65,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#007AFF", start: { x: 0, y: 5 }, end: { x: 4, y: 4 } },
      { color: "#34C759", start: { x: 3, y: 4 }, end: { x: 6, y: 0 } },
      { color: "#FFCC00", start: { x: 3, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#AF52DE", start: { x: 2, y: 1 }, end: { x: 5, y: 2 } }
    ],
    solutions: {
      "#007AFF": [{ x: 4, y: 4 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#AF52DE": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
      "#34C759": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#FFCC00": [{ x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }]
    }
  },
  {
    id: 66,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 1, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 2, y: 3 } },
      { color: "#34C759", start: { x: 3, y: 5 }, end: { x: 0, y: 2 } },
      { color: "#FFCC00", start: { x: 5, y: 1 }, end: { x: 5, y: 4 } },
      { color: "#AF52DE", start: { x: 6, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#FF9500", start: { x: 6, y: 2 }, end: { x: 0, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      "#34C759": [{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }],
      "#FF9500": [{ x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }],
      "#AF52DE": [{ x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }]
    }
  },
  {
    id: 67,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 4 }, end: { x: 2, y: 6 } },
      { color: "#007AFF", start: { x: 1, y: 6 }, end: { x: 2, y: 2 } },
      { color: "#34C759", start: { x: 3, y: 2 }, end: { x: 6, y: 6 } },
      { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 5, y: 6 } },
      { color: "#AF52DE", start: { x: 1, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#FF9500", start: { x: 0, y: 1 }, end: { x: 6, y: 3 } },
      { color: "#5AC8FA", start: { x: 6, y: 4 }, end: { x: 2, y: 1 } }
    ],
    solutions: {
      "#FF9500": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }],
      "#5AC8FA": [{ x: 6, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }],
      "#AF52DE": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#007AFF": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }],
      "#FF3B30": [{ x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }],
      "#34C759": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#FFCC00": [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }]
    }
  },
  {
    id: 68,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 5 }, end: { x: 5, y: 3 } },
      { color: "#007AFF", start: { x: 5, y: 0 }, end: { x: 5, y: 2 } },
      { color: "#34C759", start: { x: 4, y: 5 }, end: { x: 0, y: 0 } },
      { color: "#FFCC00", start: { x: 6, y: 0 }, end: { x: 3, y: 6 } },
      { color: "#AF52DE", start: { x: 0, y: 1 }, end: { x: 3, y: 1 } },
      { color: "#FF9500", start: { x: 2, y: 1 }, end: { x: 2, y: 4 } },
      { color: "#5AC8FA", start: { x: 2, y: 6 }, end: { x: 0, y: 2 } }
    ],
    solutions: {
      "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#FFCC00": [{ x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }],
      "#5AC8FA": [{ x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }],
      "#AF52DE": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }],
      "#34C759": [{ x: 4, y: 5 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      "#FF9500": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#FF3B30": [{ x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 69,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 1, y: 3 } },
      { color: "#007AFF", start: { x: 1, y: 5 }, end: { x: 6, y: 0 } },
      { color: "#34C759", start: { x: 2, y: 5 }, end: { x: 6, y: 1 } },
      { color: "#FFCC00", start: { x: 2, y: 3 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 6, y: 3 }, end: { x: 6, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#AF52DE": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }],
      "#FFCC00": [{ x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      "#007AFF": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#34C759": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }]
    }
  },
  {
    id: 70,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 5, y: 1 }, end: { x: 6, y: 2 } },
      { color: "#34C759", start: { x: 6, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 3, y: 0 } },
      { color: "#AF52DE", start: { x: 0, y: 4 }, end: { x: 3, y: 1 } },
      { color: "#FF9500", start: { x: 0, y: 5 }, end: { x: 5, y: 5 } },
      { color: "#5AC8FA", start: { x: 3, y: 2 }, end: { x: 5, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#FFCC00": [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#AF52DE": [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }],
      "#FF9500": [{ x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#5AC8FA": [{ x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }],
      "#34C759": [{ x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#007AFF": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 6, y: 2 }]
    }
  },
  {
    id: 71,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 6, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 5 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 0, y: 5 }, end: { x: 4, y: 6 } },
      { color: "#FFCC00", start: { x: 0, y: 4 }, end: { x: 5, y: 6 } },
      { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 3, y: 3 } },
      { color: "#FF9500", start: { x: 1, y: 0 }, end: { x: 0, y: 3 } }
    ],
    solutions: {
      "#FF9500": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#FF3B30": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }],
      "#34C759": [{ x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }],
      "#FFCC00": [{ x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#007AFF": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }]
    }
  },
  {
    id: 72,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 5 }, end: { x: 2, y: 6 } },
      { color: "#007AFF", start: { x: 2, y: 5 }, end: { x: 5, y: 4 } },
      { color: "#34C759", start: { x: 5, y: 2 }, end: { x: 2, y: 2 } },
      { color: "#FFCC00", start: { x: 3, y: 3 }, end: { x: 5, y: 1 } },
      { color: "#AF52DE", start: { x: 3, y: 1 }, end: { x: 0, y: 6 } }
    ],
    solutions: {
      "#34C759": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }],
      "#FF3B30": [{ x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#AF52DE": [{ x: 0, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      "#FFCC00": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }]
    }
  },
  {
    id: 73,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 5 }, end: { x: 1, y: 1 } },
      { color: "#007AFF", start: { x: 4, y: 2 }, end: { x: 1, y: 6 } },
      { color: "#34C759", start: { x: 2, y: 6 }, end: { x: 3, y: 2 } },
      { color: "#FFCC00", start: { x: 2, y: 2 }, end: { x: 2, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 2 }, end: { x: 2, y: 5 } }
    ],
    solutions: {
      "#AF52DE": [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
      "#FFCC00": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#34C759": [{ x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 2, y: 6 }],
      "#007AFF": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }],
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 74,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 5 }, end: { x: 2, y: 6 } },
      { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 6, y: 3 } },
      { color: "#34C759", start: { x: 5, y: 1 }, end: { x: 5, y: 5 } },
      { color: "#FFCC00", start: { x: 0, y: 0 }, end: { x: 4, y: 2 } },
      { color: "#AF52DE", start: { x: 1, y: 2 }, end: { x: 5, y: 4 } },
      { color: "#FF9500", start: { x: 3, y: 3 }, end: { x: 1, y: 6 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      "#007AFF": [{ x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }],
      "#34C759": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
      "#AF52DE": [{ x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      "#FF3B30": [{ x: 2, y: 6 }, { x: 2, y: 5 }, { x: 1, y: 5 }],
      "#FF9500": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }]
    }
  },
  {
    id: 75,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 1, y: 5 } },
      { color: "#007AFF", start: { x: 3, y: 2 }, end: { x: 4, y: 3 } },
      { color: "#34C759", start: { x: 3, y: 3 }, end: { x: 6, y: 4 } },
      { color: "#FFCC00", start: { x: 5, y: 6 }, end: { x: 6, y: 3 } },
      { color: "#AF52DE", start: { x: 5, y: 3 }, end: { x: 6, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#007AFF": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
      "#34C759": [{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }],
      "#FFCC00": [{ x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }],
      "#AF52DE": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
    }
  },
  {
    id: 76,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 6 }, end: { x: 4, y: 5 } },
      { color: "#007AFF", start: { x: 6, y: 6 }, end: { x: 4, y: 4 } },
      { color: "#34C759", start: { x: 3, y: 5 }, end: { x: 2, y: 4 } },
      { color: "#FFCC00", start: { x: 3, y: 6 }, end: { x: 3, y: 3 } },
      { color: "#AF52DE", start: { x: 1, y: 1 }, end: { x: 6, y: 4 } },
      { color: "#FF9500", start: { x: 1, y: 2 }, end: { x: 5, y: 3 } },
      { color: "#5AC8FA", start: { x: 1, y: 6 }, end: { x: 6, y: 1 } }
    ],
    solutions: {
      "#5AC8FA": [{ x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }],
      "#FF9500": [{ x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
      "#FF3B30": [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 4, y: 5 }],
      "#007AFF": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 4, y: 4 }],
      "#AF52DE": [{ x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#FFCC00": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 6 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 77,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#007AFF", start: { x: 3, y: 2 }, end: { x: 0, y: 5 } },
      { color: "#34C759", start: { x: 3, y: 1 }, end: { x: 0, y: 0 } },
      { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 2, y: 5 } },
      { color: "#AF52DE", start: { x: 2, y: 4 }, end: { x: 5, y: 1 } },
      { color: "#FF9500", start: { x: 4, y: 4 }, end: { x: 0, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#34C759": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      "#007AFF": [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 2, y: 5 }],
      "#FF9500": [{ x: 0, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#AF52DE": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }]
    }
  },
  {
    id: 78,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 0, y: 1 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 3 }, end: { x: 1, y: 5 } },
      { color: "#FFCC00", start: { x: 2, y: 5 }, end: { x: 5, y: 1 } },
      { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 6, y: 1 } },
      { color: "#FF9500", start: { x: 2, y: 4 }, end: { x: 6, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#AF52DE": [{ x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }],
      "#FF9500": [{ x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#34C759": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }],
      "#FFCC00": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
      "#007AFF": [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }]
    }
  },
  {
    id: 79,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 5, y: 0 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 6, y: 0 } },
      { color: "#FFCC00", start: { x: 4, y: 0 }, end: { x: 2, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 5 }, end: { x: 3, y: 4 } },
      { color: "#FF9500", start: { x: 2, y: 0 }, end: { x: 3, y: 3 } },
      { color: "#5AC8FA", start: { x: 3, y: 2 }, end: { x: 4, y: 1 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#34C759": [{ x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }],
      "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#FF9500": [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      "#FFCC00": [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
      "#5AC8FA": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }],
      "#AF52DE": [{ x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }]
    }
  },
  {
    id: 80,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 1 }, end: { x: 4, y: 0 } },
      { color: "#007AFF", start: { x: 5, y: 1 }, end: { x: 6, y: 2 } },
      { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#FFCC00", start: { x: 2, y: 0 }, end: { x: 5, y: 6 } },
      { color: "#AF52DE", start: { x: 6, y: 4 }, end: { x: 4, y: 1 } },
      { color: "#FF9500", start: { x: 3, y: 0 }, end: { x: 5, y: 4 } },
      { color: "#5AC8FA", start: { x: 2, y: 1 }, end: { x: 2, y: 4 } }
    ],
    solutions: {
      "#5AC8FA": [{ x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }],
      "#FFCC00": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }],
      "#34C759": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#FF9500": [{ x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }],
      "#AF52DE": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
      "#007AFF": [{ x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 1 }],
      "#FF3B30": [{ x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }]
    }
  },
  {
    id: 81,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 2, y: 6 } },
      { color: "#007AFF", start: { x: 2, y: 0 }, end: { x: 3, y: 6 } },
      { color: "#34C759", start: { x: 6, y: 2 }, end: { x: 5, y: 6 } },
      { color: "#FFCC00", start: { x: 5, y: 5 }, end: { x: 4, y: 6 } },
      { color: "#AF52DE", start: { x: 6, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#FF9500", start: { x: 5, y: 1 }, end: { x: 2, y: 3 } },
      { color: "#5AC8FA", start: { x: 5, y: 2 }, end: { x: 2, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }],
      "#007AFF": [{ x: 3, y: 6 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }],
      "#FF9500": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }],
      "#5AC8FA": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }],
      "#34C759": [{ x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }],
      "#FFCC00": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 4, y: 6 }]
    }
  },
  {
    id: 82,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 1 }, end: { x: 2, y: 5 } },
      { color: "#007AFF", start: { x: 4, y: 6 }, end: { x: 6, y: 6 } },
      { color: "#34C759", start: { x: 3, y: 5 }, end: { x: 2, y: 0 } },
      { color: "#FFCC00", start: { x: 3, y: 4 }, end: { x: 6, y: 0 } },
      { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 3, y: 3 } },
      { color: "#FF9500", start: { x: 4, y: 4 }, end: { x: 5, y: 2 } }
    ],
    solutions: {
      "#34C759": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }],
      "#FF3B30": [{ x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      "#007AFF": [{ x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }],
      "#AF52DE": [{ x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }],
      "#FFCC00": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#FF9500": [{ x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }]
    }
  },
  {
    id: 83,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 3, y: 6 } },
      { color: "#007AFF", start: { x: 5, y: 5 }, end: { x: 3, y: 4 } },
      { color: "#34C759", start: { x: 1, y: 2 }, end: { x: 5, y: 4 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 1, y: 5 } },
      { color: "#AF52DE", start: { x: 2, y: 2 }, end: { x: 4, y: 2 } },
      { color: "#FF9500", start: { x: 0, y: 0 }, end: { x: 5, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }],
      "#007AFF": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 5, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
      "#FFCC00": [{ x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#FF9500": [{ x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 0 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }]
    }
  },
  {
    id: 84,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#007AFF", start: { x: 3, y: 2 }, end: { x: 4, y: 4 } },
      { color: "#34C759", start: { x: 5, y: 2 }, end: { x: 1, y: 5 } },
      { color: "#FFCC00", start: { x: 3, y: 4 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 3, y: 5 }, end: { x: 6, y: 3 } },
      { color: "#FF9500", start: { x: 3, y: 6 }, end: { x: 6, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }],
      "#007AFF": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#FFCC00": [{ x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }],
      "#AF52DE": [{ x: 6, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
      "#FF9500": [{ x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }]
    }
  },
  {
    id: 85,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 3, y: 6 } },
      { color: "#007AFF", start: { x: 6, y: 0 }, end: { x: 6, y: 4 } },
      { color: "#34C759", start: { x: 3, y: 0 }, end: { x: 6, y: 5 } },
      { color: "#FFCC00", start: { x: 4, y: 1 }, end: { x: 6, y: 6 } },
      { color: "#AF52DE", start: { x: 2, y: 1 }, end: { x: 2, y: 4 } },
      { color: "#FF9500", start: { x: 1, y: 1 }, end: { x: 3, y: 1 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }],
      "#AF52DE": [{ x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }],
      "#FF9500": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }],
      "#34C759": [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 5 }],
      "#FFCC00": [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }],
      "#007AFF": [{ x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }]
    }
  },
  {
    id: 86,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 5, y: 1 } },
      { color: "#007AFF", start: { x: 6, y: 0 }, end: { x: 0, y: 1 } },
      { color: "#34C759", start: { x: 6, y: 1 }, end: { x: 0, y: 2 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 5, y: 2 } },
      { color: "#AF52DE", start: { x: 4, y: 2 }, end: { x: 2, y: 3 } },
      { color: "#FF9500", start: { x: 1, y: 2 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
      "#AF52DE": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }],
      "#FF9500": [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
      "#34C759": [{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }],
      "#007AFF": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#FFCC00": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }]
    }
  },
  {
    id: 87,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 2 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 0, y: 6 } },
      { color: "#34C759", start: { x: 0, y: 2 }, end: { x: 1, y: 4 } },
      { color: "#FFCC00", start: { x: 0, y: 3 }, end: { x: 5, y: 1 } },
      { color: "#AF52DE", start: { x: 3, y: 5 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
      "#FFCC00": [{ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }],
      "#34C759": [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      "#007AFF": [{ x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }],
      "#AF52DE": [{ x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 88,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 6, y: 4 } },
      { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 3, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 2 }, end: { x: 6, y: 5 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 4, y: 2 }, end: { x: 3, y: 1 } },
      { color: "#FF9500", start: { x: 1, y: 1 }, end: { x: 5, y: 4 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }],
      "#AF52DE": [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 2 }],
      "#007AFF": [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }],
      "#FF9500": [{ x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#34C759": [{ x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }],
      "#FFCC00": [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }]
    }
  },
  {
    id: 89,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 1 }, end: { x: 1, y: 3 } },
      { color: "#007AFF", start: { x: 0, y: 5 }, end: { x: 6, y: 5 } },
      { color: "#34C759", start: { x: 2, y: 5 }, end: { x: 2, y: 3 } },
      { color: "#FFCC00", start: { x: 3, y: 1 }, end: { x: 6, y: 0 } },
      { color: "#AF52DE", start: { x: 5, y: 2 }, end: { x: 2, y: 4 } },
      { color: "#FF9500", start: { x: 3, y: 3 }, end: { x: 3, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#007AFF": [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }],
      "#34C759": [{ x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
      "#FFCC00": [{ x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#AF52DE": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 2 }],
      "#FF9500": [{ x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }]
    }
  },
  {
    id: 90,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 4, y: 2 } },
      { color: "#007AFF", start: { x: 5, y: 6 }, end: { x: 0, y: 6 } },
      { color: "#34C759", start: { x: 6, y: 6 }, end: { x: 3, y: 5 } },
      { color: "#FFCC00", start: { x: 3, y: 2 }, end: { x: 1, y: 4 } },
      { color: "#AF52DE", start: { x: 0, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#FF9500", start: { x: 1, y: 2 }, end: { x: 5, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#AF52DE": [{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#34C759": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
      "#FFCC00": [{ x: 1, y: 4 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 3, y: 2 }],
      "#FF9500": [{ x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
    }
  },
  {
    id: 91,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 3 } },
      { color: "#007AFF", start: { x: 2, y: 3 }, end: { x: 3, y: 4 } },
      { color: "#34C759", start: { x: 2, y: 4 }, end: { x: 4, y: 5 } },
      { color: "#FFCC00", start: { x: 0, y: 1 }, end: { x: 1, y: 5 } },
      { color: "#AF52DE", start: { x: 1, y: 1 }, end: { x: 4, y: 4 } },
      { color: "#FF9500", start: { x: 3, y: 1 }, end: { x: 5, y: 5 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }],
      "#FFCC00": [{ x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 1 }],
      "#AF52DE": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#007AFF": [{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }],
      "#34C759": [{ x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }],
      "#FF9500": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }]
    }
  },
  {
    id: 92,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 1, y: 3 } },
      { color: "#007AFF", start: { x: 1, y: 0 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 0, y: 2 }, end: { x: 3, y: 6 } },
      { color: "#FFCC00", start: { x: 3, y: 0 }, end: { x: 3, y: 2 } },
      { color: "#AF52DE", start: { x: 2, y: 2 }, end: { x: 1, y: 4 } },
      { color: "#FF9500", start: { x: 3, y: 3 }, end: { x: 1, y: 5 } }
    ],
    solutions: {
      "#34C759": [{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }],
      "#FF9500": [{ x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }],
      "#FF3B30": [{ x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 0 }],
      "#007AFF": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#FFCC00": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }]
    }
  },
  {
    id: 93,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 4, y: 0 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 6, y: 0 } },
      { color: "#34C759", start: { x: 6, y: 1 }, end: { x: 5, y: 2 } },
      { color: "#FFCC00", start: { x: 4, y: 2 }, end: { x: 0, y: 3 } },
      { color: "#AF52DE", start: { x: 1, y: 3 }, end: { x: 0, y: 5 } },
      { color: "#FF9500", start: { x: 4, y: 5 }, end: { x: 0, y: 4 } },
      { color: "#5AC8FA", start: { x: 6, y: 6 }, end: { x: 3, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      "#007AFF": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#FFCC00": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
      "#AF52DE": [{ x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 1, y: 3 }],
      "#FF9500": [{ x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }],
      "#5AC8FA": [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#34C759": [{ x: 5, y: 2 }, { x: 6, y: 2 }, { x: 6, y: 1 }]
    }
  },
  {
    id: 94,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 4, y: 1 } },
      { color: "#007AFF", start: { x: 5, y: 1 }, end: { x: 0, y: 1 } },
      { color: "#34C759", start: { x: 2, y: 0 }, end: { x: 1, y: 2 } },
      { color: "#FFCC00", start: { x: 0, y: 0 }, end: { x: 3, y: 4 } },
      { color: "#AF52DE", start: { x: 3, y: 3 }, end: { x: 4, y: 4 } }
    ],
    solutions: {
      "#007AFF": [{ x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }],
      "#FF3B30": [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 1 }],
      "#FFCC00": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#34C759": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }]
    }
  },
  {
    id: 95,
    size: 7,
    pairs: [
      { color: "#FF3B30", start: { x: 4, y: 1 }, end: { x: 2, y: 5 } },
      { color: "#007AFF", start: { x: 5, y: 0 }, end: { x: 5, y: 5 } },
      { color: "#34C759", start: { x: 6, y: 0 }, end: { x: 5, y: 6 } },
      { color: "#FFCC00", start: { x: 3, y: 1 }, end: { x: 1, y: 4 } },
      { color: "#AF52DE", start: { x: 0, y: 6 }, end: { x: 3, y: 3 } },
      { color: "#FF9500", start: { x: 4, y: 2 }, end: { x: 3, y: 5 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }],
      "#FF3B30": [{ x: 4, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
      "#AF52DE": [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }],
      "#34C759": [{ x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 6, y: 0 }],
      "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }],
      "#FF9500": [{ x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 96,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 2 }, end: { x: 5, y: 0 } },
      { color: "#007AFF", start: { x: 1, y: 3 }, end: { x: 3, y: 4 } },
      { color: "#34C759", start: { x: 1, y: 4 }, end: { x: 4, y: 6 } },
      { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 0, y: 1 } },
      { color: "#FF9500", start: { x: 1, y: 2 }, end: { x: 5, y: 6 } },
      { color: "#5AC8FA", start: { x: 4, y: 2 }, end: { x: 6, y: 6 } },
      { color: "#FF2D55", start: { x: 2, y: 5 }, end: { x: 4, y: 5 } }
    ],
    solutions: {
      "#AF52DE": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
      "#FFCC00": [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 2 }],
      "#FF3B30": [{ x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }, { x: 1, y: 7 }, { x: 0, y: 7 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }],
      "#FF9500": [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }],
      "#5AC8FA": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 4, y: 2 }],
      "#007AFF": [{ x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 1, y: 3 }],
      "#34C759": [{ x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }],
      "#FF2D55": [{ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }]
    }
  },
  {
    id: 97,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 2 } },
      { color: "#007AFF", start: { x: 3, y: 0 }, end: { x: 0, y: 1 } },
      { color: "#34C759", start: { x: 6, y: 6 }, end: { x: 3, y: 6 } },
      { color: "#FFCC00", start: { x: 0, y: 2 }, end: { x: 0, y: 6 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 0, y: 7 } },
      { color: "#FF9500", start: { x: 1, y: 5 }, end: { x: 5, y: 1 } },
      { color: "#5AC8FA", start: { x: 6, y: 1 }, end: { x: 1, y: 6 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 0 }],
      "#FF3B30": [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      "#AF52DE": [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }, { x: 1, y: 7 }, { x: 0, y: 7 }],
      "#FFCC00": [{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#5AC8FA": [{ x: 1, y: 6 }, { x: 2, y: 6 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }],
      "#FF9500": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 5 }],
      "#34C759": [{ x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }]
    }
  },
  {
    id: 98,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 0, y: 6 } },
      { color: "#007AFF", start: { x: 0, y: 7 }, end: { x: 1, y: 6 } },
      { color: "#34C759", start: { x: 2, y: 6 }, end: { x: 4, y: 7 } },
      { color: "#FFCC00", start: { x: 1, y: 5 }, end: { x: 6, y: 7 } },
      { color: "#AF52DE", start: { x: 1, y: 0 }, end: { x: 4, y: 5 } },
      { color: "#FF9500", start: { x: 3, y: 1 }, end: { x: 6, y: 4 } },
      { color: "#5AC8FA", start: { x: 6, y: 6 }, end: { x: 3, y: 2 } },
      { color: "#FF2D55", start: { x: 4, y: 3 }, end: { x: 7, y: 7 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#007AFF": [{ x: 0, y: 7 }, { x: 1, y: 7 }, { x: 1, y: 6 }],
      "#34C759": [{ x: 2, y: 6 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }],
      "#FFCC00": [{ x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 5, y: 7 }, { x: 6, y: 7 }],
      "#FF2D55": [{ x: 7, y: 7 }, { x: 7, y: 6 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 7, y: 3 }, { x: 7, y: 2 }, { x: 7, y: 1 }, { x: 7, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }],
      "#5AC8FA": [{ x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 6 }],
      "#FF9500": [{ x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }],
      "#AF52DE": [{ x: 4, y: 5 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }]
    }
  },
  {
    id: 99,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 4, y: 5 }, end: { x: 4, y: 1 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 2, y: 7 } },
      { color: "#34C759", start: { x: 3, y: 7 }, end: { x: 7, y: 7 } },
      { color: "#FFCC00", start: { x: 2, y: 0 }, end: { x: 0, y: 5 } },
      { color: "#AF52DE", start: { x: 2, y: 2 }, end: { x: 2, y: 6 } },
      { color: "#FF9500", start: { x: 3, y: 2 }, end: { x: 3, y: 5 } },
      { color: "#5AC8FA", start: { x: 4, y: 3 }, end: { x: 2, y: 5 } }
    ],
    solutions: {
      "#FFCC00": [{ x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      "#007AFF": [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }],
      "#34C759": [{ x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 }],
      "#AF52DE": [{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }],
      "#5AC8FA": [{ x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }],
      "#FF3B30": [{ x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }],
      "#FF9500": [{ x: 3, y: 5 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }]
    }
  },
  {
    id: 100,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 4, y: 0 } },
      { color: "#007AFF", start: { x: 0, y: 0 }, end: { x: 2, y: 1 } },
      { color: "#34C759", start: { x: 1, y: 0 }, end: { x: 2, y: 7 } },
      { color: "#FFCC00", start: { x: 0, y: 6 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 4, y: 2 }, end: { x: 0, y: 7 } },
      { color: "#FF9500", start: { x: 4, y: 5 }, end: { x: 2, y: 4 } },
      { color: "#5AC8FA", start: { x: 3, y: 5 }, end: { x: 2, y: 3 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
      "#34C759": [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }],
      "#FF3B30": [{ x: 7, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }],
      "#AF52DE": [{ x: 0, y: 7 }, { x: 1, y: 7 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 4, y: 2 }],
      "#FFCC00": [{ x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }],
      "#5AC8FA": [{ x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }],
      "#FF9500": [{ x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 5 }]
    }
  },
   {
    id: 101,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 1 }, end: { x: 2, y: 2 } },
      { color: "#007AFF", start: { x: 0, y: 1 }, end: { x: 5, y: 7 } },
      { color: "#34C759", start: { x: 1, y: 4 }, end: { x: 2, y: 6 } },
      { color: "#FFCC00", start: { x: 6, y: 3 }, end: { x: 0, y: 7 } },
      { color: "#AF52DE", start: { x: 4, y: 4 }, end: { x: 0, y: 6 } },
      { color: "#FF9500", start: { x: 5, y: 1 }, end: { x: 0, y: 5 } }
    ],
    solutions: {
      "#007AFF": [{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }],
      "#FFCC00": [{ x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }],
      "#FF9500": [{ x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }],
      "#FF3B30": [{ x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }],
      "#34C759": [{ x: 2, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
      "#AF52DE": [{ x: 4, y: 4 }, { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 0, y: 6 }]
    }
  },
  {
    id: 102,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 0 }, end: { x: 0, y: 2 } },
      { color: "#007AFF", start: { x: 3, y: 5 }, end: { x: 5, y: 2 } },
      { color: "#34C759", start: { x: 1, y: 4 }, end: { x: 1, y: 6 } },
      { color: "#FFCC00", start: { x: 6, y: 1 }, end: { x: 7, y: 7 } },
      { color: "#AF52DE", start: { x: 6, y: 7 }, end: { x: 7, y: 0 } },
      { color: "#FF9500", start: { x: 7, y: 1 }, end: { x: 4, y: 5 } },
      { color: "#5AC8FA", start: { x: 5, y: 5 }, end: { x: 7, y: 3 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
      "#34C759": [{ x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }],
      "#AF52DE": [{ x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }, { x: 1, y: 7 }, { x: 0, y: 7 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }],
      "#FFCC00": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 7, y: 6 }, { x: 7, y: 7 }],
      "#5AC8FA": [{ x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 7, y: 3 }],
      "#FF9500": [{ x: 7, y: 1 }, { x: 7, y: 2 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 4, y: 5 }],
      "#007AFF": [{ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }]
    }
  },
  {
    id: 103,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 7 }, end: { x: 7, y: 5 } },
      { color: "#007AFF", start: { x: 7, y: 4 }, end: { x: 4, y: 7 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 5, y: 2 } },
      { color: "#FFCC00", start: { x: 2, y: 5 }, end: { x: 4, y: 3 } },
      { color: "#AF52DE", start: { x: 4, y: 2 }, end: { x: 4, y: 4 } },
      { color: "#FF9500", start: { x: 1, y: 3 }, end: { x: 5, y: 7 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 7, y: 7 }, { x: 7, y: 6 }, { x: 7, y: 5 }],
      "#FF9500": [{ x: 5, y: 7 }, { x: 6, y: 7 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      "#007AFF": [{ x: 7, y: 4 }, { x: 7, y: 3 }, { x: 7, y: 2 }, { x: 7, y: 1 }, { x: 7, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }],
      "#34C759": [{ x: 5, y: 6 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }],
      "#AF52DE": [{ x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }],
      "#FFCC00": [{ x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }]
    }
  },
  {
    id: 104,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 1 }, end: { x: 7, y: 2 } },
      { color: "#007AFF", start: { x: 1, y: 1 }, end: { x: 6, y: 2 } },
      { color: "#34C759", start: { x: 0, y: 3 }, end: { x: 5, y: 2 } },
      { color: "#FFCC00", start: { x: 1, y: 3 }, end: { x: 6, y: 4 } },
      { color: "#AF52DE", start: { x: 1, y: 4 }, end: { x: 4, y: 4 } },
      { color: "#FF9500", start: { x: 1, y: 5 }, end: { x: 2, y: 4 } },
      { color: "#5AC8FA", start: { x: 1, y: 6 }, end: { x: 6, y: 5 } }
    ],
    solutions: {
      "#34C759": [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
      "#FF3B30": [{ x: 7, y: 2 }, { x: 7, y: 1 }, { x: 7, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }],
      "#007AFF": [{ x: 6, y: 2 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 1, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 }, { x: 7, y: 6 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 7, y: 3 }, { x: 6, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 4 }],
      "#FFCC00": [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 }, { x: 6, y: 4 }],
      "#5AC8FA": [{ x: 6, y: 5 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }],
      "#FF9500": [{ x: 2, y: 4 }, { x: 2, y: 5 }, { x: 1, y: 5 }]
    }
  },
  {
    id: 105,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 7, y: 2 } },
      { color: "#007AFF", start: { x: 3, y: 0 }, end: { x: 4, y: 7 } },
      { color: "#34C759", start: { x: 7, y: 0 }, end: { x: 4, y: 2 } },
      { color: "#FFCC00", start: { x: 7, y: 3 }, end: { x: 1, y: 6 } },
      { color: "#AF52DE", start: { x: 2, y: 1 }, end: { x: 6, y: 4 } },
      { color: "#FF9500", start: { x: 6, y: 6 }, end: { x: 1, y: 1 } }
    ],
    solutions: {
      "#34C759": [{ x: 7, y: 0 }, { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 4, y: 2 }],
      "#FF3B30": [{ x: 7, y: 2 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
      "#007AFF": [{ x: 3, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }],
      "#FFCC00": [{ x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }],
      "#FF9500": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 1 }],
      "#AF52DE": [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 }]
    }
  },
  {
    id: 106,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 0 } },
      { color: "#007AFF", start: { x: 4, y: 0 }, end: { x: 7, y: 1 } },
      { color: "#34C759", start: { x: 7, y: 0 }, end: { x: 6, y: 1 } },
      { color: "#FFCC00", start: { x: 5, y: 0 }, end: { x: 1, y: 3 } },
      { color: "#AF52DE", start: { x: 1, y: 2 }, end: { x: 5, y: 3 } },
      { color: "#FF9500", start: { x: 0, y: 6 }, end: { x: 7, y: 7 } },
      { color: "#5AC8FA", start: { x: 0, y: 5 }, end: { x: 7, y: 6 } }
    ],
    solutions: {
      "#FF9500": [{ x: 0, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 }],
      "#5AC8FA": [{ x: 7, y: 6 }, { x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 0, y: 5 }],
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
      "#34C759": [{ x: 7, y: 0 }, { x: 6, y: 0 }, { x: 6, y: 1 }],
      "#007AFF": [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 7, y: 4 }, { x: 7, y: 3 }, { x: 7, y: 2 }, { x: 7, y: 1 }],
      "#FFCC00": [{ x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 5, y: 4 }, { x: 4, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 2, y: 3 }, { x: 1, y: 3 }],
      "#AF52DE": [{ x: 5, y: 3 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }]
    }
  },
  {
    id: 107,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 2, y: 3 } },
      { color: "#007AFF", start: { x: 2, y: 1 }, end: { x: 4, y: 5 } },
      { color: "#34C759", start: { x: 5, y: 5 }, end: { x: 5, y: 1 } },
      { color: "#FFCC00", start: { x: 3, y: 5 }, end: { x: 6, y: 6 } },
      { color: "#AF52DE", start: { x: 1, y: 6 }, end: { x: 7, y: 4 } },
      { color: "#FF9500", start: { x: 1, y: 7 }, end: { x: 1, y: 4 } },
      { color: "#5AC8FA", start: { x: 6, y: 1 }, end: { x: 2, y: 6 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }],
      "#FF9500": [{ x: 1, y: 7 }, { x: 0, y: 7 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 1, y: 4 }],
      "#AF52DE": [{ x: 1, y: 6 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }],
      "#FFCC00": [{ x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 3, y: 5 }],
      "#5AC8FA": [{ x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }, { x: 2, y: 6 }],
      "#007AFF": [{ x: 4, y: 5 }, { x: 4, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }],
      "#34C759": [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }]
    }
  },
  {
    id: 108,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
      { color: "#007AFF", start: { x: 7, y: 4 }, end: { x: 6, y: 7 } },
      { color: "#34C759", start: { x: 6, y: 1 }, end: { x: 4, y: 2 } },
      { color: "#FFCC00", start: { x: 3, y: 2 }, end: { x: 6, y: 6 } },
      { color: "#AF52DE", start: { x: 0, y: 2 }, end: { x: 5, y: 7 } },
      { color: "#FF9500", start: { x: 3, y: 3 }, end: { x: 6, y: 2 } },
      { color: "#5AC8FA", start: { x: 3, y: 4 }, end: { x: 1, y: 2 } },
      { color: "#FF2D55", start: { x: 4, y: 5 }, end: { x: 0, y: 1 } }
    ],
    solutions: {
      "#FF3B30": [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      "#FF2D55": [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }],
      "#007AFF": [{ x: 6, y: 7 }, { x: 7, y: 7 }, { x: 7, y: 6 }, { x: 7, y: 5 }, { x: 7, y: 4 }],
      "#AF52DE": [{ x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }, { x: 2, y: 7 }, { x: 1, y: 7 }, { x: 0, y: 7 }, { x: 0, y: 6 }, { x: 0, y: 5 }, { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }],
      "#5AC8FA": [{ x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 1, y: 5 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 1, y: 2 }],
      "#34C759": [{ x: 6, y: 1 }, { x: 5, y: 1 }, { x: 4, y: 1 }, { x: 4, y: 2 }],
      "#FF9500": [{ x: 6, y: 2 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }],
      "#FFCC00": [{ x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 7, y: 3 }, { x: 7, y: 2 }, { x: 7, y: 1 }, { x: 7, y: 0 }, { x: 6, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }]
    }
  },
{
  id: 109,
  size: 8,
  pairs: [
    { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 5, y: 1 } },
    { color: "#007AFF", start: { x: 4, y: 1 }, end: { x: 5, y: 2 } },
    { color: "#34C759", start: { x: 6, y: 2 }, end: { x: 0, y: 4 } },
    { color: "#FFCC00", start: { x: 1, y: 4 }, end: { x: 5, y: 5 } },
    { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 4, y: 6 } },
    { color: "#FF9500", start: { x: 5, y: 6 }, end: { x: 0, y: 7 } }
  ],
  solutions: {
    "#FF3B30": [
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
      { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
      { x: 7, y: 1 }, { x: 6, y: 1 }, { x: 5, y: 1 }
    ],
    "#007AFF": [
      { x: 4, y: 1 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 },
      { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
      { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }
    ],
    "#34C759": [
      { x: 6, y: 2 }, { x: 7, y: 2 }, { x: 7, y: 3 }, { x: 6, y: 3 },
      { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 },
      { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 4 }
    ],
    "#FFCC00": [
      { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
      { x: 5, y: 4 }, { x: 6, y: 4 }, { x: 7, y: 4 }, { x: 7, y: 5 },
      { x: 6, y: 5 }, { x: 5, y: 5 }
    ],
    "#AF52DE": [
      { x: 4, y: 5 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 1, y: 5 },
      { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 },
      { x: 3, y: 6 }, { x: 4, y: 6 }
    ],
    "#FF9500": [
      { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 7, y: 6 }, { x: 7, y: 7 },
      { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 },
      { x: 2, y: 7 }, { x: 1, y: 7 }, { x: 0, y: 7 }
    ]
}
  },
{
    id: 110,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 1, y: 0 }, end: { x: 0, y: 6 } },
      { color: "#007AFF", start: { x: 1, y: 6 }, end: { x: 1, y: 3 } },
      { color: "#34C759", start: { x: 1, y: 2 }, end: { x: 0, y: 7 } },
      { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 3, y: 4 } },
      { color: "#AF52DE", start: { x: 6, y: 1 }, end: { x: 3, y: 6 } },
      { color: "#FF9500", start: { x: 2, y: 0 }, end: { x: 3, y: 5 } },
      { color: "#5AC8FA", start: { x: 4, y: 6 }, end: { x: 7, y: 7 } }
    ],
    solutions: {}
  },
  {
    id: 111,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 5, y: 0 } },
      { color: "#007AFF", start: { x: 1, y: 6 }, end: { x: 7, y: 1 } },
      { color: "#34C759", start: { x: 2, y: 6 }, end: { x: 2, y: 3 } },
      { color: "#FFCC00", start: { x: 1, y: 1 }, end: { x: 4, y: 2 } },
      { color: "#AF52DE", start: { x: 4, y: 0 }, end: { x: 2, y: 7 } },
      { color: "#FF9500", start: { x: 3, y: 7 }, end: { x: 7, y: 2 } },
      { color: "#5AC8FA", start: { x: 4, y: 7 }, end: { x: 4, y: 5 } },
      { color: "#FF2D55", start: { x: 6, y: 2 }, end: { x: 6, y: 6 } }
    ],
    solutions: {}
  },
  {
    id: 112,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 2, y: 5 }, end: { x: 2, y: 2 } },
      { color: "#007AFF", start: { x: 3, y: 2 }, end: { x: 2, y: 7 } },
      { color: "#34C759", start: { x: 7, y: 1 }, end: { x: 6, y: 2 } },
      { color: "#FFCC00", start: { x: 6, y: 6 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 5, y: 6 }, end: { x: 7, y: 0 } },
      { color: "#FF9500", start: { x: 7, y: 2 }, end: { x: 3, y: 1 } },
      { color: "#5AC8FA", start: { x: 6, y: 3 }, end: { x: 4, y: 4 } }
    ],
    solutions: {}
  },
  {
    id: 113,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 7, y: 3 } },
      { color: "#007AFF", start: { x: 7, y: 7 }, end: { x: 5, y: 6 } },
      { color: "#34C759", start: { x: 4, y: 7 }, end: { x: 0, y: 4 } },
      { color: "#FFCC00", start: { x: 0, y: 5 }, end: { x: 3, y: 6 } },
      { color: "#AF52DE", start: { x: 1, y: 5 }, end: { x: 2, y: 6 } },
      { color: "#FF9500", start: { x: 6, y: 6 }, end: { x: 1, y: 1 } },
      { color: "#5AC8FA", start: { x: 1, y: 2 }, end: { x: 4, y: 3 } },
      { color: "#FF2D55", start: { x: 7, y: 6 }, end: { x: 4, y: 4 } }
    ],
    solutions: {}
  },
  {
    id: 114,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 6, y: 1 } },
      { color: "#007AFF", start: { x: 7, y: 2 }, end: { x: 0, y: 7 } },
      { color: "#34C759", start: { x: 6, y: 0 }, end: { x: 0, y: 6 } },
      { color: "#FFCC00", start: { x: 7, y: 3 }, end: { x: 2, y: 2 } },
      { color: "#AF52DE", start: { x: 2, y: 3 }, end: { x: 5, y: 6 } },
      { color: "#FF9500", start: { x: 5, y: 5 }, end: { x: 3, y: 5 } },
      { color: "#5AC8FA", start: { x: 7, y: 4 }, end: { x: 3, y: 6 } },
      { color: "#FF2D55", start: { x: 2, y: 4 }, end: { x: 3, y: 7 } }
    ],
    solutions: {}
  },
  {
    id: 115,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 6, y: 6 } },
      { color: "#007AFF", start: { x: 5, y: 4 }, end: { x: 4, y: 6 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 1, y: 3 } },
      { color: "#FFCC00", start: { x: 1, y: 2 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 2, y: 5 }, end: { x: 6, y: 0 } },
      { color: "#FF9500", start: { x: 1, y: 6 }, end: { x: 4, y: 3 } },
      { color: "#5AC8FA", start: { x: 3, y: 5 }, end: { x: 7, y: 7 } }
    ],
    solutions: {}
  },
  {
    id: 116,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
      { color: "#007AFF", start: { x: 1, y: 0 }, end: { x: 1, y: 2 } },
      { color: "#34C759", start: { x: 7, y: 4 }, end: { x: 0, y: 5 } },
      { color: "#FFCC00", start: { x: 1, y: 5 }, end: { x: 6, y: 2 } },
      { color: "#AF52DE", start: { x: 1, y: 6 }, end: { x: 5, y: 2 } },
      { color: "#FF9500", start: { x: 0, y: 4 }, end: { x: 6, y: 6 } }
    ],
    solutions: {}
  },
  {
    id: 117,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 5, y: 7 }, end: { x: 0, y: 7 } },
      { color: "#007AFF", start: { x: 6, y: 7 }, end: { x: 7, y: 4 } },
      { color: "#34C759", start: { x: 5, y: 6 }, end: { x: 6, y: 5 } },
      { color: "#FFCC00", start: { x: 4, y: 6 }, end: { x: 5, y: 5 } },
      { color: "#AF52DE", start: { x: 4, y: 5 }, end: { x: 5, y: 3 } },
      { color: "#FF9500", start: { x: 4, y: 4 }, end: { x: 3, y: 3 } },
      { color: "#5AC8FA", start: { x: 6, y: 2 }, end: { x: 2, y: 5 } }
    ],
    solutions: {}
  },
  {
    id: 118,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 6 }, end: { x: 1, y: 7 } },
      { color: "#007AFF", start: { x: 7, y: 7 }, end: { x: 6, y: 6 } },
      { color: "#34C759", start: { x: 5, y: 7 }, end: { x: 6, y: 5 } },
      { color: "#FFCC00", start: { x: 6, y: 3 }, end: { x: 4, y: 7 } },
      { color: "#AF52DE", start: { x: 6, y: 2 }, end: { x: 3, y: 7 } },
      { color: "#FF9500", start: { x: 5, y: 2 }, end: { x: 3, y: 6 } },
      { color: "#5AC8FA", start: { x: 3, y: 4 }, end: { x: 5, y: 3 } }
    ],
    solutions: {}
  },
  {
    id: 119,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 7, y: 0 }, end: { x: 7, y: 7 } },
      { color: "#007AFF", start: { x: 4, y: 0 }, end: { x: 6, y: 1 } },
      { color: "#34C759", start: { x: 1, y: 1 }, end: { x: 2, y: 3 } },
      { color: "#FFCC00", start: { x: 1, y: 2 }, end: { x: 3, y: 3 } },
      { color: "#AF52DE", start: { x: 5, y: 1 }, end: { x: 3, y: 4 } },
      { color: "#FF9500", start: { x: 4, y: 4 }, end: { x: 2, y: 5 } },
      { color: "#5AC8FA", start: { x: 5, y: 2 }, end: { x: 1, y: 3 } }
    ],
    solutions: {}
  },
  {
    id: 120,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 0 }, end: { x: 2, y: 1 } },
      { color: "#007AFF", start: { x: 6, y: 1 }, end: { x: 4, y: 3 } },
      { color: "#34C759", start: { x: 5, y: 2 }, end: { x: 3, y: 1 } },
      { color: "#FFCC00", start: { x: 4, y: 1 }, end: { x: 5, y: 6 } },
      { color: "#AF52DE", start: { x: 2, y: 0 }, end: { x: 3, y: 7 } },
      { color: "#FF9500", start: { x: 2, y: 2 }, end: { x: 5, y: 5 } }
    ],
    solutions: {}
  }
]

export const createLevel = (id: number, size: number, paths: Point[][]): Level => {
  const pairs = paths.map((path, index) => ({
    color: COLORS[index % COLORS.length],
    start: path[0],
    end: path[path.length - 1]
  }));

  const solutions: Record<string, Point[]> = {};
  paths.forEach((path, index) => {
    solutions[COLORS[index % COLORS.length]] = path;
  });

  return {
    id,
    size,
    pairs,
    solutions,
  };
};

export const getCustomLevel = (id: number): Level | null => {
  const manual = MANUAL_LEVELS.find(level => level.id === id);
  if (manual) return manual;

  try {
    const saved = localStorage.getItem('neuronodes_custom_levels');
    if (!saved) return null;

    const customLevels = JSON.parse(saved);
    return customLevels[id.toString()] || customLevels[id] || null;
  } catch {
    return null;
  }
};

export const saveCustomLevelToStorage = (level: Level) => {
  try {
    const saved = localStorage.getItem('neuronodes_custom_levels');
    const customLevels = saved ? JSON.parse(saved) : {};
    customLevels[level.id.toString()] = level;
    localStorage.setItem('neuronodes_custom_levels', JSON.stringify(customLevels));
  } catch (error) {
    console.error('Failed to save custom level', error);
  }
};

export const clearAllCustomLevels = () => {
  localStorage.removeItem('neuronodes_custom_levels');
};
