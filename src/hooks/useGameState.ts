import { useState, useEffect } from 'react';
import { LEVELS, Level } from '../data/levels';
import { THEMES, Theme } from '../data/themes';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface LevelScore {
  levelId: number;
  stars: number;
  bestTime: number;
}

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_link', title: 'First Link', description: 'Connect your first pair', icon: '🔗', unlocked: false },
  { id: 'grid_master', title: 'Grid Master', description: 'Fill 100% of the grid', icon: '🎨', unlocked: false },
  { id: 'theme_explorer', title: 'Explorer', description: 'Try a different theme', icon: '🌈', unlocked: false },
  { id: 'century', title: 'Century', description: 'Reach level 100', icon: '💯', unlocked: false }
];

export const useGameState = () => {
  const [currentLevelId, setCurrentLevelId] = useState(() => {
    const saved = localStorage.getItem('neurolinks_level');
    return saved ? parseInt(saved) : 1;
  });
  
  const [unlockedLevel, setUnlockedLevel] = useState(() => {
    const saved = localStorage.getItem('neurolinks_unlocked');
    return saved ? parseInt(saved) : 1;
  });

  const [levelScores, setLevelScores] = useState<Record<number, LevelScore>>(() => {
    const saved = localStorage.getItem('neurolinks_scores');
    return saved ? JSON.parse(saved) : {};
  });

  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('neurolinks_muted') === 'true';
  });

  const [isMusicMuted, setIsMusicMuted] = useState(() => {
    return localStorage.getItem('neurolinks_music_muted') === 'true';
  });

  const [isHapticEnabled, setIsHapticEnabled] = useState(() => {
    const saved = localStorage.getItem('neurolinks_haptic');
    return saved === null ? true : saved === 'true';
  });

  const [isColorblindMode, setIsColorblindMode] = useState(() => {
    return localStorage.getItem('neurolinks_colorblind') === 'true';
  });

  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('neurolinks_theme') || 'midnight';
  });

  const [hints, setHints] = useState(() => {
    const saved = localStorage.getItem('neurolinks_hints');
    return saved ? parseInt(saved) : 2;
  });

  const [isAdFree, setIsAdFree] = useState(() => {
    return localStorage.getItem('neurolinks_adfree') === 'true';
  });

  const [lastDailyCompleted, setLastDailyCompleted] = useState(() => {
    return localStorage.getItem('neurolinks_last_daily') || '';
  });

  const [resetKey, setResetKey] = useState(0);

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('neurolinks_stats');
    if (!saved) return { 
      totalConnections: 0, 
      levelsCompleted: 0,
      perfectClears: 0,
      achievements: [...DEFAULT_ACHIEVEMENTS]
    };
    
    try {
      const parsed = JSON.parse(saved);
      if (!parsed.achievements || !Array.isArray(parsed.achievements)) {
        parsed.achievements = [...DEFAULT_ACHIEVEMENTS];
      }
      return parsed;
    } catch (e) {
      return { 
        totalConnections: 0, 
        levelsCompleted: 0,
        perfectClears: 0,
        achievements: [...DEFAULT_ACHIEVEMENTS]
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('neurolinks_level', currentLevelId.toString());
  }, [currentLevelId]);

  useEffect(() => {
    localStorage.setItem('neurolinks_unlocked', unlockedLevel.toString());
  }, [unlockedLevel]);

  useEffect(() => {
    localStorage.setItem('neurolinks_scores', JSON.stringify(levelScores));
  }, [levelScores]);

  useEffect(() => {
    localStorage.setItem('neurolinks_muted', isMuted.toString());
  }, [isMuted]);

  useEffect(() => {
    localStorage.setItem('neurolinks_music_muted', isMusicMuted.toString());
  }, [isMusicMuted]);

  useEffect(() => {
    localStorage.setItem('neurolinks_haptic', isHapticEnabled.toString());
  }, [isHapticEnabled]);

  useEffect(() => {
    localStorage.setItem('neurolinks_colorblind', isColorblindMode.toString());
  }, [isColorblindMode]);

  useEffect(() => {
    localStorage.setItem('neurolinks_theme', currentThemeId);
  }, [currentThemeId]);

  useEffect(() => {
    localStorage.setItem('neurolinks_hints', hints.toString());
  }, [hints]);

  useEffect(() => {
    localStorage.setItem('neurolinks_adfree', isAdFree.toString());
  }, [isAdFree]);

  useEffect(() => {
    localStorage.setItem('neurolinks_last_daily', lastDailyCompleted);
  }, [lastDailyCompleted]);

  useEffect(() => {
    localStorage.setItem('neurolinks_stats', JSON.stringify(stats));
  }, [stats]);

  const currentLevel = LEVELS.find(l => l.id === currentLevelId) || LEVELS[0];
  const currentTheme = THEMES.find(t => t.id === currentThemeId) || THEMES[0];

  const unlockAchievement = (id: string) => {
    setStats(prev => ({
      ...prev,
      achievements: prev.achievements.map(a => 
        a.id === id ? { ...a, unlocked: true } : a
      )
    }));
  };

  const completeLevel = (isPerfect: boolean, timeTaken: number = 0) => {
    const stars = isPerfect ? 3 : 1;
    
    setLevelScores(prev => ({
      ...prev,
      [currentLevelId]: {
        levelId: currentLevelId,
        stars: Math.max(stars, prev[currentLevelId]?.stars || 0),
        bestTime: prev[currentLevelId]?.bestTime ? Math.min(timeTaken, prev[currentLevelId].bestTime) : timeTaken
      }
    }));

    setStats(prev => ({
      ...prev,
      levelsCompleted: prev.levelsCompleted + 1,
      totalConnections: prev.totalConnections + currentLevel.pairs.length,
      perfectClears: isPerfect ? prev.perfectClears + 1 : prev.perfectClears
    }));

    if (isPerfect) unlockAchievement('grid_master');
    unlockAchievement('first_link');
    if (currentLevelId === 100) unlockAchievement('century');

    if (currentLevelId === unlockedLevel && unlockedLevel < 100) {
      setUnlockedLevel(prev => prev + 1);
    }
  };

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
  const setTheme = (id: string) => {
    setCurrentThemeId(id);
    unlockAchievement('theme_explorer');
  };

  const resetLevel = () => {
    setResetKey(prev => prev + 1);
  };

  return {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    levelScores,
    isMuted,
    isMusicMuted,
    isHapticEnabled,
    isColorblindMode,
    currentTheme,
    stats,
    hints,
    isAdFree,
    lastDailyCompleted,
    resetKey,
    completeLevel,
    completeDaily,
    goToLevel,
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