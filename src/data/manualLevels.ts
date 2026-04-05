import { Level } from './levels';

const STORAGE_KEY = 'neural_flow_custom_hints';

export const saveCustomLevelToStorage = (level: Level) => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const customHints: Record<number, any> = existingData ? JSON.parse(existingData) : {};
    
    // Store only the solutions for the level ID
    customHints[level.id] = level.solutions;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customHints));
  } catch (error) {
    console.error("Failed to save custom hint:", error);
  }
};

export const getCustomSolutions = (levelId: number): Record<string, any> | null => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    if (!existingData) return null;
    
    const customHints = JSON.parse(existingData);
    return customHints[levelId] || null;
  } catch (error) {
    return null;
  }
};