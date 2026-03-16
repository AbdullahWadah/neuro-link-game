import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, LayoutGrid, Lightbulb } from 'lucide-react';
import { useGameState } from '../hooks/useGameState';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import { useSound } from '../hooks/useSound';
import PuzzleGrid from '../components/game/PuzzleGrid';
import RadialMenu from '../components/game/RadialMenu';
import LevelSelection from '../components/game/LevelSelection';
import LevelComplete from '../components/game/LevelComplete';
import Tutorial from '../components/game/Tutorial';
import ProfileView from '../components/game/ProfileView';
import ThemeSelector from '../components/game/ThemeSelector';
import SettingsView from '../components/game/SettingsView';
import DailyChallengeView from '../components/game/DailyChallengeView';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index = () => {
  const { 
    currentLevel, 
    currentLevelId, 
    unlockedLevel, 
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
    resetLevel 
  } = useGameState();

  const [showSelection, setShowSelection] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDaily, setShowDaily] = useState(false);
  const [activeHintColor, setActiveHintColor] = useState<string | null>(null);

  useBackgroundMusic(isMuted);
  const { playSound } = useSound(isMuted);

  useEffect(() => {
    setActiveHintColor(null);
  }, [currentLevelId]);

  const handleLevelComplete = (isPerfect: boolean) => {
    setShowComplete(true);
    if (isPerfect) {
      toast.success("PERFECT CLEAR! +1 Hint", {
        icon: <Lightbulb className="text-amber-500" />,
        style: { borderRadius: '20px', fontWeight: 'bold' }
      });
    }
    completeLevel(isPerfect);
  };

  const handleDailyComplete = (isPerfect: boolean) => {
    setShowDaily(false);
    toast.success("DAILY CHALLENGE COMPLETE!", {
      description: isPerfect ? "Double hints earned for perfect clear!" : "You earned a hint!",
      style: { borderRadius: '20px' }
    });
    completeLevel(isPerfect);
  };

  const handleNextLevel = () => {
    setShowComplete(false);
  };

  const handleUseHint = () => {
    if (hints > 0) {
      // Find a pair that isn't connected yet (this is a simple implementation)
      // In a real app, we'd track which colors are currently connected in Index state
      const randomPair = currentLevel.pairs[Math.floor(Math.random() * currentLevel.pairs.length)];
      setActiveHintColor(randomPair.color);
      useHint();
      playSound('hint');
      
      toast("Hint active! Look at the pulsing nodes.", {
        icon: <Lightbulb className="text-amber-500" />,
        style: { borderRadius: '20px' }
      });

      // Clear hint after 3 seconds
      setTimeout(() => setActiveHintColor(null), 3000);
    } else {
      playSound('error');
      toast.error("No hints left! Complete levels perfectly to earn more.");
    }
  };

  if (currentLevelId > 100) {
    return (
      <div 
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center transition-colors duration-500"
        style={{ backgroundColor: currentTheme.background }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold" style={{ color: currentTheme.textColor }}>Congratulations!</h1>
          <p className="text-xl opacity-70" style={{ color: currentTheme.textColor }}>You finished the game!</p>
          <Button 
            onClick={() => goToLevel(1)}
            className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: currentTheme.accentColor, color: currentTheme.background }}
          >
            Play Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-6 overflow-hidden font-sans selection:bg-transparent transition-colors duration-500"
      style={{ backgroundColor: currentTheme.background }}
    >
      {/* Top Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-12 z-10">
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/40 shadow-sm"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram size={20} style={{ color: currentTheme.textColor }} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/40 shadow-sm"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            <Twitter size={20} style={{ color: currentTheme.textColor }} />
          </Button>
        </div>

        <Button 
          onClick={() => setShowSelection(true)}
          className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/10 font-bold flex items-center gap-2 hover:bg-white/30 transition-colors"
          style={{ color: currentTheme.textColor }}
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
        <h1 className="text-3xl font-black tracking-tighter" style={{ color: currentTheme.textColor }}>NEUROLINKS</h1>
        <p className="text-sm font-medium uppercase tracking-widest opacity-50" style={{ color: currentTheme.textColor }}>Connect the nodes</p>
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
              hintColor={activeHintColor}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area */}
      <div className="mt-12 mb-8 z-10">
        <RadialMenu 
          isMuted={isMuted} 
          isColorblindMode={isColorblindMode}
          hints={hints}
          onToggleColorblind={toggleColorblindMode}
          onRetry={resetLevel} 
          onOpenProfile={() => setShowProfile(true)}
          onOpenThemes={() => setShowThemes(true)}
          onOpenSettings={() => setShowSettings(true)}
          onOpenDaily={() => setShowDaily(true)}
          onUseHint={handleUseHint}
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
        {showProfile && (
          <ProfileView 
            stats={stats}
            unlockedLevel={unlockedLevel}
            onClose={() => setShowProfile(false)}
          />
        )}
        {showThemes && (
          <ThemeSelector 
            currentThemeId={currentTheme.id}
            onSelect={(id) => {
              setTheme(id);
              setShowThemes(false);
            }}
            onClose={() => setShowThemes(false)}
          />
        )}
        {showSettings && (
          <SettingsView 
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onClose={() => setShowSettings(false)}
          />
        )}
        {showDaily && (
          <DailyChallengeView 
            isMuted={isMuted}
            isColorblindMode={isColorblindMode}
            onComplete={handleDailyComplete}
            onClose={() => setShowDaily(false)}
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
        className="fixed -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl -z-10 opacity-30" 
        style={{ backgroundColor: currentTheme.accentColor }}
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed -top-24 -right-24 w-80 h-80 rounded-full blur-3xl -z-10 opacity-30" 
        style={{ backgroundColor: currentTheme.accentColor }}
      />
    </div>
  );
};

export default Index;