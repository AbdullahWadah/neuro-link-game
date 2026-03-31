"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, LayoutGrid, Calendar, Settings, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Theme } from '../../data/themes';

interface LandingViewProps {
  currentLevelId: number;
  theme: Theme;
  onContinue: () => void;
  onOpenLevels: () => void;
  onOpenDaily: () => void;
  onOpenSettings: () => void;
}

const LandingView: React.FC<LandingViewProps> = ({
  currentLevelId,
  theme,
  onContinue,
  onOpenLevels,
  onOpenDaily,
  onOpenSettings
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[50] flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: theme.background }}
    >
      <div className="w-full max-w-xs flex flex-col items-center gap-12">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black tracking-tighter leading-none mb-2" style={{ color: theme.textColor }}>
            NEURO<br />LINKS
          </h1>
          <div className="h-1.5 w-16 mx-auto rounded-full opacity-20" style={{ backgroundColor: theme.textColor }} />
        </motion.div>

        <div className="w-full space-y-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              onClick={onContinue}
              className="w-full h-20 rounded-[2rem] bg-white text-slate-950 shadow-2xl shadow-white/10 hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5"
            >
              <div className="flex items-center gap-2">
                <Play size={20} fill="currentColor" />
                <span className="text-xl font-black uppercase">Continue</span>
              </div>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Level {currentLevelId}</span>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                onClick={onOpenLevels}
                variant="outline"
                className="w-full h-24 rounded-[2rem] bg-white/5 border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all"
                style={{ color: theme.textColor }}
              >
                <LayoutGrid size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest">Map</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                onClick={onOpenDaily}
                variant="outline"
                className="w-full h-24 rounded-[2rem] bg-white/5 border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all"
                style={{ color: theme.textColor }}
              >
                <Calendar size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest">Daily</span>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              onClick={onOpenSettings}
              variant="ghost"
              className="w-full h-14 rounded-2xl flex items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-all"
              style={{ color: theme.textColor }}
            >
              <Settings size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Settings</span>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-20"
          style={{ color: theme.textColor }}
        >
          <Info size={12} />
          v1.0.0 • Neuronodes
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingView;