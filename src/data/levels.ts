import { STATIC_LEVELS } from './levelData';

export interface Point {
  x: number;
  y: number;
}

export interface Pair {
  color: string;
  start: Point;
  end: Point;
}

export interface Level {
  id: number;
  size: number;
  pairs: Pair[];
  solutions: Record<string, Point[]>;
}

export const generatePlayableLevel = (id: number): Level => {
  // Find the level in our static database
  const level = STATIC_LEVELS.find(l => l.id === id);
  
  if (level) {
    return level;
  }

  // Fallback if level ID is out of range (should not happen with 100 levels)
  return STATIC_LEVELS[0];
};

export const generateDailyLevel = (seed: number): Level => {
  const levelId = (seed % 100) + 1;
  return generatePlayableLevel(levelId);
};

export const LEVELS = new Array(101).fill(null).map((_, i) => i === 0 ? null : i);