import { Level } from '../types/game';

// Using a single, consistent key for all custom level/hint data
const STORAGE_KEY = 'neuronodes_custom_data_v1';

/**
 * Saves a level's solution permanently to local storage.
 */
export const saveCustomHint = (level: Level) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const customData = saved ? JSON.parse(saved) : {};
    
    // Store the entire level object including the new solutions
    customData[level.id.toString()] = {
      ...level,
      solutions: level.solutions 
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customData));
    console.log(`Permanently saved custom hint for level ${level.id}`);
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
      const customData = JSON.parse(saved);
      const custom = customData[id.toString()] || customData[id];
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