import { Level } from './levels';

/**
 * MANUALLY DESIGNED LEVELS
 * Add your custom levels here. The game will check this list first 
 * before generating a procedural level.
 */
export const MANUAL_LEVELS: Level[] = [
  {
    id: 1,
    size: 4,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 3, y: 3 } },
      { color: "#007AFF", start: { x: 3, y: 0 }, end: { x: 0, y: 3 } },
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 3 }],
      "#007AFF": [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
    }
  },
  {
    id: 2,
    size: 5,
    pairs: [
      { color: "#FF3B30", start: { x: 0, y: 0 }, end: { x: 4, y: 4 } },
      { color: "#4CD964", start: { x: 0, y: 4 }, end: { x: 4, y: 0 } },
      { color: "#FFCC00", start: { x: 2, y: 0 }, end: { x: 2, y: 4 } },
    ],
    solutions: {
      "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }],
      "#4CD964": [{ x: 0, y: 4 }, { x: 1, y: 4 }, { x: 1, y: 3 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 1 }, { x: 4, y: 0 }],
      "#FFCC00": [{ x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
    }
  }
  // Add more levels here...
];