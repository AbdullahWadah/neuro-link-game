import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Star, ChevronRight, Zap, Target } from 'lucide-react';
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
  { name: 'Core Network', range: [1, 15], size: '5x5', color: 'bg-emerald-500' },
  { name: 'Synaptic Bridge', range: [16, 35], size: '6x6', color: 'bg-blue-500' },
  { name: 'Neural Cortex', range: [36, 55], size: '7x7', color: 'bg-purple-500' },
  { name: 'Cognitive Hub', range: [56, 75], size: '7x7', color: 'bg-amber-500' },
  { name: 'Advanced Logic', range: [76, 95], size: '7x7', color: 'bg-orange-500' },
  { name: 'Master Grid', range: [96, 120], size: '8x8', color: 'bg-rose-500' },
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
    // Auto-scroll to current level on mount
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
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col"
    >
      <div className="p-6 flex items-center justify-between border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-10">
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight">NEURAL MAP</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">120 Nodes Detected</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="rounded-full text-white hover:bg-white/10"
        >
          <X size={24} />
        </Button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-10 pb-32 custom-scrollbar"
      >
        {SECTORS.map((sector) => (
          <div key={sector.name} className="space-y-4">
            <div className="flex items-end justify-between px-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${sector.color} animate-pulse`} />
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">{sector.name}</h3>
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">{sector.size} Resolution</p>
              </div>
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">
                {Math.min(sector.range[1], unlockedLevel) >= sector.range[0] 
                  ? `${Math.min(sector.range[1], unlockedLevel) - sector.range[0] + 1} / ${sector.range[1] - sector.range[0] + 1}`
                  : `0 / ${sector.range[1] - sector.range[0] + 1}`} Unlocked
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
                    whileHover={!isLocked ? { scale: 1.05, y: -2 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                    onClick={() => !isLocked && onSelect(levelId)}
                    className={`
                      relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all border
                      ${isLocked 
                        ? 'bg-white/5 border-white/5 text-slate-700 cursor-not-allowed' 
                        : isCurrent 
                          ? 'bg-white border-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                          : 'bg-slate-900 border-white/10 text-white hover:border-white/30'}
                    `}
                  >
                    {isLocked ? (
                      <Lock size={12} />
                    ) : (
                      <>
                        <span className="text-sm font-black">{levelId}</span>
                        {isCurrent && (
                          <div className="absolute -top-1 -left-1">
                            <div className="bg-blue-500 rounded-full p-0.5 shadow-lg">
                              <Target size={8} className="text-white" />
                            </div>
                          </div>
                        )}
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

      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-none">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Star className="text-amber-500 fill-amber-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Sync</p>
              <p className="text-sm font-black text-white">{Math.round((unlockedLevel / 120) * 100)}% Complete</p>
            </div>
          </div>
          <Button 
            onClick={() => onSelect(unlockedLevel)}
            className="bg-white text-slate-950 hover:bg-slate-200 rounded-xl font-black text-xs px-4"
          >
            RESUME <ChevronRight size={14} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default LevelSelection;