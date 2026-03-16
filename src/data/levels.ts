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
}

const COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD", 
  "#D4A5A5", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71"
];

// Helper to generate levels with increasing difficulty
const generateLevels = (): Level[] => {
  const levels: Level[] = [];
  
  for (let i = 1; i <= 100; i++) {
    let size = 3;
    if (i > 10) size = 4;
    if (i > 30) size = 5;
    if (i > 60) size = 6;
    if (i > 85) size = 7;

    const pairCount = Math.min(size + Math.floor(i / 20), COLORS.length);
    const pairs: Pair[] = [];
    const usedPoints = new Set<string>();

    const getRandomPoint = () => {
      let p;
      do {
        p = { x: Math.floor(Math.random() * size), y: Math.floor(Math.random() * size) };
      } while (usedPoints.has(`${p.x},${p.y}`));
      usedPoints.add(`${p.x},${p.y}`);
      return p;
    };

    for (let j = 0; j < pairCount; j++) {
      pairs.push({
        color: COLORS[j],
        start: getRandomPoint(),
        end: getRandomPoint(),
      });
    }

    levels.push({ id: i, size, pairs });
  }
  return levels;
};

export const LEVELS = generateLevels();