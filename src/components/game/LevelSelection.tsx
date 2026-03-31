import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Star, ChevronRight, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LevelScore } from '../../hooks/useGameState';

interface LevelSelectionProps {
  unlockedLevel: number;
  currentLevelId: number;
  levelScores: Record<number, LevelScore>;
  onSelect: (id: number) => void;
  onClose: () => void;
}

const SECTORS = [
  { name: 'Core Network', range: [1, 15], size: '3x3', color: 'bg-emerald-500' },
  { name: 'Synaptic Bridge', range: [16, 35], size: '4x4', color: 'bg-blue-500' },
  { name: 'Neural Cortex', range: [36, 60], size: '5x5', color: 'bg-purple-500' },
  { name: 'Cognitive Hub', range: [61, 90], size: '6x6', color: 'bg-amber-500' },
  { name: 'Master Grid', range: [91, 120], size: '7x7', color: 'bg-rose-500' },
];

const LevelSelection: React.FC<LevelSelectionProps> = ({ 
  unlockedLevel, 
  currentLevelId, 
  levelScores,
  onSelect, 
  onClose 
}) => {
  const currentLevelRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLevelRef.current && scrollContainerRef.current) {
      currentLevelRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-white flex flex-col"
    >
      <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">NEURAL MAP</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">120 Nodes Available</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="rounded-full text-slate-400 hover:text-slate-600"
        >
          <X size={24} />
        </Button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-10 pb-32"
      >
        {SECTORS.map((sector) => (
          <div key={sector.name} className="space-y-4">
            <div className="flex items-end justify-between px-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${sector.color}`} />
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">{sector.name}</h3>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">{sector.size} Resolution</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {Array.from(
                { length: sector.range[1] - sector.range[0] + 1 }, 
                (_, i) => sector.range[0] + i
              ).map((levelId) => {
                const isLocked = levelId > unlockedLevel;
                const isCurrent = levelId === currentLevelId;
                const score = levelScores[levelId];

                return (
                  <motion.button
                    key={levelId}
                    ref={isCurrent ? currentLevelRef : null}
                    whileHover={!isLocked ? { scale: 1.05 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                    onClick={() => !isLocked && onSelect(levelId)}
                    className={`
                      relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all border-2
                      ${isLocked 
                        ? 'bg-slate-50 border-transparent text-slate-200 cursor-not-allowed' 
                        : isCurrent 
                          ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                          : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}
                    `}
                  >
                    {isLocked ? (
                      <Lock size={14} />
                    ) : (
                      <>
                        <span className="text-sm font-black">{levelId}</span>
                        {score && score.stars === 3 && (
                          <div className="absolute -top-1 -right-1">
                            <div className="bg-amber-500 rounded-full p-0.5 shadow-lg">
                              <Zap size={8} className="text-white fill-white" />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
        <div className="bg-slate-900 rounded-[2rem] p-4 flex items-center justify-between pointer-events-auto shadow-2xl">
          <div className="flex items-center gap-3 pl-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Star className="text-amber-500 fill-amber-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Current Progress</p>
              <p className="text-sm font-black text-white">{Math.round((unlockedLevel / 120) * 100)}% Complete</p>
            </div>
          </div>
          <Button 
            onClick={() => onSelect(unlockedLevel)}
            className="bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-black text-xs px-6 h-12"
          >
            RESUME <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default LevelSelection;