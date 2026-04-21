"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { generatePlayableLevel } from '../data/levels';
import { THEMES } from '../data/themes';
import { LevelScore, Point } from '../types/game';

export const useGameState = () => {
  const getSaved = (key: string, fallback: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (saved === null) return fallback;
      try {
        return JSON.parse(saved);
      } catch {
        return saved;
      }
    } catch {
      return fallback;
    }
  };

  const saveToStorage = (key: string, value: any) => {
    try {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save ${key}`, error);
    }
  };

  const savedPathsPersistTimeoutRef = useRef<number | null>(null);

  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const val = parseInt(getSaved('neuronodes_unlocked', '1'));
    return isNaN(val) ? 1 : Math.max(1, Math.min(120, val));
  });

  const [currentLevelId, setCurrentLevelId] = useState(() => {
    const val = parseInt(getSaved('neuronodes_level', '1'));
    return isNaN(val) ? 1 : Math.max(1, Math.min(120, val));
  });

  const [levelScores, setLevelScores] = useState<Record<number, LevelScore>>(() => getSaved('neuronodes_scores', {}));
  const [savedPaths, setSavedPaths] = useState<Record<number, Record<string, Point[]>>>(() => getSaved('neuronodes_saved_paths', {}));
  const [isMuted, setIsMuted] = useState(() => getSaved('neuronodes_muted', false));
  const [isMusicMuted, setIsMusicMuted] = useState(() => getSaved('neuronodes_music_muted', false));
  const [isHapticEnabled, setIsHapticEnabled] = useState(() => getSaved('neuronodes_haptic', true));
  const [isColorblindMode, setIsColorblindMode] = useState(() => getSaved('neuronodes_colorblind', false));
  const [currentThemeId, setCurrentThemeId] = useState(() => getSaved('neuronodes_theme', 'midnight'));
  const [isAdFree, setIsAdFree] = useState(() => getSaved('neuronodes_adfree', false));
  const [lastDailyCompleted, setLastDailyCompleted] = useState(() => getSaved('neuronodes_last_daily', ''));
  const [hintsRemaining, setHintsRemaining] = useState(() => {
    const val = parseInt(getSaved('neuronodes_hints_remaining', '2'));
    return Number.isNaN(val) ? 2 : Math.max(0, val);
  });
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => saveToStorage('neuronodes_level', currentLevelId), [currentLevelId]);
  useEffect(() => saveToStorage('neuronodes_unlocked', unlockedLevel), [unlockedLevel]);
  useEffect(() => saveToStorage('neuronodes_scores', levelScores), [levelScores]);
  useEffect(() => saveToStorage('neuronodes_muted', isMuted), [isMuted]);
  useEffect(() => saveToStorage('neuronodes_music_muted', isMusicMuted), [isMusicMuted]);
  useEffect(() => saveToStorage('neuronodes_haptic', isHapticEnabled), [isHapticEnabled]);
  useEffect(() => saveToStorage('neuronodes_colorblind', isColorblindMode), [isColorblindMode]);
  useEffect(() => saveToStorage('neuronodes_theme', currentThemeId), [currentThemeId]);
  useEffect(() => saveToStorage('neuronodes_adfree', isAdFree), [isAdFree]);
  useEffect(() => saveToStorage('neuronodes_last_daily', lastDailyCompleted), [lastDailyCompleted]);
  useEffect(() => saveToStorage('neuronodes_hints_remaining', hintsRemaining), [hintsRemaining]);

  useEffect(() => {
    if (savedPathsPersistTimeoutRef.current) {
      window.clearTimeout(savedPathsPersistTimeoutRef.current);
    }

    savedPathsPersistTimeoutRef.current = window.setTimeout(() => {
      saveToStorage('neuronodes_saved_paths', savedPaths);
      savedPathsPersistTimeoutRef.current = null;
    }, 180);

    return () => {
      if (savedPathsPersistTimeoutRef.current) {
        window.clearTimeout(savedPathsPersistTimeoutRef.current);
      }
    };
  }, [savedPaths]);

  const currentLevel = useMemo(() => generatePlayableLevel(currentLevelId), [currentLevelId, resetKey]);
  const currentTheme = THEMES.find(theme => theme.id === currentThemeId) || THEMES[0];

  const savePaths = useCallback((paths: Record<string, Point[]>) => {
    setSavedPaths(prev => ({
      ...prev,
      [currentLevelId]: paths,
    }));
  }, [currentLevelId]);

  const completeLevel = useCallback((isPerfect: boolean, timeTaken = 0) => {
    const stars = isPerfect ? 3 : 1;

    setLevelScores(prev => ({
      ...prev,
      [currentLevelId]: {
        levelId: currentLevelId,
        stars: Math.max(stars, prev[currentLevelId]?.stars || 0),
        bestTime: prev[currentLevelId]?.bestTime ? Math.min(timeTaken, prev[currentLevelId].bestTime) : timeTaken,
      },
    }));

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
      setResetKey(prev => prev + 1);
    }
  };

  const purchaseNoAds = () => {
    setIsAdFree(true);
  };

  const consumeHint = useCallback(() => {
    if (hintsRemaining <= 0) {
      return false;
    }

    setHintsRemaining(prev => Math.max(0, prev - 1));
    return true;
  }, [hintsRemaining]);

  const grantHints = useCallback((count: number) => {
    setHintsRemaining(prev => Math.max(0, prev + count));
  }, []);

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

  const refreshLevelData = () => {
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
    isAdFree,
    lastDailyCompleted,
    hintsRemaining,
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
    purchaseNoAds,
    consumeHint,
    grantHints,
    resetLevel,
    refreshLevelData,
  };
};
