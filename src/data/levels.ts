import { getPlaceholderLevel, MANUAL_LEVELS } from './manualLevels';
import { Level } from '../types/game';
import { getCustomHint } from '../utils/storage';

/**
 * Generates or retrieves a level by ID.
 * ALWAYS checks permanent storage for custom user-defined hints first.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. Check for a permanently saved custom hint first
  const custom = getCustomHint(id);
  if (custom && custom.solutions && Object.keys(custom.solutions).length > 0) {
    return custom;
  }

  // 2. Fallback to the built-in permanent levels (1-120)
  const builtIn = MANUAL_LEVELS.find(l => l.id === id);
  if (builtIn) {
    return builtIn;
  }

  // 3. Emergency fallback for undefined levels
  return getPlaceholderLevel(id);
};

export const generateDailyLevel = (seed: number): Level =>
  generatePlayableLevel((seed % 120) + 1);

export const LEVELS = Array.from({ length: 120 }, (_, i) => i + 1);