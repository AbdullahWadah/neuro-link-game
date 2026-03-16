import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, LayoutGrid } from 'lucide-react';
import { useGameState } from '../hooks/useGameState';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import PuzzleGrid from '../components/game/PuzzleGrid';
import RadialMenu from '../components/game/RadialMenu';
import LevelSelection from '../components/game/LevelSelection';
import LevelComplete from '../components/game/LevelComplete';
import Tutorial from '../components/game/Tutorial';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { 
    currentLevel, 
    currentLevelId, 
    unlockedLevel, 
    isMuted, 
    isColorblindMode,
    completeLevel, 
    goToLevel, 
    toggleMute,
    toggleColorblindMode,
    resetLevel 
  } = useGameState();

  const [showSelection, setShowSelection] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  useBackgroundMusic(isMuted);

  const handleLevelComplete = () => {
    setShowComplete(true);
  };

  const handleNextLevel = () => {
    setShowComplete(false);
    completeLevel();
  };

  if (currentLevelId > 100) {
    return (
      <div className="min-h-screen bg-[#FDFCF0] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-slate-800">Congratulations!</h1>
          <p className="text-xl text-slate-600">You finished the game!</p>
          <Button 
            onClick={() => goToLevel(1)}
            className="bg-slate-800 text-white rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform"
          >
            Play Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCF0] flex flex-col items-center p-6 overflow-hidden font-sans selection:bg-transparent">
      {/* Top Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-12 z-10">
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/50 hover:bg-white shadow-sm"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram size={20} className="text-slate-600" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/50 hover:bg-white shadow-sm"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            <Twitter size={20} className="text-slate-600" />
          </Button>
        </div>

        <Button 
          onClick={() => setShowSelection(true)}
          className="bg-white/50 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/20 text-slate-700 font-bold flex items-center gap-2 hover:bg-white transition-colors"
        >
          <LayoutGrid size={18} />
          Level {currentLevelId}
        </Button>
      </div>

      {/* Game Title */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center z-10"
      >
        <h1 className="text-3xl font-black tracking-tighter text-slate-800">NEUROLINKS</h1>
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Connect the nodes</p>
      </motion.div>

      {/* Puzzle Area */}
      <div className="flex-1 w-full flex items-center justify-center z-10 relative">
        {currentLevelId === 1 && !showComplete && <Tutorial />}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevelId}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="w-full flex justify-center"
          >
            <PuzzleGrid 
              level={currentLevel} 
              onComplete={handleLevelComplete} 
              isMuted={isMuted}
              isColorblindMode={isColorblindMode}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area */}
      <div className="mt-12 mb-8 z-10">
        <RadialMenu 
          isMuted={isMuted} 
          isColorblindMode={isColorblindMode}
          onToggleMute={toggleMute} 
          onToggleColorblind={toggleColorblindMode}
          onRetry={resetLevel} 
        />
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {showSelection && (
          <LevelSelection 
            unlockedLevel={unlockedLevel}
            currentLevelId={currentLevelId}
            onSelect={(id) => {
              goToLevel(id);
              setShowSelection(false);
            }}
            onClose={() => setShowSelection(false)}
          />
        )}
        {showComplete && (
          <LevelComplete 
            levelId={currentLevelId}
            onNext={handleNextLevel}
          />
        )}
      </AnimatePresence>

      {/* Background Decoration */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed -bottom-24 -left-24 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed -top-24 -right-24 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl -z-10" 
      />
    </div>
  );
};

export default Index;