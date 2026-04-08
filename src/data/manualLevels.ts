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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
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
    solutions: {}
  },
  {
    id: 109,
    size: 8,
    pairs: [
      { color: "#FF3B30", start: { x: 6, y: 4 }, end: { x: 6, y: 7 } },
      { color: "#007AFF", start: { x: 7, y: 4 },end: { x: 3, y: 3 } },
    ],
    solutions: {}
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
    solutions: {}
  };
};