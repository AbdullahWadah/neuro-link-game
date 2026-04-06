"use client";

import { Level } from '../types/game';

const CUSTOM_HINTS_KEY = 'neuronodes_custom_hints_v1';

/**
 * Saves a custom hint solution for a specific level.
 */
export const saveCustomHint = (level: Level) => {
  try {
    const stored = localStorage.getItem(CUSTOM_HINTS_KEY);
    const hints = stored ? JSON.parse(stored) : {};
    
    // Store the solutions indexed by level ID
    hints[level.id] = level.solutions;
    
    localStorage.setItem(CUSTOM_HINTS_KEY, JSON.stringify(hints));
    
    // Dispatch a custom event so other components (like the main game) know to refresh
    window.dispatchEvent(new CustomEvent('neuronodes_hints_updated', { 
      detail: { levelId: level.id } 
    }));
  } catch (error) {
    console.error("Failed to save custom hint:", error);
  }
};

/**
 * Retrieves all custom hints from storage.
 */
export const getAllCustomHints = (): Record<number, Record<string, any>> => {
  try {
    const stored = localStorage.getItem(CUSTOM_HINTS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Failed to load custom hints:", error);
    return {};
  }
};

/**
 * Retrieves a custom hint for a specific level.
 */
export const getCustomHintForLevel = (levelId: number): Record<string, any> | null => {
  const hints = getAllCustomHints();
  return hints[levelId] || null;
};