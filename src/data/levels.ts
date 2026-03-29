import { buildManualLevel } from './manualLevels';
import { Level, Point, Pair } from '../types/game';

const COLORS = [
  "#FF3B30", "#FF9500", "#FFCC00", "#4CD964", "#5AC8FA", 
  "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const generatePlayableLevel = (id: number): Level => {
  // Use the manual level builder logic
  const level = buildManualLevel(id);
  
  // If for some reason it failed to generate pairs, use a simple fallback
  if (level.pairs.length === 0) {
    return { 
      id, 
      size: level.size, 
      pairs: [{ color: COLORS[0], start: { x: 0, y: 0 }, end: { x: level.size - 1, y: level.size - 1 } }], 
      solutions: { [COLORS[0]]: [{ x: 0, y: 0 }, { x: level.size - 1, y: level.size - 1 }] } 
    };
  }
  
  return level;
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);
export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);