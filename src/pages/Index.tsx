import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
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
import GameHeader from '../components/game/GameHeader';
import BackgroundDecoration from '../components/game/BackgroundDecoration';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
    resetLevel 
  } = useGameState();

  const [showSelection, setShowSelection] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [isPerfectClear, setIsPerfectClear] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDaily, setShowDaily] = useState(false);
  const [activeHintColor, setActiveHintColor] = useState<string | null>(null);
  const [moves, setMoves] = useState(0);

  useBackgroundMusic(isMuted);
  const { playSound } = useSound(isMuted);

  useEffect(() => {
    setActiveHintColor(null);
    setMoves(0);
  }, [currentLevelId]);

  const handleLevelComplete = (isPerfect: boolean) => {
    setIsPerfectClear(isPerfect);
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
    goToLevel(currentLevelId + 1);
  };

  const handleToggleDarkMode = () => {
    const isDark = currentTheme.id === 'midnight' || currentTheme.id === 'cyberpunk';
    setTheme(isDark ? 'zen' : 'midnight');
  };

  const handleUseHint = () => {
    if (hints > 0) {
      const randomPair = currentLevel.pairs[Math.floor(Math.random() * currentLevel.pairs.length)];
      setActiveHintColor(randomPair.color);
      useHint();
      playSound('hint');
      
      toast("Hint active! Look at the pulsing nodes.", {
        icon: <Lightbulb className="text-amber-500" />,
        style: { borderRadius: '20px' }
      });

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
        <BackgroundDecoration theme={currentTheme} />
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
      <BackgroundDecoration theme={currentTheme} />
      
      <GameHeader 
        currentLevelId={currentLevelId} 
        currentTheme={currentTheme} 
        moves={moves}
        onOpenLevelSelection={() => setShowSelection(true)} 
        onToggleDarkMode={handleToggleDarkMode}
      />

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
              onMove={() => setMoves(m => m + 1)}
              isMuted={isMuted}
              isColorblindMode={isColorblindMode}
              hintColor={activeHintColor}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area */}
      <div className="mt-8 mb-4 z-10">
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
            levelScores={levelScores}
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
            isPerfect={isPerfectClear}
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
    </div>
  );
};

export default Index;