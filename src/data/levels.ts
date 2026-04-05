import { getPlaceholderLevel, MANUAL_LEVELS } from './manualLevels';
import { Level } from '../types/game';
import { getCustomHint } from '../utils/storage';

/**
 * Generates or retrieves a level by ID.
 * Prioritizes custom hints saved by the user.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. ✅ Check for custom hint/solution first
  const custom = getCustomHint(id);
  if (custom) {
    return custom;
  }

  // 2. ✅ Built-in permanent level
  const builtIn = MANUAL_LEVELS.find(l => l.id === id);
  if (builtIn) {
    return builtIn;
  }

  // 3. ⚠️ Fallback
  return getPlaceholderLevel(id);
};

export const generateDailyLevel = (seed: number): Level =>
  generatePlayableLevel((seed % 120) + 1);

export const LEVELS = Array.from({ length: 120 }, (_, i) => i + 1);