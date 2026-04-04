import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Music2, LayoutGrid, Moon, Sun, Timer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '../../data/themes';

interface GameHeaderProps {
  currentLevelId: number;
  currentTheme: Theme;
  moves: number;
  onOpenLevelSelection: () => void;
  onToggleDarkMode: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ 
  currentLevelId, 
  currentTheme, 
  moves,
  onOpenLevelSelection,
  onToggleDarkMode
}) => {
  const [seconds, setSeconds] = useState(0);
  const isDark = currentTheme.id === 'midnight' || currentTheme.id === 'cyberpunk';

  useEffect(() => {
    setSeconds(0);
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentLevelId]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center z-10">
      <div className="w-full flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram size={18} style={{ color: currentTheme.textColor }} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
            onClick={() => window.open('https://tiktok.com', '_blank')}
          >
            <Music2 size={18} style={{ color: currentTheme.textColor }} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
            onClick={onToggleDarkMode}
          >
            {isDark ? (
              <Sun size={18} style={{ color: currentTheme.textColor }} />
            ) : (
              <Moon size={18} style={{ color: currentTheme.textColor }} />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: currentTheme.textColor }}>
              <Timer size={10} /> {formatTime(seconds)}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: currentTheme.textColor }}>
              <Zap size={10} /> {moves} Moves
            </div>
          </div>
          
          <Button 
            onClick={onOpenLevelSelection}
            className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-2xl shadow-sm border border-white/10 font-bold flex items-center gap-2 hover:bg-white/20 transition-all active:scale-95"
            style={{ color: currentTheme.textColor }}
          >
            <LayoutGrid size={16} />
            Lvl {currentLevelId}
          </Button>
        </div>
      </div>

      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 text-center"
      >
        <h1 className="text-4xl font-black tracking-tighter leading-none mb-1" style={{ color: currentTheme.textColor }}>NEURONODES</h1>
        <div className="h-1 w-12 mx-auto rounded-full opacity-20" style={{ backgroundColor: currentTheme.textColor }} />
      </motion.div>
    </div>
  );
};

export default GameHeader;