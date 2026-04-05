import { Level } from '../types/game';

const STORAGE_KEY = 'neuronodes_custom_hints';

export const saveCustomHint = (level: Level) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const customHints = saved ? JSON.parse(saved) : {};
    customHints[level.id.toString()] = level;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customHints));
  } catch (e) {
    console.error("Failed to save custom hint", e);
  }
};

export const getCustomHint = (id: number): Level | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const customHints = JSON.parse(saved);
      return customHints[id.toString()] || customHints[id] || null;
    }
  } catch (e) {}
  return null;
};

export const clearAllCustomHints = () => {
  localStorage.removeItem(STORAGE_KEY);
};