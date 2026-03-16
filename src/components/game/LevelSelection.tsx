import React from 'react';
import { motion } from 'framer-motion';
import { X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LEVELS } from '../../data/levels';

interface LevelSelectionProps {
  unlockedLevel: number;
  currentLevelId: number;
  onSelect: (id: number) => void;
  onClose: () => void;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({ 
  unlockedLevel, 
  currentLevelId, 
  onSelect, 
  onClose 
}) => {
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
          {LEVELS.map((level) => {
            const isLocked = level.id > unlockedLevel;
            const isCurrent = level.id === currentLevelId;

            return (
              <motion.button
                key={level.id}
                whileHover={!isLocked ? { scale: 1.05 } : {}}
                whileTap={!isLocked ? { scale: 0.95 } : {}}
                onClick={() => !isLocked && onSelect(level.id)}
                className={`
                  aspect-square rounded-2xl flex items-center justify-center text-lg font-bold transition-all
                  ${isLocked 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                    : isCurrent 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'bg-white text-slate-600 shadow-sm border border-slate-100'}
                `}
              >
                {isLocked ? <Lock size={16} /> : level.id}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default LevelSelection;