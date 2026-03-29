import { getCustomLevel, getPlaceholderLevel } from './manualLevels';
import { Level } from '../types/game';

/**
 * Generates or retrieves a level by ID.
 * This is the ONLY way the game gets levels.
 * It will ALWAYS check your custom designs first.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. Check for your custom level first
  const custom = getCustomLevel(id);
  if (custom) {
    return custom;
  }

  // 2. If you haven't made this level yet, show a placeholder
  // This makes it obvious which levels still need to be designed.
  return getPlaceholderLevel(id);
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);

// Define the range of levels available in the game
export const LEVELS = Array.from({ length: 120 }, (_, i) => i + 1);