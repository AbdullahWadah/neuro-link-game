import { Level, Point } from './levels';

const STORAGE_KEY = 'neural_flow_custom_hints';

export const createLevel = (id: number, size: number, paths: Point[][]): Level => {
  const solutions: Record<string, Point[]> = {};
  const pairs = paths.map((path, i) => {
    const color = [
      "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
      "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
    ][i % 8];
    
    solutions[color] = path;
    
    return {
      color,
      start: path[0],
      end: path[path.length - 1]
    };
  });

  return {
    id,
    size,
    pairs,
    solutions
  };
};

export const saveCustomLevelToStorage = (level: Level) => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const customHints: Record<number, any> = existingData ? JSON.parse(existingData) : {};
    
    customHints[level.id] = level.solutions;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customHints));
    
    // Also save the full level structure for the editor if needed
    const levelsKey = 'neuronodes_custom_levels';
    const existingLevels = localStorage.getItem(levelsKey);
    const customLevels = existingLevels ? JSON.parse(existingLevels) : {};
    customLevels[level.id] = level;
    localStorage.setItem(levelsKey, JSON.stringify(customLevels));
  } catch (error) {
    console.error("Failed to save custom level:", error);
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

export const getCustomLevel = (levelId: number): Level | null => {
  try {
    const levelsKey = 'neuronodes_custom_levels';
    const existingLevels = localStorage.getItem(levelsKey);
    if (!existingLevels) return null;
    
    const customLevels = JSON.parse(existingLevels);
    return customLevels[levelId] || null;
  } catch (error) {
    return null;
  }
};

export const clearAllCustomLevels = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('neuronodes_custom_levels');
};