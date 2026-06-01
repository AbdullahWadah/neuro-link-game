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
import { shouldShowInterstitialForLevel, showInterstitialLevelAd } from '@/lib/admob';

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
    purchaseNoAds,
    consumeHint,
    grantHints,
    resetLevel,
    refreshLevelData,
  } = useGameState();

  const [isAppActive, setIsAppActive] = useState(() => !document.hidden);

  useBackgroundMusic(isMusicMuted || !isAppActive, isAppActive);

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
    const handleVisibilityChange = () => {
      setIsAppActive(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const appStateListener = App.addListener('appStateChange', ({ isActive }) => {
      setIsAppActive(isActive);
    });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      appStateListener.then(listener => listener.remove());
    };
  }, []);

  useEffect(() => {
    if (!isAppActive) {
      setActiveHintColor(null);
      if (hintTimeoutRef.current) {
        window.clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = null;
      }
    }
  }, [isAppActive]);

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
      backListener.then((l) => l.remove());
    };
  }, [isLevelSelectorOpen, isSettingsOpen, isDailyOpen, isHintEditorOpen, isCompleteOpen]);

  const handlePathsChange = useCallback(
    (newPaths: Record<string, any[]>) => {
      const lengths: Record<string, number> = {};
      Object.entries(newPaths).forEach(([color, path]) => {
        lengths[color] = path.length;
      });
      setPathLengths(lengths);
      savePaths(newPaths);
    },
    [savePaths],
  );

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
  }, []);

  const handleLevelComplete = (perfect: boolean) => {
    setIsPerfect(perfect);
    completeLevel(perfect);
    setIsCompleteOpen(true);
  };

  const handleDailyComplete = () => {
    const todayStr = getDailySeed().toString();
    completeDaily(todayStr);
  };

  const handleNextLevel = async () => {
    setIsCompleteOpen(false);

    if (shouldShowInterstitialForLevel(currentLevelId, isAdFree)) {
      const loadingToast = toast.loading('Loading level-break ad...', {
        description: 'Preparing a short interstitial before the next level.',
      });

      const result = await showInterstitialLevelAd(isAdFree);
      toast.dismiss(loadingToast);

      if (result.shown) {
        toast.success('Interstitial shown', {
          description: result.message,
        });
      } else if (result.phase !== 'skipped_ad_free') {
        toast.error('Interstitial issue', {
          description: result.message,
        });
      }
    }

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

    const unsolvedPair = currentLevel.pairs.find((pair) => !completedColors.has(pair.color));
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
      className="relative flex h-[100dvh] min-h-[100svh] w-full flex-col overflow-hidden px-2.5 py-2 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))] transition-colors duration-500 sm:px-4"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.textColor,
      }}
    >
      <BackgroundDecoration theme={currentTheme} />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.22 }}
        className="z-10 mx-auto flex w-full max-w-[32rem] shrink-0 flex-col gap-2"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-xl font-black leading-none tracking-tighter uppercase">NeuroNodes</h1>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest">
                  Lvl {currentLevelId}
                </span>
                <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-amber-500">
                  {currentLevel.size}x{currentLevel.size}
                </span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-2">
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
                <span
                  className={`absolute -right-1 -top-1 min-w-5 rounded-full px-1.5 py-0.5 text-[9px] font-black leading-none shadow-lg ${
                    hintsRemaining > 0 ? 'bg-amber-300 text-slate-950' : 'bg-rose-300 text-rose-950'
                  }`}
                >
                  {hintsRemaining}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsLevelSelectorOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="h-1 w-1 rounded-full bg-current" />
                <div className="h-1 w-1 rounded-full bg-current" />
                <div className="h-1 w-1 rounded-full bg-current" />
                <div className="h-1 w-1 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-end justify-between px-1">
            <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Neural Sync</span>
            <span className="text-[10px] font-black tabular-nums">{coverage}%</span>
          </div>
          <Progress value={coverage} className="h-1 bg-white/5" />
        </div>
      </motion.header>

      <motion.main
        initial={{ scale: 0.985, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex min-h-0 w-full flex-1 items-center justify-center py-1"
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
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.22 }}
        className="z-10 mx-auto flex w-full max-w-[32rem] shrink-0 flex-col items-center gap-2 pb-0.5"
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
              refreshLevelData();
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

        {isGameFinished && <GameFinished onContinue={() => setIsGameFinished(false)} />}

        {isQuitConfirmOpen && <QuitConfirmation onClose={() => setIsQuitConfirmOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
