import { useState, useEffect } from 'react';
import { LEVELS, Level } from '../data/levels';
import { THEMES, Theme } from '../data/themes';

export const useGameState = () => {
  const [currentLevelId, setCurrentLevelId] = useState(() => {
    const saved = localStorage.getItem('neurolinks_level');
    return saved ? parseInt(saved) : 1;
  });
  
  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const saved = localStorage.getItem('neurolinks_unlocked');
    return saved ? parseInt(saved) : 1;
  });

  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('neurolinks_muted') === 'true';
  });

  const [isColorblindMode, setIsColorblindMode] = useState(() => {
    return localStorage.getItem('neurolinks_colorblind') === 'true';
  });

  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('neurolinks_theme') || 'zen';
  });

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('neurolinks_stats');
    return saved ? JSON.parse(saved) : { totalConnections: 0, levelsCompleted: 0 };
  });

  useEffect(() => {
    localStorage.setItem('neurolinks_level', currentLevelId.toString());
  }, [currentLevelId]);

  useEffect(() => {
    localStorage.setItem('neurolinks_unlocked', unlockedLevel.toString());
  }, [unlockedLevel]);

  useEffect(() => {
    localStorage.setItem('neurolinks_muted', isMuted.toString());
  }, [isMuted]);

  useEffect(() => {
    localStorage.setItem('neurolinks_colorblind', isColorblindMode.toString());
  }, [isColorblindMode]);

  useEffect(() => {
    localStorage.setItem('neurolinks_theme', currentThemeId);
  }, [currentThemeId]);

  useEffect(() => {
    localStorage.setItem('neurolinks_stats', JSON.stringify(stats));
  }, [stats]);

  const currentLevel = LEVELS.find(l => l.id === currentLevelId) || LEVELS[0];
  const currentTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  const completeLevel = () => {
    setStats(prev => ({
      ...prev,
      levelsCompleted: prev.levelsCompleted + 1,
      totalConnections: prev.totalConnections + currentLevel.pairs.length
    }));

    if (currentLevelId === unlockedLevel && unlockedLevel < 100) {
      setUnlockedLevel(prev => prev + 1);
    }
    if (currentLevelId < 100) {
      setCurrentLevelId(prev => prev + 1);
    }
  };

  const goToLevel = (id: number) => {
    if (id <= unlockedLevel) {
      setCurrentLevelId(id);
    }
  };

  const toggleMute = () => setIsMuted(prev => !prev);
  const toggleColorblindMode = () => setIsColorblindMode(prev => !prev);
  const setTheme = (id: string) => setCurrentThemeId(id);

  return {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    isMuted,
    isColorblindMode,
    currentTheme,
    stats,
    completeLevel,
    goToLevel,
    toggleMute,
    toggleColorblindMode,
    setTheme,
    resetLevel: () => setCurrentLevelId(currentLevelId)
  };
};