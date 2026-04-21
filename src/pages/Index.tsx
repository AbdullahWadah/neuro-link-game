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
import HintEditorView from '../components/game/HintEditorView';
import RewardedAdDialog from '../components/game/RewardedAdDialog';
import LevelComplete from '../components/game/LevelComplete';
import GameFinished from '../components/game/GameFinished';
import QuitConfirmation from '../components/game/QuitConfirmation';
import BackgroundDecoration from '../components/game/BackgroundDecoration';
import { getDailySeed } from '../utils/daily';
import { App } from '@capacitor/app';
import { Progress } from '@/components/ui/progress';
import { Lightbulb } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const {
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
    refreshLevelData
  } = useGameState();

  useBackgroundMusic(isMusicMuted);

  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDailyOpen, setIsDailyOpen] = useState(false);
  const [isHintEditorOpen, setIsHintEditorOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isQuitConfirmOpen, setIsQuitConfirmOpen] = useState(false);
  const [isPerfect, setIsPerfect] = useState(false);
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [pathLengths, setPathLengths] = useState<Record<string, number>>({});
  const [hasStartedMoving, setHasStartedMoving] = useState(false);
  const [activeHintColor, setActiveHintColor] = useState<string | null>(null);
  const [isRewardDialogOpen, setIsRewardDialogOpen] = useState(false);
  const hintTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setHasStartedMoving(false);
    setPathLengths({});
    setActiveHintColor(null);
    if (hintTimeoutRef.current) {
      window.clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
  }, [currentLevelId, resetKey]);

  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) {
        window.clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

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
      else if (isHintEditorOpen) setIsHintEditorOpen(false);
      else if (isCompleteOpen) setIsCompleteOpen(false);
      else setIsQuitConfirmOpen(true);
    });

    return () => {
      backListener.then(l => l.remove());
    };
  }, [isLevelSelectorOpen, isSettingsOpen, isDailyOpen, isHintEditorOpen, isCompleteOpen]);

  const handlePathsChange = useCallback((newPaths: Record<string, any[]>) => {
    const lengths: Record<string, number> = {};
    Object.entries(newPaths).forEach(([color, path]) => {
      lengths[color] = path.length;
    });
    setPathLengths(lengths);
    savePaths(newPaths);
  }, [savePaths]);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
  }, []);

  const handleLevelComplete = (perfect: boolean) => {
    setIsPerfect(perfect);
    completeLevel(perfect);
    setIsCompleteOpen(true);
  };

  const handleDailyComplete = (perfect: boolean) => {
    const todayStr = getDailySeed().toString();
    completeDaily(todayStr);
  };

  const handleNextLevel = () => {
    setIsCompleteOpen(false);
    if (currentLevelId < 120) {
      goToLevel(currentLevelId + 1);
    } else {
      setIsGameFinished(true);
    }
  };

  const handleRewardedHints = useCallback(() => {
    grantHints(3);
    toast.success('3 hints added', {
      description: 'Your rewarded refill is ready to use.',
    });
  }, [grantHints]);

  const handleHint = () => {
    if (!currentLevel.solutions || Object.keys(currentLevel.solutions).length === 0) return;
    
    const unsolvedPair = currentLevel.pairs.find(pair => !completedColors.has(pair.color));
    if (!unsolvedPair) return;

    if (!consumeHint()) {
      setIsRewardDialogOpen(true);
      return;
    }

    const currentPathsForLevel = { ...(savedPaths[currentLevelId] || {}) };
    if (currentPathsForLevel[unsolvedPair.color] && !completedColors.has(unsolvedPair.color)) {
      delete currentPathsForLevel[unsolvedPair.color];
      savePaths(currentPathsForLevel);
    }

    if (hintTimeoutRef.current) {
      window.clearTimeout(hintTimeoutRef.current);
    }

    setActiveHintColor(unsolvedPair.color);
    hintTimeoutRef.current = window.setTimeout(() => {
      setActiveHintColor(null);
      hintTimeoutRef.current = null;
    }, 4800);
  };

  const showTutorial = currentLevelId === 1 && completedColors.size === 0 && !hasStartedMoving;
  const hasSavedSolution = currentLevel.solutions && Object.keys(currentLevel.solutions).length > 0;

  return (
    <div 
      className="h-[100dvh] w-full flex flex-col items-center justify-between p-4 pt-[env(safe-area-inset-top,16px)] pb-[env(safe-area-inset-bottom,16px)] transition-colors duration-700 overflow-hidden relative"
      style={{ 
        backgroundColor: currentTheme.background,
        color: currentTheme.textColor
      }}
    >
      <BackgroundDecoration theme={currentTheme} />

      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md flex flex-col gap-3 z-10"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tighter uppercase leading-none">NeuroNodes</h1>
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
            {hasSavedSolution && (
              <button 
                onClick={handleHint}
                className={`relative h-11 w-11 rounded-2xl border backdrop-blur-md transition-all ${
                  hintsRemaining > 0
                    ? 'border-amber-400/30 bg-amber-400/12 text-amber-300 hover:bg-amber-400/18'
                    : 'border-rose-400/25 bg-rose-400/10 text-rose-200 hover:bg-rose-400/16'
                }`}
                aria-label={hintsRemaining > 0 ? `Use hint, ${hintsRemaining} remaining` : 'Get more hints with a rewarded ad'}
              >
                <Lightbulb size={20} className="mx-auto" />
                <span className={`absolute -right-1 -top-1 min-w-5 rounded-full px-1.5 py-0.5 text-[9px] font-black leading-none shadow-lg ${
                  hintsRemaining > 0 ? 'bg-amber-300 text-slate-950' : 'bg-rose-300 text-rose-950'
                }`}>
                  {hintsRemaining}
                </span>
              </button>
            )}
            <button 
              onClick={() => setIsLevelSelectorOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-1 h-1 rounded-full bg-current" />
                <div className="w-1 h-1 rounded-full bg-current" />
                <div className="w-1 h-1 rounded-full bg-current" />
                <div className="w-1 h-1 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>

        <div className="space-y-1">
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
        className="flex-1 flex items-center justify-center w-full relative z-10 py-4"
      >
        <PuzzleGrid 
          key={`${currentLevelId}-${resetKey}`}
          level={currentLevel}
          initialPaths={savedPaths[currentLevelId]}
          onComplete={handleLevelComplete}
          onMove={() => setHasStartedMoving(true)}
          onPathsChange={handlePathsChange}
          onCompletedColorsChange={handleCompletedColorsChange}
          isMuted={isMuted}
          isHapticEnabled={isHapticEnabled}
          isColorblindMode={isColorblindMode}
          showTutorial={showTutorial}
          hintColor={activeHintColor}
          hintAnimationMs={4800}
        />
      </motion.main>

      <motion.footer 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md flex flex-col items-center gap-4 pb-4 z-10"
      >
        <RadialMenu 
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          isAdFree={isAdFree}
          onToggleColorblind={toggleColorblindMode}
          onRetry={resetLevel}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenDaily={() => setIsDailyOpen(true)}
          onBuyNoAds={purchaseNoAds}
          onOpenQuit={() => setIsQuitConfirmOpen(true)}
        />
      </motion.footer>

      <RewardedAdDialog
        open={isRewardDialogOpen}
        onOpenChange={setIsRewardDialogOpen}
        onRewarded={handleRewardedHints}
        rewardAmount={3}
      />

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
            onOpenHintEditor={() => {
              setIsSettingsOpen(false);
              setIsHintEditorOpen(true);
            }}
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

        {isHintEditorOpen && (
          <HintEditorView 
            level={currentLevel}
            onClose={() => {
              setIsHintEditorOpen(false);
              refreshLevelData(); // Force reload level data to show Hint button
            }}
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