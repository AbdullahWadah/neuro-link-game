import { Level } from '../types/game';

function createPath(size: number, occupied: Set<string>): Point[] {
  const path: Point[] = [];
  const key = (x: number, y: number) => `${x},${y}`;

  let x = Math.floor(Math.random() * size);
  let y = Math.floor(Math.random() * size);

  while (occupied.has(key(x, y))) {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  }

  path.push({ x, y });
  occupied.add(key(x, y));

  const maxSteps = size * 3;

  for (let i = 0; i < maxSteps; i++) {
    const dirs = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ].sort(() => Math.random() - 0.5);

    let moved = false;

    for (const d of dirs) {
      const nx = x + d.dx;
      const ny = y + d.dy;

      if (
        nx >= 0 && ny >= 0 &&
        nx < size && ny < size &&
        !occupied.has(key(nx, ny))
      ) {
        x = nx;
        y = ny;
        path.push({ x, y });
        occupied.add(key(nx, ny));
        moved = true;
        break;
      }
    }

    if (!moved) break;
  }

  return path;
}
// Manual levels are currently disabled to use the dynamic generator in levels.ts
export const MANUAL_LEVELS: Level[] = [];