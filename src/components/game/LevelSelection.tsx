import React from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LevelScore } from '../../hooks/useGameState';

interface LevelSelectionProps {
  unlockedLevel: number;
  currentLevelId: number;
  levelScores: Record<number, LevelScore>;
  onSelect: (id: number) => void;
  onClose: () => void;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({ 
  unlockedLevel, 
  currentLevelId, 
  levelScores,
  onSelect, 
  onClose 
}) => {
  // Create an array of 100 levels
  const levels = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[100] bg-[#FDFCF0] p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-slate-800">SELECT LEVEL</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X size={24} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto pb-12">
        <div className="grid grid-cols-4 gap-4">
          {levels.map((levelId) => {
            const isLocked = levelId > unlockedLevel;
            const isCurrent = levelId === currentLevelId;
            const score = levelScores[levelId];

            return (
              <motion.button
                key={levelId}
                whileHover={!isLocked ? { scale: 1.05 } : {}}
                whileTap={!isLocked ? { scale: 0.95 } : {}}
                onClick={() => !isLocked && onSelect(levelId)}
                className={`
                  relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all
                  ${isLocked 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                    : isCurrent 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'bg-white text-slate-600 shadow-sm border border-slate-100'}
                `}
              >
                {isLocked ? (
                  <Lock size={16} />
                ) : (
                  <>
                    <span className="text-lg font-bold">{levelId}</span>
                    {score && (
                      <div className="flex gap-0.5 mt-1">
                        {[1, 2, 3].map((i) => (
                          <Star 
                            key={i} 
                            size={8} 
                            className={i <= score.stars ? "text-amber-400 fill-amber-400" : "text-slate-200"} 
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default LevelSelection;