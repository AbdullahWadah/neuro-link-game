import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Star, CheckCircle2, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PuzzleGrid from './PuzzleGrid';
import { getDailyLevel, getDailySeed } from '../../utils/daily';

interface DailyChallengeViewProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  lastDailyCompleted: string;
  onComplete: (isPerfect: boolean) => void;
  onClose: () => void;
}

const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({ 
  isMuted, 
  isColorblindMode, 
  lastDailyCompleted,
  onComplete, 
  onClose 
}) => {
  const dailyLevel = getDailyLevel();
  const todayStr = getDailySeed().toString();
  const isAlreadyCompleted = lastDailyCompleted === todayStr;

  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[130] bg-[#0F172A] flex flex-col p-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-2xl flex items-center justify-center">
            <Calendar size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-white">DAILY CHALLENGE</h2>
            <p className="text-xs font-bold text-slate-400 uppercase">
              {isAlreadyCompleted ? "Come back tomorrow!" : "Earn double hints!"}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full text-white hover:bg-white/10">
          <X size={24} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {isAlreadyCompleted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-6 max-w-xs"
          >
            <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-black text-white">CHALLENGE COMPLETE</h3>
            <p className="text-slate-400 font-medium">
              You've already mastered today's puzzle. Your brain deserves a rest!
            </p>
            
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
              <div className="flex items-center justify-center gap-2 text-amber-500 mb-2">
                <Timer size={20} />
                <span className="text-sm font-black uppercase tracking-widest">Next Challenge In</span>
              </div>
              <p className="text-3xl font-black text-white tabular-nums">{timeLeft}</p>
            </div>

            <Button 
              onClick={onClose}
              className="w-full bg-white text-slate-900 rounded-full py-6 font-bold hover:scale-105 transition-transform"
            >
              BACK TO LEVELS
            </Button>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/10 mb-4">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span className="text-sm font-black text-white">Special Level {dailyLevel.size}x{dailyLevel.size}</span>
              </div>
            </div>

            <PuzzleGrid 
              level={dailyLevel}
              onComplete={onComplete}
              isMuted={isMuted}
              isColorblindMode={isColorblindMode}
            />
          </>
        )}
      </div>

      <div className="mt-8 text-center text-slate-400 text-xs font-medium">
        New challenge available every 24 hours at midnight
      </div>
    </motion.div>
  );
};

export default DailyChallengeView;