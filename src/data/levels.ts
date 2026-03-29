import { MANUAL_LEVELS, getCustomLevel } from './manualLevels';
import { Level } from '../types/game';

/**
 * Generates or retrieves a level by ID.
 * Always checks for your custom designs first.
 */
export const generatePlayableLevel = (id: number): Level => {
  // 1. Check for your custom level first
  const custom = getCustomLevel(id);
  if (custom) {
    return custom;
  }

  // 2. Fallback to a basic procedural level if you haven't designed this ID yet
  const fallback = MANUAL_LEVELS[id - 1];
  return fallback || MANUAL_LEVELS[0];
};

export const generateDailyLevel = (seed: number): Level => generatePlayableLevel((seed % 120) + 1);
export const LEVELS = new Array(121).fill(null).map((_, i) => i === 0 ? null : i);