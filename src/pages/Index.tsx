import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGameState } from '../hooks/useGameState';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import PuzzleGrid from '../components/game/PuzzleGrid';
import RadialMenu from '../components/game/RadialMenu';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { 
    currentLevel, 
    currentLevelId, 
    unlockedLevel, 
    isMuted, 
    completeLevel, 
    goToLevel, 
    toggleMute,
    resetLevel 
  } = useGameState();

  // Start ambient background music
  useBackgroundMusic(isMuted);

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
      <div className="w-full max-w-md flex items-center justify-between mb-12">
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

        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            disabled={currentLevelId <= 1}
            onClick={() => goToLevel(currentLevelId - 1)}
          >
            <ChevronLeft size={18} />
          </Button>
          <span className="font-bold text-slate-700 min-w-[80px] text-center">
            Level {currentLevelId}
          </span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            disabled={currentLevelId >= unlockedLevel}
            onClick={() => goToLevel(currentLevelId + 1)}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      {/* Game Title */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-black tracking-tighter text-slate-800">NEUROLINKS</h1>
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Connect the nodes</p>
      </motion.div>

      {/* Puzzle Area */}
      <div className="flex-1 w-full flex items-center justify-center">
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
              onComplete={completeLevel} 
              isMuted={isMuted}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area */}
      <div className="mt-12 mb-8">
        <RadialMenu 
          isMuted={isMuted} 
          onToggleMute={toggleMute} 
          onRetry={resetLevel} 
        />
      </div>

      {/* Background Decoration */}
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="fixed -top-24 -right-24 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Index;