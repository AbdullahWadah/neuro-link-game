"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface WelcomeBackProps {
  unlockedLevel: number;
  totalStars: number;
  onContinue: () => void;
}

const WelcomeBack: React.FC<WelcomeBackProps> = ({ unlockedLevel, totalStars, onContinue }) => {
  const progress = Math.round((unlockedLevel / 120) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#020617] flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-xs text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-2xl"
          >
            <Zap size={40} className="text-amber-400 fill-amber-400" />
          </motion.div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Welcome Back</h1>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">Neural Link Restored</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
            <Trophy size={20} className="text-blue-400 mx-auto mb-2" />
            <p className="text-[10px] font-black text-slate-500 uppercase">Level</p>
            <p className="text-xl font-black text-white">{unlockedLevel}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
            <Star size={20} className="text-amber-400 mx-auto mb-2" />
            <p className="text-[10px] font-black text-slate-500 uppercase">Stars</p>
            <p className="text-xl font-black text-white">{totalStars}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-end px-1">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Progress</span>
            <span className="text-xs font-black text-white">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/5" />
        </div>

        <Button 
          onClick={onContinue}
          className="w-full bg-white text-slate-950 rounded-full py-8 text-xl font-black hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
        >
          CONTINUE <Play size={24} fill="currentColor" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeBack;