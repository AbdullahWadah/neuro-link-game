"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import PuzzleGrid from '../components/game/PuzzleGrid';
import RadialMenu from '../components/game/RadialMenu';
import LevelSelection from '../components/game/LevelSelection';
import SettingsView from '../components/game/SettingsView';
import DailyChallengeView from '../components/game/DailyChallengeView';
import LevelComplete from '../components/game/LevelComplete';
import GameFinished from '../components/game/GameFinished';
import QuitConfirmation from '../components/game/QuitConfirmation';
import { getDailySeed } from '../utils/daily';
import { App } from '@capacitor/app';

const Index = () => {
  const {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    levelScores,
    isMuted,
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
    toggleColorblindMode,
    setTheme,
    useHint,
    addHints,
    purchaseNoAds,
    resetLevel
  } = useGameState();

  useBackgroundMusic(isMuted);

  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDailyOpen, setIsDailyOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isQuitConfirmOpen, setIsQuitConfirmOpen] = useState(false);
  const [isPerfect, setIsPerfect] = useState(false);
  const [hintColor, setHintColor] = useState<string | null>(null);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  
  const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle hardware back button on Android
  useEffect(() => {
    const backListener = App.addListener('backButton', () => {
      if (isLevelSelectorOpen) setIsLevelSelectorOpen(false);
      else if (isSettingsOpen) setIsSettingsOpen(false);
      else if (isDailyOpen) setIsDailyOpen(false);
      else if (isCompleteOpen) setIsCompleteOpen(false);
      else setIsQuitConfirmOpen(true);
    });

    return () => {
      backListener.then(l => l.remove());
    };
  }, [isLevelSelectorOpen, isSettingsOpen, isDailyOpen, isCompleteOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
    };
  }, []);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
    setHintColor(prev => {
      // Clear hint if the color it was showing is now completed
      if (prev && colors.has(prev)) {
        if (hintTimeoutRef.current) {
          clearTimeout(hintTimeoutRef.current);
          hintTimeoutRef.current = null;
        }
        return null;
      }
      return prev;
    });
  }, []);

  const handleUseHint = () => {
    // Don't use another hint if one is already active
    if (hintColor) return;

    const uncompletedPair = currentLevel.pairs.find(p => !completedColors.has(p.color));
    if (uncompletedPair && useHint()) {
      setHintColor(uncompletedPair.color);
      
      // Set a timeout to clear the hint after 5 seconds
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = setTimeout(() => {
        setHintColor(null);
        hintTimeoutRef.current = null;
      }, 5000);
    }
  };

  const handleLevelComplete = (perfect: boolean) => {
    setIsPerfect(perfect);
    completeLevel(perfect);
    setIsCompleteOpen(true);
    
    // Clear hint on level complete
    setHintColor(null);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
  };

  const handleDailyComplete = (perfect: boolean) => {
    const todayStr = getDailySeed().toString();
    completeDaily(todayStr);
  };

  const handleNextLevel = () => {
    setIsCompleteOpen(false);
    if (currentLevelId < 100) {
      goToLevel(currentLevelId + 1);
    } else {
      setIsGameFinished(true);
    }
  };

  const handleRestartGame = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-between p-6 transition-colors duration-700 overflow-hidden"
      style={{ 
        backgroundColor: currentTheme.background,
        color: currentTheme.textColor
      }}
    >
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md flex justify-between items-center z-10"
      >
        <div className="flex flex-col">
          <h1 className="text-3xl font-black tracking-tighter uppercase">Neurolinks</h1>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 uppercase tracking-widest">
              Level {currentLevelId}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 uppercase tracking-widest">
              {currentLevel.size}x{currentLevel.size}
            </span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsLevelSelectorOpen(true)}
          className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
          </div>
        </button>
      </motion.header>

      <motion.main 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex-1 flex items-center justify-center w-full"
      >
        <PuzzleGrid 
          key={`${currentLevelId}-${resetKey}`}
          level={currentLevel}
          onComplete={handleLevelComplete}
          onCompletedColorsChange={handleCompletedColorsChange}
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          hintColor={hintColor}
        />
      </motion.main>

      <motion.footer 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md flex flex-col items-center gap-8 pb-8"
      >
        <RadialMenu 
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          isAdFree={isAdFree}
          hints={hints}
          isHintActive={!!hintColor}
          onToggleColorblind={toggleColorblindMode}
          onRetry={resetLevel}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenDaily={() => setIsDailyOpen(true)}
          onUseHint={handleUseHint}
          onAddHints={addHints}
          onBuyNoAds={purchaseNoAds}
          onOpenQuit={() => setIsQuitConfirmOpen(true)}
        />
      </motion.footer>

      <AnimatePresence>
        {isLevelSelectorOpen && (
          <LevelSelection 
            unlockedLevel={unlockedLevel}
            currentLevelId={currentLevelId}
            levelScores={levelScores}
            onSelect={(id) => {
              goToLevel(id);
              setIsLevelSelectorOpen(false);
            }}
            onClose={() => setIsLevelSelectorOpen(false)}
          />
        )}
        
        {isSettingsOpen && (
          <SettingsView 
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onClose={() => setIsSettingsOpen(false)}
          />
        )}

        {isDailyOpen && (
          <DailyChallengeView 
            isMuted={isMuted}
            isColorblindMode={isColorblindMode}
            lastDailyCompleted={lastDailyCompleted}
            onComplete={handleDailyComplete}
            onClose={() => setIsDailyOpen(false)}
          />
        )}

        {isCompleteOpen && (
          <LevelComplete 
            levelId={currentLevelId}
            isPerfect={isPerfect}
            onNext={handleNextLevel}
          />
        )}

        {isGameFinished && (
          <GameFinished onRestart={handleRestartGame} />
        )}

        {isQuitConfirmOpen && (
          <QuitConfirmation onClose={() => setIsQuitConfirmOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;