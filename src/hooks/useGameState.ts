import { useState, useEffect } from 'react';
import { LEVELS, Level } from '../data/levels';

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

  useEffect(() => {
    localStorage.setItem('neurolinks_level', currentLevelId.toString());
  }, [currentLevelId]);

  useEffect(() => {
    localStorage.setItem('neurolinks_unlocked', unlockedLevel.toString());
  }, [unlockedLevel]);

  useEffect(() => {
    localStorage.setItem('neurolinks_muted', isMuted.toString());
  }, [isMuted]);

  const currentLevel = LEVELS.find(l => l.id === currentLevelId) || LEVELS[0];

  const completeLevel = () => {
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

  return {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    isMuted,
    completeLevel,
    goToLevel,
    toggleMute,
    resetLevel: () => setCurrentLevelId(currentLevelId)
  };
};