import { getCustomSolutions } from './manualLevels';

export interface Point {
  x: number;
  y: number;
}

export interface NeuralPair {
  color: string;
  start: Point;
  end: Point;
}

export interface Level {
  id: number;
  size: number;
  pairs: NeuralPair[];
  solutions: Record<string, Point[]>;
}

// Helper to generate a level (simplified for this example, usually would have a large dataset)
export const generatePlayableLevel = (id: number): Level => {
  // This would normally fetch from a large array of levels
  const size = id <= 20 ? 5 : id <= 50 ? 6 : id <= 80 ? 7 : 8;
  
  const baseLevel: Level = {
    id,
    size,
    pairs: [
      { color: '#3b82f6', start: { x: 0, y: 0 }, end: { x: size - 1, y: size - 1 } },
      { color: '#ef4444', start: { x: size - 1, y: 0 }, end: { x: 0, y: size - 1 } },
    ],
    solutions: {}
  };

  // Merge with custom solutions if they exist
  const customSolutions = getCustomSolutions(id);
  if (customSolutions) {
    baseLevel.solutions = customSolutions;
  }

  return baseLevel;
};

// Generate a daily level based on a seed
export const generateDailyLevel = (seed: number): Level => {
  // Use seed to determine size (5-8)
  const size = 5 + (seed % 4);
  
  return {
    id: seed,
    size,
    pairs: [
      { color: '#10b981', start: { x: 1, y: 1 }, end: { x: size - 2, y: size - 2 } },
      { color: '#f59e0b', start: { x: size - 2, y: 1 }, end: { x: 1, y: size - 2 } },
    ],
    solutions: {}
  };
};