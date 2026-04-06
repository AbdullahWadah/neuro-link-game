"use client";

import { Level, Point } from '../types/game';
import { MANUAL_LEVELS } from './manualLevels';
import { getCustomHintForLevel } from '../utils/storage';

/**
 * Generates a playable level object, merging in any custom hints saved by the user.
 */
export const generatePlayableLevel = (id: number): Level => {
  // Find the base level data
  const baseLevel = MANUAL_LEVELS.find(l => l.id === id) || MANUAL_LEVELS[0];
  
  // Deep clone to avoid mutating the original data
  const level: Level = JSON.parse(JSON.stringify(baseLevel));
  
  // Check for custom hints in localStorage
  const customSolutions = getCustomHintForLevel(id);
  
  if (customSolutions) {
    // Merge custom solutions into the level object
    level.solutions = {
      ...(level.solutions || {}),
      ...customSolutions
    };
  }
  
  return level;
};

/**
 * Generates a level for the daily challenge based on a seed.
 */
export const generateDailyLevel = (seed: number): Level => {
  // Use the seed to pick a level from the manual list (1-120)
  const levelId = (seed % 120) + 1;
  return generatePlayableLevel(levelId);
};

export type { Level, Point };