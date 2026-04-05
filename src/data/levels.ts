import { getCustomLevel, getPlaceholderLevel, MANUAL_LEVELS } from './manualLevels';
import { Level } from '../types/game';

/**
 * Generates or retrieves a level by ID.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. ✅ Custom level (from editor)
  const custom = getCustomLevel(id);
  if (custom) {
    return custom;
  }

  // 2. ✅ Built-in permanent level
  const builtIn = MANUAL_LEVELS[id - 1];
  if (builtIn) {
    return builtIn;
  }

  // 3. ⚠️ Fallback (should rarely happen)
  return getPlaceholderLevel(id);
};

export const generateDailyLevel = (seed: number): Level =>
  generatePlayableLevel((seed % 120) + 1);

export const LEVELS = Array.from({ length: 120 }, (_, i) => i + 1);