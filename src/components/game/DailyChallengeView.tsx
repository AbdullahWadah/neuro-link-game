import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PuzzleGrid from './PuzzleGrid';
import { LEVELS } from '../../data/levels';
import { getDailyLevelId } from '../../utils/daily';

interface DailyChallengeViewProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  onComplete: (isPerfect: boolean) => void;
  onClose: () => void;
}

const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({ 
  isMuted, 
  isColorblindMode, 
  onComplete, 
  onClose 
}) => {
  const dailyLevelId = getDailyLevelId();
  const dailyLevel = LEVELS.find(l => l.id === dailyLevelId) || LEVELS[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[130] bg-[#FDFCF0] flex flex-col p-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
            <Calendar size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800">DAILY CHALLENGE</h2>
            <p className="text-xs font-bold text-slate-400 uppercase">Earn double hints!</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X size={24} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-4">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-black text-slate-700">Special Level {dailyLevelId}</span>
          </div>
        </div>

        <PuzzleGrid 
          level={dailyLevel}
          onComplete={onComplete}
          isMuted={isMuted}
          isColorblindMode={isColorblindMode}
        />
      </div>

      <div className="mt-8 text-center text-slate-400 text-xs font-medium">
        New challenge available every 24 hours
      </div>
    </motion.div>
  );
};

export default DailyChallengeView;