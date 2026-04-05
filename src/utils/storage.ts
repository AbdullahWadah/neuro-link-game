import { Level } from '../types/game';

const STORAGE_KEY = 'neuronodes_custom_hints_v1';

/**
 * Saves a level's solution permanently to local storage.
 */
export const saveCustomHint = (level: Level) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const customHints = saved ? JSON.parse(saved) : {};
    
    // We store the entire level object to ensure consistency
    customHints[level.id.toString()] = {
      ...level,
      // Ensure solutions are explicitly included
      solutions: level.solutions 
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customHints));
    console.log(`Saved custom hint for level ${level.id}`);
  } catch (e) {
    console.error("Failed to save custom hint to permanent storage", e);
  }
};

/**
 * Retrieves a custom hint if it exists in permanent storage.
 */
export const getCustomHint = (id: number): Level | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const customHints = JSON.parse(saved);
      const custom = customHints[id.toString()] || customHints[id];
      return custom || null;
    }
  } catch (e) {
    console.error("Failed to read custom hints from storage", e);
  }
  return null;
};

/**
 * Clears all custom hints and reverts to defaults.
 */
export const clearAllCustomHints = () => {
  localStorage.removeItem(STORAGE_KEY);
};