"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import PuzzleGrid from '../components/game/PuzzleGrid';
import RadialMenu from '../components/game/RadialMenu';
import LevelSelector from '../components/game/LevelSelector';
import SettingsModal from '../components/game/SettingsModal';
import DailyChallenge from '../components/game/DailyChallenge';
import { Toaster } from 'react-hot-toast';

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
    completeLevel,
    goToLevel,
    toggleMute,
    toggleColorblindMode,
    setTheme,
    useHint,
    addHints,
    resetLevel
  } = useGameState();

  useBackgroundMusic(isMuted);

  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDailyOpen, setIsDailyOpen] = useState(false);
  const [hintColor, setHintColor] = useState<string | null>(null);

  const handleUseHint = () => {
    if (useHint()) {
      // Find an uncompleted color
      const uncompletedPair = currentLevel.pairs.find(p => p.color !== hintColor);
      if (uncompletedPair) {
        setHintColor(uncompletedPair.color);
        setTimeout(() => setHintColor(null), 3000);
      }
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-between p-6 transition-colors duration-700 overflow-hidden"
      style={{ 
        backgroundColor: currentTheme.background,
        color: currentTheme.text
      }}
    >
      <Toaster position="top-center" />
      
      {/* Header */}
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

      {/* Game Area */}
      <motion.main 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex-1 flex items-center justify-center w-full"
      >
        <PuzzleGrid 
          level={currentLevel}
          onComplete={(isPerfect) => completeLevel(isPerfect)}
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          hintColor={hintColor}
        />
      </motion.main>

      {/* Footer / Menu */}
      <motion.footer 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md flex flex-col items-center gap-8 pb-8"
      >
        <RadialMenu 
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
          hints={hints}
          onToggleColorblind={toggleColorblindMode}
          onRetry={resetLevel}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenDaily={() => setIsDailyOpen(true)}
          onUseHint={handleUseHint}
          onAddHints={addHints}
        />
      </motion.footer>

      {/* Modals */}
      <AnimatePresence>
        {isLevelSelectorOpen && (
          <LevelSelector 
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
          <SettingsModal 
            isMuted={isMuted}
            onToggleMute={toggleMute}
            currentThemeId={currentTheme.id}
            onSetTheme={setTheme}
            stats={stats}
            onClose={() => setIsSettingsOpen(false)}
          />
        )}

        {isDailyOpen && (
          <DailyChallenge 
            onClose={() => setIsDailyOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;