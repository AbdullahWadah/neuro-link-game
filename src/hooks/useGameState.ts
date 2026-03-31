"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { generatePlayableLevel } from '../data/levels';
import { THEMES } from '../data/themes';
import { LevelScore, Point } from '../types/game';

export const useGameState = () => {
  // Helper to get from localStorage
  const getSaved = (key: string, fallback: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (saved === null) return fallback;
      try {
        return JSON.parse(saved);
      } catch {
        return saved;
      }
    } catch (e) {
      return fallback;
    }
  };

  // Helper to save to localStorage
  const saveToStorage = (key: string, value: any) => {
    try {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to save ${key}`, e);
    }
  };

  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const val = parseInt(getSaved('neurolinks_unlocked', '1'));
    return isNaN(val) ? 1 : Math.max(1, Math.min(120, val));
  });

  const [currentLevelId, setCurrentLevelId] = useState(() => {
    const val = parseInt(getSaved('neurolinks_level', '1'));
    return isNaN(val) ? 1 : Math.max(1, Math.min(120, val));
  });

  const [levelScores, setLevelScores] = useState<Record<number, LevelScore>>(() => 
    getSaved('neurolinks_scores', {})
  );

  const [savedPaths, setSavedPaths] = useState<Record<number, Record<string, Point[]>>>(() => 
    getSaved('neurolinks_saved_paths', {})
  );

  const [isMuted, setIsMuted] = useState(() => getSaved('neurolinks_muted', false));
  const [isMusicMuted, setIsMusicMuted] = useState(() => getSaved('neurolinks_music_muted', false));
  const [isHapticEnabled, setIsHapticEnabled] = useState(() => getSaved('neurolinks_haptic', true));
  const [isColorblindMode, setIsColorblindMode] = useState(() => getSaved('neurolinks_colorblind', false));
  const [currentThemeId, setCurrentThemeId] = useState(() => getSaved('neurolinks_theme', 'midnight'));
  const [hints, setHints] = useState(() => parseInt(getSaved('neurolinks_hints', '2')));
  const [isAdFree, setIsAdFree] = useState(() => getSaved('neurolinks_adfree', false));
  const [lastDailyCompleted, setLastDailyCompleted] = useState(() => getSaved('neurolinks_last_daily', ''));
  const [resetKey, setResetKey] = useState(0);

  // Immediate persistence on state changes
  useEffect(() => saveToStorage('neurolinks_level', currentLevelId), [currentLevelId]);
  useEffect(() => saveToStorage('neurolinks_unlocked', unlockedLevel), [unlockedLevel]);
  useEffect(() => saveToStorage('neurolinks_scores', levelScores), [levelScores]);
  useEffect(() => saveToStorage('neurolinks_saved_paths', savedPaths), [savedPaths]);
  useEffect(() => saveToStorage('neurolinks_muted', isMuted), [isMuted]);
  useEffect(() => saveToStorage('neurolinks_music_muted', isMusicMuted), [isMusicMuted]);
  useEffect(() => saveToStorage('neurolinks_haptic', isHapticEnabled), [isHapticEnabled]);
  useEffect(() => saveToStorage('neurolinks_colorblind', isColorblindMode), [isColorblindMode]);
  useEffect(() => saveToStorage('neurolinks_theme', currentThemeId), [currentThemeId]);
  useEffect(() => saveToStorage('neurolinks_hints', hints), [hints]);
  useEffect(() => saveToStorage('neurolinks_adfree', isAdFree), [isAdFree]);
  useEffect(() => saveToStorage('neurolinks_last_daily', lastDailyCompleted), [lastDailyCompleted]);

  const currentLevel = useMemo(() => generatePlayableLevel(currentLevelId), [currentLevelId, resetKey]);
  const currentTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  const savePaths = useCallback((paths: Record<string, Point[]>) => {
    setSavedPaths(prev => ({
      ...prev,
      [currentLevelId]: paths
    }));
  }, [currentLevelId]);

  const completeLevel = useCallback((isPerfect: boolean, timeTaken: number = 0) => {
    const stars = isPerfect ? 3 : 1;
    
    setLevelScores(prev => ({
      ...prev,
      [currentLevelId]: {
        levelId: currentLevelId,
        stars: Math.max(stars, prev[currentLevelId]?.stars || 0),
        bestTime: prev[currentLevelId]?.bestTime ? Math.min(timeTaken, prev[currentLevelId].bestTime) : timeTaken
      }
    }));

    // Clear saved paths for this level as it's completed
    setSavedPaths(prev => {
      const next = { ...prev };
      delete next[currentLevelId];
      return next;
    });

    if (currentLevelId === unlockedLevel && unlockedLevel < 120) {
      setUnlockedLevel(prev => prev + 1);
    }
  }, [currentLevelId, unlockedLevel]);

  const completeDaily = (dateStr: string) => {
    setLastDailyCompleted(dateStr);
  };

  const goToLevel = (id: number) => {
    if (id <= unlockedLevel) {
      setCurrentLevelId(id);
      setResetKey(0);
    }
  };

  const useHint = () => {
    if (hints > 0) {
      setHints(prev => prev - 1);
      return true;
    }
    return false;
  };

  const addHints = (amount: number) => {
    setHints(prev => prev + amount);
  };

  const purchaseNoAds = () => {
    setIsAdFree(true);
    setHints(prev => prev + 10);
  };

  const toggleMute = () => setIsMuted(prev => !prev);
  const toggleMusicMute = () => setIsMusicMuted(prev => !prev);
  const toggleHaptic = () => setIsHapticEnabled(prev => !prev);
  const toggleColorblindMode = () => setIsColorblindMode(prev => !prev);
  const setTheme = (id: string) => setCurrentThemeId(id);

  const resetLevel = () => {
    setSavedPaths(prev => {
      const next = { ...prev };
      delete next[currentLevelId];
      return next;
    });
    setResetKey(prev => prev + 1);
  };

  return {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    levelScores,
    savedPaths,
    isMuted,
    isMusicMuted,
    isHapticEnabled,
    isColorblindMode,
    currentTheme,
    hints,
    isAdFree,
    lastDailyCompleted,
    resetKey,
    completeLevel,
    completeDaily,
    goToLevel,
    savePaths,
    toggleMute,
    toggleMusicMute,
    toggleHaptic,
    toggleColorblindMode,
    setTheme,
    useHint,
    addHints,
    purchaseNoAds,
    resetLevel
  };
};