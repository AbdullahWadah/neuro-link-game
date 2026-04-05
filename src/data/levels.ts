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
  // For now, we'll return a mock level structure that matches the game's needs
  const size = id <= 20 ? 5 : id <= 50 ? 6 : id <= 80 ? 7 : 8;
  
  // Mock level data - in a real app, this would be a lookup
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