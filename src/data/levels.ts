import { MANUAL_LEVELS, getCustomLevel } from './manualLevels';
import { Level } from '../types/game';

/**
 * Generates or retrieves a level by ID.
 * Prioritizes custom levels from the editor, then manual definitions, then fallbacks.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. Check for a custom level designed in the editor first
  const custom = getCustomLevel(id);
  if (custom) {
    console.log(`Loading custom level ${id}`);
    return custom;
  }

  // 2. Fallback to the pre-generated levels from manualLevels.ts
  const level = MANUAL_LEVELS[id - 1];
  
  // 3. Final fallback if the level ID is out of bounds
  if (!level) {
    console.warn(`Level ${id} not found, falling back to level 1`);
    return MANUAL_LEVELS[0];
  }
  
  return level;
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);
export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);