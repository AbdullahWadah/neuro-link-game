"use client";

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
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
import { Progress } from '@/components/ui/progress';
import { Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const Index = () => {
  const {
    currentLevel,
    currentLevelId,
    unlockedLevel,
    levelScores,
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
    toggleMute,
    toggleMusicMute,
    toggleHaptic,
    toggleColorblindMode,
    setTheme,
    useHint,
    addHints,
    purchaseNoAds,
    resetLevel
  } = useGameState();

  useBackgroundMusic(isMusicMuted);

  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDailyOpen, setIsDailyOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isQuitConfirmOpen, setIsQuitConfirmOpen] = useState(false);
  const [isPerfect, setIsPerfect] = useState(false);
  const [hintColor, setHintColor] = useState<string | null>(null);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [pathLengths, setPathLengths] = useState<Record<string, number>>({});
  const [hasStartedMoving, setHasStartedMoving] = useState(false);
  
  const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setHasStartedMoving(false);
    setPathLengths({});
  }, [currentLevelId, resetKey]);

  const coverage = useMemo(() => {
    const totalCells = currentLevel.size * currentLevel.size;
    const filledCells = Object.values(pathLengths).reduce((acc, len) => acc + len, 0);
    return Math.min(100, Math.round((filledCells / totalCells) * 100));
  }, [pathLengths, currentLevel.size]);

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

  const handlePathsChange = useCallback((newPaths: Record<string, any[]>) => {
    const lengths: Record<string, number> = {};
    Object.entries(newPaths).forEach(([color, path]) => {
      lengths[color] = path.length;
    });
    setPathLengths(lengths);
  }, []);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
    setHintColor(prev => {
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
    if (hintColor) return;

    const uncompletedPair = currentLevel.pairs.find(p => !completedColors.has(p.color));
    if (uncompletedPair && useHint()) {
      setHintColor(uncompletedPair.color);
      
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
    
    if (perfect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: currentLevel.pairs.map(p => p.color)
      });
    }

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

  const showTutorial = currentLevelId === 1 && completedColors.size === 0 && !hasStartedMoving;

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
        className="w-full max-w-md flex flex-col gap-4 z-10"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">Neurolinks</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-white/10 uppercase tracking-widest">
                  Lvl {currentLevelId}
                </span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-500 uppercase tracking-widest">
                  {currentLevel.size}x{currentLevel.size}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
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
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-end px-1">
            <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Neural Sync</span>
            <span className="text-[10px] font-black tabular-nums">{coverage}%</span>
          </div>
          <Progress value={coverage} className="h-1 bg-white/5" />
        </div>
      </motion.header>

      <motion.main 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex-1 flex items-center justify-center w-full relative"
      >
        <PuzzleGrid 
          key={`${currentLevelId}-${resetKey}`}
          level={currentLevel}
          onComplete={handleLevelComplete}
          onMove={() => setHasStartedMoving(true)}
          onPathsChange={handlePathsChange}
          onCompletedColorsChange={handleCompletedColorsChange}
          isMuted={isMuted}
          isHapticEnabled={isHapticEnabled}
          isColorblindMode={isColorblindMode}
          hintColor={hintColor}
          showTutorial={showTutorial}
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
            isMusicMuted={isMusicMuted}
            isHapticEnabled={isHapticEnabled}
            onToggleMute={toggleMute}
            onToggleMusicMute={toggleMusicMute}
            onToggleHaptic={toggleHaptic}
            onClose={() => setIsSettingsOpen(false)}
          />
        )}

        {isDailyOpen && (
          <DailyChallengeView 
            isMuted={isMuted}
            isHapticEnabled={isHapticEnabled}
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
          <GameFinished onContinue={() => setIsGameFinished(false)} />
        )}

        {isQuitConfirmOpen && (
          <QuitConfirmation onClose={() => setIsQuitConfirmOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;