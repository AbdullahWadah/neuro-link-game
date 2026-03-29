import { buildManualLevel } from './manualLevels';
import { Level, Point, Pair } from '../types/game';

const COLORS = [
  "#FF3B30", "#FF9500", "#FFCC00", "#4CD964", "#5AC8FA", 
  "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#A2845E"
];

export const generatePlayableLevel = (id: number): Level => {
  // Generate the level using the manual builder logic
  const level = buildManualLevel(id);
  
  // Fallback if generation failed
  if (!level || level.pairs.length === 0) {
    return { 
      id, 
      size: 5, 
      pairs: [{ color: COLORS[0], start: { x: 0, y: 0 }, end: { x: 4, y: 4 } }], 
      solutions: { [COLORS[0]]: [{ x: 0, y: 0 }, { x: 4, y: 4 }] } 
    };
  }
  
  return level;
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);
export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);