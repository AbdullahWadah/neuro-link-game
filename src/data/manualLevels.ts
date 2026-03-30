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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 4, y: 2 }],
  "#007AFF": [{ x: 2, y: 0 }, { x: 5, y: 2 }],
  "#34C759": [{ x: 3, y: 3 }, { x: 0, y: 1 }],
  "#FFCC00": [{ x: 4, y: 3 }, { x: 0, y: 5 }],
  "#AF52DE": [{ x: 1, y: 4 }, { x: 5, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 1, y: 4 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 2, y: 4 }, { x: 4, y: 3 }],
  "#FFCC00": [{ x: 1, y: 1 }, { x: 5, y: 1 }],
  "#AF52DE": [{ x: 4, y: 1 }, { x: 1, y: 2 }],
  "#FF9500": [{ x: 3, y: 2 }, { x: 0, y: 4 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 3, y: 0 }],
  "#007AFF": [{ x: 5, y: 0 }, { x: 3, y: 2 }],
  "#34C759": [{ x: 5, y: 1 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 1, y: 4 }, { x: 4, y: 2 }],
  "#AF52DE": [{ x: 0, y: 1 }, { x: 2, y: 2 }],
  "#FF9500": [{ x: 1, y: 2 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 2, y: 0 }],
  "#007AFF": [{ x: 1, y: 0 }, { x: 1, y: 3 }],
  "#34C759": [{ x: 3, y: 1 }, { x: 3, y: 3 }],
  "#FFCC00": [{ x: 3, y: 4 }, { x: 3, y: 0 }],
  "#AF52DE": [{ x: 5, y: 0 }, { x: 4, y: 5 }],
  "#FF9500": [{ x: 3, y: 5 }, { x: 0, y: 5 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 0, y: 4 }, { x: 2, y: 4 }],
  "#34C759": [{ x: 0, y: 5 }, { x: 5, y: 4 }],
  "#FFCC00": [{ x: 5, y: 2 }, { x: 3, y: 4 }],
  "#AF52DE": [{ x: 5, y: 1 }, { x: 2, y: 2 }],
  "#FF9500": [{ x: 3, y: 1 }, { x: 3, y: 3 }]
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
  "#FF3B30": [{ x: 2, y: 0 }, { x: 0, y: 2 }],
  "#007AFF": [{ x: 5, y: 2 }, { x: 2, y: 2 }],
  "#34C759": [{ x: 3, y: 3 }, { x: 1, y: 4 }],
  "#FFCC00": [{ x: 3, y: 4 }, { x: 4, y: 1 }],
  "#AF52DE": [{ x: 2, y: 1 }, { x: 5, y: 3 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 0, y: 5 }],
  "#007AFF": [{ x: 3, y: 1 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 4, y: 3 }, { x: 0, y: 3 }],
  "#FFCC00": [{ x: 3, y: 0 }, { x: 0, y: 2 }],
  "#AF52DE": [{ x: 4, y: 0 }, { x: 2, y: 2 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 2, y: 4 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 4, y: 5 }],
  "#34C759": [{ x: 4, y: 4 }, { x: 3, y: 1 }],
  "#FFCC00": [{ x: 3, y: 4 }, { x: 1, y: 1 }],
  "#AF52DE": [{ x: 3, y: 5 }, { x: 0, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 1 }, { x: 5, y: 5 }],
  "#007AFF": [{ x: 0, y: 4 }, { x: 2, y: 5 }],
  "#34C759": [{ x: 2, y: 2 }, { x: 1, y: 3 }],
  "#FFCC00": [{ x: 3, y: 2 }, { x: 0, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 0, y: 2 }],
  "#007AFF": [{ x: 1, y: 4 }, { x: 4, y: 1 }],
  "#34C759": [{ x: 3, y: 2 }, { x: 5, y: 3 }],
  "#FFCC00": [{ x: 4, y: 4 }, { x: 5, y: 5 }],
  "#AF52DE": [{ x: 0, y: 1 }, { x: 4, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 5, y: 4 }],
  "#007AFF": [{ x: 2, y: 1 }, { x: 2, y: 4 }],
  "#34C759": [{ x: 1, y: 1 }, { x: 0, y: 5 }],
  "#FFCC00": [{ x: 1, y: 2 }, { x: 3, y: 5 }],
  "#AF52DE": [{ x: 4, y: 1 }, { x: 4, y: 3 }],
  "#FF9500": [{ x: 3, y: 1 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 2 }],
  "#007AFF": [{ x: 0, y: 1 }, { x: 0, y: 3 }],
  "#34C759": [{ x: 0, y: 4 }, { x: 4, y: 1 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 3, y: 4 }],
  "#AF52DE": [{ x: 3, y: 5 }, { x: 2, y: 2 }],
  "#FF9500": [{ x: 2, y: 4 }, { x: 0, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 5, y: 0 }],
  "#007AFF": [{ x: 2, y: 3 }, { x: 0, y: 5 }],
  "#34C759": [{ x: 0, y: 1 }, { x: 1, y: 5 }],
  "#FFCC00": [{ x: 2, y: 5 }, { x: 5, y: 4 }],
  "#AF52DE": [{ x: 3, y: 3 }, { x: 4, y: 2 }],
  "#FF9500": [{ x: 2, y: 2 }, { x: 0, y: 2 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 5, y: 1 }],
  "#007AFF": [{ x: 3, y: 1 }, { x: 3, y: 5 }],
  "#34C759": [{ x: 3, y: 2 }, { x: 0, y: 1 }],
  "#FFCC00": [{ x: 1, y: 2 }, { x: 0, y: 3 }],
  "#AF52DE": [{ x: 3, y: 3 }, { x: 0, y: 4 }],
  "#FF9500": [{ x: 4, y: 3 }, { x: 0, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 4 }, { x: 0, y: 5 }],
  "#007AFF": [{ x: 2, y: 4 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 1, y: 3 }, { x: 4, y: 4 }],
  "#FFCC00": [{ x: 2, y: 3 }, { x: 3, y: 2 }],
  "#AF52DE": [{ x: 2, y: 5 }, { x: 0, y: 4 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 2 }],
  "#007AFF": [{ x: 1, y: 1 }, { x: 1, y: 4 }],
  "#34C759": [{ x: 1, y: 3 }, { x: 3, y: 1 }],
  "#FFCC00": [{ x: 4, y: 1 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 1, y: 0 }, { x: 4, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 4, y: 5 }],
  "#007AFF": [{ x: 3, y: 2 }, { x: 0, y: 3 }],
  "#34C759": [{ x: 5, y: 5 }, { x: 1, y: 4 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 3, y: 5 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 4, y: 4 }],
  "#007AFF": [{ x: 5, y: 4 }, { x: 0, y: 4 }],
  "#34C759": [{ x: 0, y: 3 }, { x: 4, y: 2 }],
  "#FFCC00": [{ x: 3, y: 0 }, { x: 2, y: 3 }],
  "#AF52DE": [{ x: 4, y: 0 }, { x: 1, y: 1 }]
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
  "#FF3B30": [{ x: 4, y: 1 }, { x: 5, y: 4 }],
  "#007AFF": [{ x: 0, y: 2 }, { x: 3, y: 4 }],
  "#34C759": [{ x: 2, y: 2 }, { x: 1, y: 4 }],
  "#FFCC00": [{ x: 5, y: 5 }, { x: 1, y: 2 }],
  "#AF52DE": [{ x: 5, y: 3 }, { x: 0, y: 0 }]
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
  "#FF3B30": [{ x: 1, y: 0 }, { x: 0, y: 4 }],
  "#007AFF": [{ x: 4, y: 6 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 5, y: 6 }, { x: 1, y: 1 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 0, y: 6 }],
  "#AF52DE": [{ x: 0, y: 5 }, { x: 3, y: 6 }]
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
  "#FF3B30": [{ x: 6, y: 1 }, { x: 3, y: 1 }],
  "#007AFF": [{ x: 3, y: 5 }, { x: 6, y: 0 }],
  "#34C759": [{ x: 3, y: 6 }, { x: 5, y: 5 }],
  "#FFCC00": [{ x: 2, y: 1 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 3, y: 4 }, { x: 1, y: 5 }],
  "#FF9500": [{ x: 1, y: 1 }, { x: 4, y: 3 }],
  "#5AC8FA": [{ x: 6, y: 2 }, { x: 5, y: 6 }]
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
  "#FF3B30": [{ x: 6, y: 0 }, { x: 4, y: 1 }],
  "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 2 }],
  "#34C759": [{ x: 4, y: 2 }, { x: 1, y: 3 }],
  "#FFCC00": [{ x: 0, y: 3 }, { x: 5, y: 4 }],
  "#AF52DE": [{ x: 2, y: 4 }, { x: 6, y: 1 }],
  "#FF9500": [{ x: 6, y: 2 }, { x: 5, y: 6 }],
  "#5AC8FA": [{ x: 5, y: 5 }, { x: 0, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 2 }],
  "#007AFF": [{ x: 1, y: 2 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 3, y: 2 }, { x: 5, y: 2 }],
  "#FFCC00": [{ x: 0, y: 6 }, { x: 4, y: 6 }],
  "#AF52DE": [{ x: 1, y: 4 }, { x: 3, y: 4 }],
  "#FF9500": [{ x: 5, y: 1 }, { x: 2, y: 2 }],
  "#5AC8FA": [{ x: 5, y: 6 }, { x: 2, y: 3 }],
  "#FF2D55": [{ x: 4, y: 4 }, { x: 6, y: 6 }]
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
  "#FF3B30": [{ x: 2, y: 0 }, { x: 6, y: 5 }],
  "#007AFF": [{ x: 2, y: 4 }, { x: 3, y: 2 }],
  "#34C759": [{ x: 2, y: 2 }, { x: 3, y: 3 }],
  "#FFCC00": [{ x: 2, y: 1 }, { x: 5, y: 4 }],
  "#AF52DE": [{ x: 3, y: 0 }, { x: 6, y: 4 }],
  "#FF9500": [{ x: 5, y: 3 }, { x: 3, y: 1 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 5, y: 2 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 6, y: 6 }],
  "#34C759": [{ x: 6, y: 5 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 2, y: 5 }, { x: 3, y: 1 }],
  "#AF52DE": [{ x: 6, y: 0 }, { x: 5, y: 3 }],
  "#FF9500": [{ x: 3, y: 3 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 3, y: 0 }, { x: 5, y: 2 }],
  "#007AFF": [{ x: 3, y: 1 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 5, y: 1 }, { x: 1, y: 1 }],
  "#FFCC00": [{ x: 4, y: 3 }, { x: 1, y: 5 }],
  "#AF52DE": [{ x: 4, y: 4 }, { x: 6, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 5 }, { x: 4, y: 2 }],
  "#007AFF": [{ x: 1, y: 3 }, { x: 5, y: 2 }],
  "#34C759": [{ x: 0, y: 4 }, { x: 6, y: 3 }],
  "#FFCC00": [{ x: 6, y: 6 }, { x: 2, y: 5 }],
  "#AF52DE": [{ x: 5, y: 6 }, { x: 0, y: 6 }],
  "#FF9500": [{ x: 5, y: 5 }, { x: 4, y: 4 }]
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
  "#FF3B30": [{ x: 6, y: 6 }, { x: 5, y: 4 }],
  "#007AFF": [{ x: 6, y: 0 }, { x: 2, y: 0 }],
  "#34C759": [{ x: 5, y: 6 }, { x: 1, y: 5 }],
  "#FFCC00": [{ x: 4, y: 6 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 5, y: 3 }, { x: 2, y: 1 }],
  "#FF9500": [{ x: 5, y: 2 }, { x: 1, y: 1 }],
  "#5AC8FA": [{ x: 1, y: 0 }, { x: 4, y: 3 }]
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
  "#FF3B30": [{ x: 6, y: 0 }, { x: 4, y: 5 }],
  "#007AFF": [{ x: 6, y: 1 }, { x: 1, y: 1 }],
  "#34C759": [{ x: 2, y: 1 }, { x: 3, y: 4 }],
  "#FFCC00": [{ x: 2, y: 3 }, { x: 3, y: 5 }],
  "#AF52DE": [{ x: 5, y: 1 }, { x: 5, y: 5 }],
  "#FF9500": [{ x: 3, y: 1 }, { x: 0, y: 6 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 0, y: 6 }],
  "#007AFF": [{ x: 0, y: 2 }, { x: 3, y: 2 }],
  "#34C759": [{ x: 2, y: 1 }, { x: 1, y: 5 }],
  "#FFCC00": [{ x: 5, y: 1 }, { x: 1, y: 6 }],
  "#AF52DE": [{ x: 5, y: 5 }, { x: 6, y: 6 }],
  "#FF9500": [{ x: 5, y: 6 }, { x: 3, y: 6 }],
  "#5AC8FA": [{ x: 6, y: 0 }, { x: 4, y: 2 }],
  "#FF2D55": [{ x: 5, y: 2 }, { x: 3, y: 4 }]
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
  "#FF3B30": [{ x: 0, y: 5 }, { x: 2, y: 4 }],
  "#007AFF": [{ x: 5, y: 1 }, { x: 0, y: 1 }],
  "#34C759": [{ x: 5, y: 2 }, { x: 0, y: 4 }],
  "#FFCC00": [{ x: 5, y: 5 }, { x: 1, y: 3 }],
  "#AF52DE": [{ x: 2, y: 3 }, { x: 4, y: 3 }],
  "#FF9500": [{ x: 5, y: 3 }, { x: 0, y: 0 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 3, y: 1 }],
  "#007AFF": [{ x: 1, y: 5 }, { x: 6, y: 0 }],
  "#34C759": [{ x: 1, y: 3 }, { x: 0, y: 5 }],
  "#FFCC00": [{ x: 1, y: 2 }, { x: 5, y: 1 }],
  "#AF52DE": [{ x: 3, y: 6 }, { x: 6, y: 1 }],
  "#FF9500": [{ x: 4, y: 1 }, { x: 4, y: 4 }]
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
  "#FF3B30": [{ x: 0, y: 1 }, { x: 3, y: 1 }],
  "#007AFF": [{ x: 0, y: 0 }, { x: 5, y: 4 }],
  "#34C759": [{ x: 4, y: 1 }, { x: 5, y: 5 }],
  "#FFCC00": [{ x: 5, y: 1 }, { x: 1, y: 5 }],
  "#AF52DE": [{ x: 6, y: 5 }, { x: 3, y: 5 }]
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
  "#FF3B30": [{ x: 6, y: 1 }, { x: 2, y: 3 }],
  "#007AFF": [{ x: 3, y: 6 }, { x: 6, y: 0 }],
  "#34C759": [{ x: 4, y: 6 }, { x: 3, y: 3 }],
  "#FFCC00": [{ x: 5, y: 6 }, { x: 6, y: 2 }],
  "#AF52DE": [{ x: 2, y: 4 }, { x: 1, y: 1 }],
  "#FF9500": [{ x: 1, y: 5 }, { x: 4, y: 3 }]
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
  "#FF3B30": [{ x: 6, y: 0 }, { x: 3, y: 0 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 5, y: 6 }],
  "#34C759": [{ x: 0, y: 0 }, { x: 1, y: 1 }],
  "#FFCC00": [{ x: 2, y: 2 }, { x: 5, y: 5 }],
  "#AF52DE": [{ x: 1, y: 0 }, { x: 5, y: 3 }],
  "#FF9500": [{ x: 5, y: 4 }, { x: 2, y: 5 }],
  "#5AC8FA": [{ x: 2, y: 4 }, { x: 3, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 5, y: 2 }],
  "#007AFF": [{ x: 1, y: 3 }, { x: 1, y: 6 }],
  "#34C759": [{ x: 6, y: 2 }, { x: 0, y: 1 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 4, y: 5 }, { x: 5, y: 3 }],
  "#FF9500": [{ x: 6, y: 3 }, { x: 1, y: 4 }],
  "#5AC8FA": [{ x: 0, y: 6 }, { x: 1, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 2, y: 2 }],
  "#007AFF": [{ x: 6, y: 5 }, { x: 1, y: 0 }],
  "#34C759": [{ x: 2, y: 0 }, { x: 1, y: 4 }],
  "#FFCC00": [{ x: 1, y: 5 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 5, y: 3 }, { x: 5, y: 1 }],
  "#FF9500": [{ x: 5, y: 0 }, { x: 3, y: 5 }],
  "#5AC8FA": [{ x: 3, y: 0 }, { x: 4, y: 3 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 3, y: 2 }],
  "#007AFF": [{ x: 1, y: 4 }, { x: 2, y: 5 }],
  "#34C759": [{ x: 3, y: 5 }, { x: 4, y: 2 }],
  "#FFCC00": [{ x: 4, y: 5 }, { x: 5, y: 4 }],
  "#AF52DE": [{ x: 1, y: 3 }, { x: 5, y: 5 }],
  "#FF9500": [{ x: 4, y: 1 }, { x: 6, y: 6 }],
  "#5AC8FA": [{ x: 2, y: 4 }, { x: 6, y: 2 }]
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
  "#FF3B30": [{ x: 5, y: 1 }, { x: 5, y: 4 }],
  "#007AFF": [{ x: 4, y: 4 }, { x: 2, y: 4 }],
  "#34C759": [{ x: 6, y: 3 }, { x: 4, y: 2 }],
  "#FFCC00": [{ x: 4, y: 3 }, { x: 1, y: 1 }],
  "#AF52DE": [{ x: 5, y: 5 }, { x: 1, y: 2 }],
  "#FF9500": [{ x: 3, y: 2 }, { x: 6, y: 4 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 3, y: 0 }],
  "#007AFF": [{ x: 2, y: 1 }, { x: 4, y: 6 }],
  "#34C759": [{ x: 1, y: 2 }, { x: 6, y: 3 }],
  "#FFCC00": [{ x: 2, y: 4 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 6, y: 5 }, { x: 5, y: 1 }],
  "#FF9500": [{ x: 6, y: 6 }, { x: 4, y: 2 }]
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
  "#FF3B30": [{ x: 1, y: 5 }, { x: 6, y: 6 }],
  "#007AFF": [{ x: 6, y: 1 }, { x: 0, y: 3 }],
  "#34C759": [{ x: 1, y: 4 }, { x: 5, y: 6 }],
  "#FFCC00": [{ x: 1, y: 3 }, { x: 4, y: 4 }],
  "#AF52DE": [{ x: 2, y: 3 }, { x: 3, y: 4 }],
  "#FF9500": [{ x: 2, y: 2 }, { x: 3, y: 3 }],
  "#5AC8FA": [{ x: 5, y: 3 }, { x: 4, y: 2 }]
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
  "#FF3B30": [{ x: 5, y: 0 }, { x: 6, y: 5 }],
  "#007AFF": [{ x: 0, y: 1 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 6, y: 6 }, { x: 1, y: 2 }],
  "#FFCC00": [{ x: 1, y: 1 }, { x: 3, y: 5 }],
  "#AF52DE": [{ x: 2, y: 5 }, { x: 2, y: 2 }],
  "#FF9500": [{ x: 2, y: 4 }, { x: 3, y: 3 }]
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
  "#FF3B30": [{ x: 2, y: 0 }, { x: 3, y: 6 }],
  "#007AFF": [{ x: 2, y: 5 }, { x: 1, y: 3 }],
  "#34C759": [{ x: 1, y: 2 }, { x: 5, y: 1 }],
  "#FFCC00": [{ x: 5, y: 2 }, { x: 4, y: 6 }],
  "#AF52DE": [{ x: 5, y: 6 }, { x: 3, y: 0 }],
  "#FF9500": [{ x: 5, y: 5 }, { x: 5, y: 3 }],
  "#5AC8FA": [{ x: 4, y: 4 }, { x: 3, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 0, y: 6 }, { x: 2, y: 5 }],
  "#34C759": [{ x: 1, y: 6 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 6, y: 0 }, { x: 4, y: 6 }],
  "#AF52DE": [{ x: 5, y: 0 }, { x: 5, y: 4 }],
  "#FF9500": [{ x: 5, y: 1 }, { x: 3, y: 1 }],
  "#5AC8FA": [{ x: 0, y: 4 }, { x: 1, y: 0 }],
  "#FF2D55": [{ x: 2, y: 3 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 5, y: 1 }],
  "#007AFF": [{ x: 0, y: 5 }, { x: 6, y: 3 }],
  "#34C759": [{ x: 0, y: 6 }, { x: 3, y: 2 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 6, y: 4 }],
  "#AF52DE": [{ x: 4, y: 2 }, { x: 3, y: 5 }],
  "#FF9500": [{ x: 4, y: 5 }, { x: 5, y: 2 }]
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
  "#FF3B30": [{ x: 3, y: 0 }, { x: 6, y: 3 }],
  "#007AFF": [{ x: 6, y: 0 }, { x: 4, y: 1 }],
  "#34C759": [{ x: 4, y: 0 }, { x: 5, y: 1 }],
  "#FFCC00": [{ x: 3, y: 1 }, { x: 1, y: 1 }],
  "#AF52DE": [{ x: 2, y: 1 }, { x: 4, y: 4 }]
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
  "#FF3B30": [{ x: 6, y: 1 }, { x: 0, y: 6 }],
  "#007AFF": [{ x: 0, y: 1 }, { x: 3, y: 1 }],
  "#34C759": [{ x: 2, y: 1 }, { x: 0, y: 5 }],
  "#FFCC00": [{ x: 6, y: 6 }, { x: 2, y: 4 }],
  "#AF52DE": [{ x: 3, y: 3 }, { x: 6, y: 5 }],
  "#FF9500": [{ x: 4, y: 3 }, { x: 6, y: 2 }],
  "#5AC8FA": [{ x: 6, y: 0 }, { x: 4, y: 1 }],
  "#FF2D55": [{ x: 6, y: 4 }, { x: 4, y: 4 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 0, y: 6 }],
  "#007AFF": [{ x: 0, y: 5 }, { x: 4, y: 4 }],
  "#34C759": [{ x: 3, y: 4 }, { x: 6, y: 0 }],
  "#FFCC00": [{ x: 3, y: 1 }, { x: 6, y: 6 }],
  "#AF52DE": [{ x: 2, y: 1 }, { x: 5, y: 2 }]
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
  "#FF3B30": [{ x: 0, y: 1 }, { x: 1, y: 2 }],
  "#007AFF": [{ x: 1, y: 1 }, { x: 2, y: 3 }],
  "#34C759": [{ x: 3, y: 5 }, { x: 0, y: 2 }],
  "#FFCC00": [{ x: 5, y: 1 }, { x: 5, y: 4 }],
  "#AF52DE": [{ x: 6, y: 1 }, { x: 5, y: 5 }],
  "#FF9500": [{ x: 6, y: 2 }, { x: 0, y: 6 }]
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
  "#FF3B30": [{ x: 2, y: 4 }, { x: 2, y: 6 }],
  "#007AFF": [{ x: 1, y: 6 }, { x: 2, y: 2 }],
  "#34C759": [{ x: 3, y: 2 }, { x: 6, y: 6 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 5, y: 6 }],
  "#AF52DE": [{ x: 1, y: 1 }, { x: 0, y: 6 }],
  "#FF9500": [{ x: 0, y: 1 }, { x: 6, y: 3 }],
  "#5AC8FA": [{ x: 6, y: 4 }, { x: 2, y: 1 }]
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
  "#FF3B30": [{ x: 5, y: 5 }, { x: 5, y: 3 }],
  "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 2 }],
  "#34C759": [{ x: 4, y: 5 }, { x: 0, y: 0 }],
  "#FFCC00": [{ x: 6, y: 0 }, { x: 3, y: 6 }],
  "#AF52DE": [{ x: 0, y: 1 }, { x: 3, y: 1 }],
  "#FF9500": [{ x: 2, y: 1 }, { x: 2, y: 4 }],
  "#5AC8FA": [{ x: 2, y: 6 }, { x: 0, y: 2 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 3 }],
  "#007AFF": [{ x: 1, y: 5 }, { x: 6, y: 0 }],
  "#34C759": [{ x: 2, y: 5 }, { x: 6, y: 1 }],
  "#FFCC00": [{ x: 2, y: 3 }, { x: 6, y: 2 }],
  "#AF52DE": [{ x: 6, y: 3 }, { x: 6, y: 6 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 5, y: 1 }, { x: 6, y: 2 }],
  "#34C759": [{ x: 6, y: 1 }, { x: 0, y: 6 }],
  "#FFCC00": [{ x: 1, y: 3 }, { x: 3, y: 0 }],
  "#AF52DE": [{ x: 0, y: 4 }, { x: 3, y: 1 }],
  "#FF9500": [{ x: 0, y: 5 }, { x: 5, y: 5 }],
  "#5AC8FA": [{ x: 3, y: 2 }, { x: 5, y: 4 }]
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
  "#FF3B30": [{ x: 2, y: 0 }, { x: 6, y: 2 }],
  "#007AFF": [{ x: 1, y: 5 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 0, y: 5 }, { x: 4, y: 6 }],
  "#FFCC00": [{ x: 0, y: 4 }, { x: 5, y: 6 }],
  "#AF52DE": [{ x: 4, y: 5 }, { x: 3, y: 3 }],
  "#FF9500": [{ x: 1, y: 0 }, { x: 0, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 5 }, { x: 2, y: 6 }],
  "#007AFF": [{ x: 2, y: 5 }, { x: 5, y: 4 }],
  "#34C759": [{ x: 5, y: 2 }, { x: 2, y: 2 }],
  "#FFCC00": [{ x: 3, y: 3 }, { x: 5, y: 1 }],
  "#AF52DE": [{ x: 3, y: 1 }, { x: 0, y: 6 }]
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
  "#FF3B30": [{ x: 5, y: 5 }, { x: 1, y: 1 }],
  "#007AFF": [{ x: 4, y: 2 }, { x: 1, y: 6 }],
  "#34C759": [{ x: 2, y: 6 }, { x: 3, y: 2 }],
  "#FFCC00": [{ x: 2, y: 2 }, { x: 2, y: 4 }],
  "#AF52DE": [{ x: 1, y: 2 }, { x: 2, y: 5 }]
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
  "#FF3B30": [{ x: 1, y: 5 }, { x: 2, y: 6 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 6, y: 3 }],
  "#34C759": [{ x: 5, y: 1 }, { x: 5, y: 5 }],
  "#FFCC00": [{ x: 0, y: 0 }, { x: 4, y: 2 }],
  "#AF52DE": [{ x: 1, y: 2 }, { x: 5, y: 4 }],
  "#FF9500": [{ x: 3, y: 3 }, { x: 1, y: 6 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 5 }],
  "#007AFF": [{ x: 3, y: 2 }, { x: 4, y: 3 }],
  "#34C759": [{ x: 3, y: 3 }, { x: 6, y: 4 }],
  "#FFCC00": [{ x: 5, y: 6 }, { x: 6, y: 3 }],
  "#AF52DE": [{ x: 5, y: 3 }, { x: 6, y: 6 }]
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
  "#FF3B30": [{ x: 5, y: 6 }, { x: 4, y: 5 }],
  "#007AFF": [{ x: 6, y: 6 }, { x: 4, y: 4 }],
  "#34C759": [{ x: 3, y: 5 }, { x: 2, y: 4 }],
  "#FFCC00": [{ x: 3, y: 6 }, { x: 3, y: 3 }],
  "#AF52DE": [{ x: 1, y: 1 }, { x: 6, y: 4 }],
  "#FF9500": [{ x: 1, y: 2 }, { x: 5, y: 3 }],
  "#5AC8FA": [{ x: 1, y: 6 }, { x: 6, y: 1 }]
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
  "#FF3B30": [{ x: 1, y: 0 }, { x: 3, y: 0 }],
  "#007AFF": [{ x: 3, y: 2 }, { x: 0, y: 5 }],
  "#34C759": [{ x: 3, y: 1 }, { x: 0, y: 0 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 2, y: 5 }],
  "#AF52DE": [{ x: 2, y: 4 }, { x: 5, y: 1 }],
  "#FF9500": [{ x: 4, y: 4 }, { x: 0, y: 6 }]
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
  "#FF3B30": [{ x: 6, y: 0 }, { x: 0, y: 1 }],
  "#007AFF": [{ x: 1, y: 1 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 1, y: 3 }, { x: 1, y: 5 }],
  "#FFCC00": [{ x: 2, y: 5 }, { x: 5, y: 1 }],
  "#AF52DE": [{ x: 4, y: 5 }, { x: 6, y: 1 }],
  "#FF9500": [{ x: 2, y: 4 }, { x: 6, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 5, y: 6 }, { x: 6, y: 0 }],
  "#FFCC00": [{ x: 4, y: 0 }, { x: 2, y: 4 }],
  "#AF52DE": [{ x: 1, y: 5 }, { x: 3, y: 4 }],
  "#FF9500": [{ x: 2, y: 0 }, { x: 3, y: 3 }],
  "#5AC8FA": [{ x: 3, y: 2 }, { x: 4, y: 1 }]
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
  "#FF3B30": [{ x: 6, y: 1 }, { x: 4, y: 0 }],
  "#007AFF": [{ x: 5, y: 1 }, { x: 6, y: 2 }],
  "#34C759": [{ x: 1, y: 1 }, { x: 6, y: 6 }],
  "#FFCC00": [{ x: 2, y: 0 }, { x: 5, y: 6 }],
  "#AF52DE": [{ x: 6, y: 4 }, { x: 4, y: 1 }],
  "#FF9500": [{ x: 3, y: 0 }, { x: 5, y: 4 }],
  "#5AC8FA": [{ x: 2, y: 1 }, { x: 2, y: 4 }]
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
  "#FF3B30": [{ x: 1, y: 0 }, { x: 2, y: 6 }],
  "#007AFF": [{ x: 2, y: 0 }, { x: 3, y: 6 }],
  "#34C759": [{ x: 6, y: 2 }, { x: 5, y: 6 }],
  "#FFCC00": [{ x: 5, y: 5 }, { x: 4, y: 6 }],
  "#AF52DE": [{ x: 6, y: 1 }, { x: 2, y: 2 }],
  "#FF9500": [{ x: 5, y: 1 }, { x: 2, y: 3 }],
  "#5AC8FA": [{ x: 5, y: 2 }, { x: 2, y: 4 }]
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
  "#FF3B30": [{ x: 2, y: 1 }, { x: 2, y: 5 }],
  "#007AFF": [{ x: 4, y: 6 }, { x: 6, y: 6 }],
  "#34C759": [{ x: 3, y: 5 }, { x: 2, y: 0 }],
  "#FFCC00": [{ x: 3, y: 4 }, { x: 6, y: 0 }],
  "#AF52DE": [{ x: 4, y: 5 }, { x: 3, y: 3 }],
  "#FF9500": [{ x: 4, y: 4 }, { x: 5, y: 2 }]
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
  "#FF3B30": [{ x: 1, y: 0 }, { x: 3, y: 6 }],
  "#007AFF": [{ x: 5, y: 5 }, { x: 3, y: 4 }],
  "#34C759": [{ x: 1, y: 2 }, { x: 5, y: 4 }],
  "#FFCC00": [{ x: 1, y: 3 }, { x: 1, y: 5 }],
  "#AF52DE": [{ x: 2, y: 2 }, { x: 4, y: 2 }],
  "#FF9500": [{ x: 0, y: 0 }, { x: 5, y: 3 }]
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
  "#FF3B30": [{ x: 2, y: 2 }, { x: 3, y: 3 }],
  "#007AFF": [{ x: 3, y: 2 }, { x: 4, y: 4 }],
  "#34C759": [{ x: 5, y: 2 }, { x: 1, y: 5 }],
  "#FFCC00": [{ x: 3, y: 4 }, { x: 6, y: 2 }],
  "#AF52DE": [{ x: 3, y: 5 }, { x: 6, y: 3 }],
  "#FF9500": [{ x: 3, y: 6 }, { x: 6, y: 4 }]
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
  "#FF3B30": [{ x: 2, y: 0 }, { x: 3, y: 6 }],
  "#007AFF": [{ x: 6, y: 0 }, { x: 6, y: 4 }],
  "#34C759": [{ x: 3, y: 0 }, { x: 6, y: 5 }],
  "#FFCC00": [{ x: 4, y: 1 }, { x: 6, y: 6 }],
  "#AF52DE": [{ x: 2, y: 1 }, { x: 2, y: 4 }],
  "#FF9500": [{ x: 1, y: 1 }, { x: 3, y: 1 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 5, y: 1 }],
  "#007AFF": [{ x: 6, y: 0 }, { x: 0, y: 1 }],
  "#34C759": [{ x: 6, y: 1 }, { x: 0, y: 2 }],
  "#FFCC00": [{ x: 1, y: 3 }, { x: 5, y: 2 }],
  "#AF52DE": [{ x: 4, y: 2 }, { x: 2, y: 3 }],
  "#FF9500": [{ x: 1, y: 2 }, { x: 3, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 3, y: 2 }],
  "#007AFF": [{ x: 0, y: 1 }, { x: 0, y: 6 }],
  "#34C759": [{ x: 0, y: 2 }, { x: 1, y: 4 }],
  "#FFCC00": [{ x: 0, y: 3 }, { x: 5, y: 1 }],
  "#AF52DE": [{ x: 3, y: 5 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 1 }, { x: 6, y: 4 }],
  "#007AFF": [{ x: 4, y: 1 }, { x: 3, y: 3 }],
  "#34C759": [{ x: 1, y: 2 }, { x: 6, y: 5 }],
  "#FFCC00": [{ x: 1, y: 3 }, { x: 5, y: 5 }],
  "#AF52DE": [{ x: 4, y: 2 }, { x: 3, y: 1 }],
  "#FF9500": [{ x: 1, y: 1 }, { x: 5, y: 4 }]
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
  "#FF3B30": [{ x: 1, y: 1 }, { x: 1, y: 3 }],
  "#007AFF": [{ x: 0, y: 5 }, { x: 6, y: 5 }],
  "#34C759": [{ x: 2, y: 5 }, { x: 2, y: 3 }],
  "#FFCC00": [{ x: 3, y: 1 }, { x: 6, y: 0 }],
  "#AF52DE": [{ x: 5, y: 2 }, { x: 2, y: 4 }],
  "#FF9500": [{ x: 3, y: 3 }, { x: 3, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 1 }, { x: 4, y: 2 }],
  "#007AFF": [{ x: 5, y: 6 }, { x: 0, y: 6 }],
  "#34C759": [{ x: 6, y: 6 }, { x: 3, y: 5 }],
  "#FFCC00": [{ x: 3, y: 2 }, { x: 1, y: 4 }],
  "#AF52DE": [{ x: 0, y: 2 }, { x: 3, y: 3 }],
  "#FF9500": [{ x: 1, y: 2 }, { x: 5, y: 3 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 0, y: 3 }],
  "#007AFF": [{ x: 2, y: 3 }, { x: 3, y: 4 }],
  "#34C759": [{ x: 2, y: 4 }, { x: 4, y: 5 }],
  "#FFCC00": [{ x: 0, y: 1 }, { x: 1, y: 5 }],
  "#AF52DE": [{ x: 1, y: 1 }, { x: 4, y: 4 }],
  "#FF9500": [{ x: 3, y: 1 }, { x: 5, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 1, y: 3 }],
  "#007AFF": [{ x: 1, y: 0 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 0, y: 2 }, { x: 3, y: 6 }],
  "#FFCC00": [{ x: 3, y: 0 }, { x: 3, y: 2 }],
  "#AF52DE": [{ x: 2, y: 2 }, { x: 1, y: 4 }],
  "#FF9500": [{ x: 3, y: 3 }, { x: 1, y: 5 }]
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
  "#FF3B30": [{ x: 0, y: 0 }, { x: 4, y: 0 }],
  "#007AFF": [{ x: 0, y: 1 }, { x: 6, y: 0 }],
  "#34C759": [{ x: 6, y: 1 }, { x: 5, y: 2 }],
  "#FFCC00": [{ x: 4, y: 2 }, { x: 0, y: 3 }],
  "#AF52DE": [{ x: 1, y: 3 }, { x: 0, y: 5 }],
  "#FF9500": [{ x: 4, y: 5 }, { x: 0, y: 4 }],
  "#5AC8FA": [{ x: 6, y: 6 }, { x: 3, y: 3 }]
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
  "#FF3B30": [{ x: 6, y: 0 }, { x: 4, y: 1 }],
  "#007AFF": [{ x: 5, y: 1 }, { x: 0, y: 1 }],
  "#34C759": [{ x: 2, y: 0 }, { x: 1, y: 2 }],
  "#FFCC00": [{ x: 0, y: 0 }, { x: 3, y: 4 }],
  "#AF52DE": [{ x: 3, y: 3 }, { x: 4, y: 4 }]
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
  "#FF3B30": [{ x: 4, y: 1 }, { x: 2, y: 5 }],
  "#007AFF": [{ x: 5, y: 0 }, { x: 5, y: 5 }],
  "#34C759": [{ x: 6, y: 0 }, { x: 5, y: 6 }],
  "#FFCC00": [{ x: 3, y: 1 }, { x: 1, y: 4 }],
  "#AF52DE": [{ x: 0, y: 6 }, { x: 3, y: 3 }],
  "#FF9500": [{ x: 4, y: 2 }, { x: 3, y: 5 }]
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