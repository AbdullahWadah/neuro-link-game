"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Calendar, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '../../data/themes';

interface MainMenuProps {
  currentLevelId: number;
  unlockedLevel: number;
  theme: Theme;
  onStart: () => void;
  onOpenDaily: () => void;
  onOpenProfile: () => void;
  onOpenSettings: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ 
  currentLevelId, 
  unlockedLevel, 
  theme, 
  onStart,
  onOpenDaily,
  onOpenProfile,
  onOpenSettings
}) => {
  const progress = Math.round((unlockedLevel / 120) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: theme.background }}
    >
      <div className="w-full max-w-xs flex flex-col items-center gap-12">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black tracking-tighter mb-2" style={{ color: theme.textColor }}>
            NEURO<br/>LINKS
          </h1>
          <div className="h-1.5 w-16 mx-auto rounded-full opacity-20" style={{ backgroundColor: theme.textColor }} />
        </motion.div>

        <div className="w-full space-y-4">
          <Button 
            onClick={onStart}
            className="w-full h-20 rounded-[2rem] bg-slate-900 text-white hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play fill="currentColor" size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Continue</p>
              <p className="text-xl font-black">LEVEL {currentLevelId}</p>
            </div>
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline"
              onClick={onOpenDaily}
              className="h-24 rounded-[2rem] border-2 border-slate-100 bg-white flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Calendar size={24} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Daily</span>
            </Button>
            <Button 
              variant="outline"
              onClick={onOpenProfile}
              className="h-24 rounded-[2rem] border-2 border-slate-100 bg-white flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Trophy size={24} className="text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Stats</span>
            </Button>
          </div>
        </div>

        <div className="w-full bg-white/50 backdrop-blur-sm rounded-[2rem] p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progress</span>
            </div>
            <span className="text-xs font-black text-slate-800">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-slate-800"
            />
          </div>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onOpenSettings}
          className="rounded-full text-slate-400 hover:text-slate-600"
        >
          <Settings size={24} />
        </Button>
      </div>
    </motion.div>
  );
};

export default MainMenu;