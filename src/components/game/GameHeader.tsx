import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Music2, LayoutGrid, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '../../data/themes';

interface GameHeaderProps {
  currentLevelId: number;
  currentTheme: Theme;
  onOpenLevelSelection: () => void;
  onToggleDarkMode: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ 
  currentLevelId, 
  currentTheme, 
  onOpenLevelSelection,
  onToggleDarkMode
}) => {
  const isDark = currentTheme.id === 'midnight' || currentTheme.id === 'cyberpunk';

  return (
    <div className="w-full max-w-md flex flex-col items-center z-10">
      <div className="w-full flex items-center justify-between mb-12">
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/40 shadow-sm transition-all active:scale-90"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram size={20} style={{ color: currentTheme.textColor }} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/40 shadow-sm transition-all active:scale-90"
            onClick={() => window.open('https://tiktok.com', '_blank')}
          >
            <Music2 size={20} style={{ color: currentTheme.textColor }} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/20 hover:bg-white/40 shadow-sm transition-all active:scale-90"
            onClick={onToggleDarkMode}
          >
            {isDark ? (
              <Sun size={20} style={{ color: currentTheme.textColor }} />
            ) : (
              <Moon size={20} style={{ color: currentTheme.textColor }} />
            )}
          </Button>
        </div>

        <Button 
          onClick={onOpenLevelSelection}
          className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/10 font-bold flex items-center gap-2 hover:bg-white/30 transition-all active:scale-95"
          style={{ color: currentTheme.textColor }}
        >
          <LayoutGrid size={18} />
          Level {currentLevelId}
        </Button>
      </div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-black tracking-tighter" style={{ color: currentTheme.textColor }}>NEUROLINKS</h1>
        <p className="text-sm font-medium uppercase tracking-widest opacity-50" style={{ color: currentTheme.textColor }}>Connect the nodes</p>
      </motion.div>
    </div>
  );
};

export default GameHeader;