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
    setHintColor(null);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
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
    savePaths(newPaths);
  }, [savePaths]);

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
    if (hintColor) {
      toast.info("Hint already active!");
      return;
    }

    const uncompletedPair = currentLevel.pairs.find(p => !completedColors.has(p.color));
    
    if (!uncompletedPair) {
      toast.info("All connections are already complete!");
      return;
    }

    if (hints > 0) {
      if (useHint()) {
        setHintColor(uncompletedPair.color);
        toast.success("Hint active! Follow the glowing path.");
        
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = setTimeout(() => {
          setHintColor(null);
          hintTimeoutRef.current = null;
        }, 8000);
      }
    } else {
      toast("No hints left!", {
        description: "Watch an ad to get 3 more hints.",
        action: {
          label: "Watch Ad",
          onClick: () => {
            const loadingToast = toast.loading("Watching Ad...");
            setTimeout(() => {
              toast.dismiss(loadingToast);
              addHints(3);
              toast.success("Reward: +3 Hints!");
            }, 2000);
          }
        }
      });
    }
  };

  const handleLevelComplete = (perfect: boolean) => {
    setIsPerfect(perfect);
    completeLevel(perfect);
    setIsCompleteOpen(true);
    
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
    if (currentLevelId < 120) {
      goToLevel(currentLevelId + 1);
    } else {
      setIsGameFinished(true);
    }
  };

  const showTutorial = currentLevelId === 1 && completedColors.size === 0 && !hasStartedMoving;

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
            <button 
              onClick={handleUseHint}
              className={`w-10 h-10 rounded-xl backdrop-blur-md border flex flex-col items-center justify-center transition-all relative \${
                hintColor 
                  ? "bg-amber-500 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]" 
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <Lightbulb size={16} className={hintColor ? "animate-pulse" : ""} />
              <span className={`text-[8px] font-black mt-0.5 \${hintColor ? "text-white" : "opacity-40"}`}>
                {hints}
              </span>
            </button>

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
          key={`\${currentLevelId}-\${resetKey}`}
          level={currentLevel}
          initialPaths={savedPaths[currentLevelId]}
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
        className="w-full max-w-md flex flex-col items-center gap-4 pb-4 z-10"
      >
        <RadialMenu 
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          isAdFree={isAdFree}
          hints={hints}
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