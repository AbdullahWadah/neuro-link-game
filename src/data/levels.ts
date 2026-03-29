import { MANUAL_LEVELS } from './manualLevels';
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
  const manualLevel = MANUAL_LEVELS.find(l => l.id === id);
  if (manualLevel) return manualLevel;

  let size = 5;
  let targetPairs = 5;
  if (id >= 2 && id <= 20) { size = 5; targetPairs = 4; }
  else if (id <= 50) { size = 6; targetPairs = 5; }
  else if (id <= 80) { size = 7; targetPairs = 6; }
  else { size = 8; targetPairs = 7; }

  const baseSeed = id * 987.654 + 123.456;
  let currentSeed = baseSeed;
  const nextRng = () => {
    currentSeed = seededRandom(currentSeed) * 1000;
    return currentSeed / 1000;
  };

  const generate = (): Level | null => {
    const grid: (string | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const paths: Point[][] = [];
    const levelColors = [...COLORS].sort(() => nextRng() - 0.5);

    for (let p = 0; p < targetPairs; p++) {
      let pairSuccess = false;
      let pairAttempts = 0;
      while (!pairSuccess && pairAttempts < 100) {
        pairAttempts++;
        const emptyCells: Point[] = [];
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            if (!grid[y][x]) emptyCells.push({ x, y });
          }
        }
        if (emptyCells.length < 2) break;
        const start = emptyCells[Math.floor(nextRng() * emptyCells.length)];
        const currentPath: Point[] = [start];
        const color = levelColors[p % levelColors.length];
        const tempGridPoints: Point[] = [start];
        grid[start.y][start.x] = color;
        let stuck = false;
        while (!stuck) {
          const last = currentPath[currentPath.length - 1];
          const neighbors = [{ x: last.x + 1, y: last.y }, { x: last.x - 1, y: last.y }, { x: last.x, y: last.y + 1 }, { x: last.x, y: last.y - 1 }]
            .filter(n => n.x >= 0 && n.x < size && n.y >= 0 && n.y < size && !grid[n.y][n.x]);
          if (neighbors.length === 0) stuck = true;
          else {
            neighbors.sort((a, b) => {
              const countOccupied = (pt: Point) => [{ x: pt.x + 1, y: pt.y }, { x: pt.x - 1, y: pt.y }, { x: pt.x, y: pt.y + 1 }, { x: pt.x, y: pt.y - 1 }]
                .filter(n => n.x < 0 || n.x >= size || n.y < 0 || n.y >= size || grid[n.y][n.x] !== null).length;
              return countOccupied(b) - countOccupied(a);
            });
            const next = neighbors[0];
            currentPath.push(next);
            tempGridPoints.push(next);
            grid[next.y][next.x] = color;
          }
        }
        if (currentPath.length >= 3) {
          paths.push(currentPath);
          pairSuccess = true;
        } else {
          tempGridPoints.forEach(pt => grid[pt.y][pt.x] = null);
        }
      }
    }
    if (paths.length < targetPairs - 1) return null;
    const pairs: Pair[] = paths.map((path, i) => ({ color: levelColors[i % levelColors.length], start: path[0], end: path[path.length - 1] }));
    const solutions: Record<string, Point[]> = {};
    paths.forEach((path, i) => { solutions[levelColors[i % levelColors.length]] = path; });
    return { id, size, pairs, solutions };
  };

  let level: Level | null = null;
  let attempts = 0;
  while (!level && attempts < 1000) { level = generate(); attempts++; }
  return level || { id, size, pairs: [{ color: COLORS[0], start: { x: 0, y: 0 }, end: { x: size - 1, y: size - 1 } }], solutions: {} };
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);
export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);