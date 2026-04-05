"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Eraser, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Level, Point } from '../../types/game';
import { createLevel, saveCustomLevelToStorage } from '../../data/manualLevels';
import { toast } from 'sonner';

interface HintEditorViewProps {
  level: Level;
  onClose: () => void;
}

const HintEditorView: React.FC<HintEditorViewProps> = ({ level, onClose }) => {
  const [paths, setPaths] = useState<Point[][]>([]);
  const [activePairIndex, setActivePairIndex] = useState<number>(0);

  useEffect(() => {
    // Initialize paths from existing solutions if available
    const initialPaths = level.pairs.map(pair => level.solutions[pair.color] || []);
    setPaths(initialPaths);
  }, [level]);

  const handleCellClick = (x: number, y: number) => {
    setPaths(prev => {
      const newPaths = [...prev];
      const currentPath = [...(newPaths[activePairIndex] || [])];
      
      const existingIdx = currentPath.findIndex(p => p.x === x && p.y === y);
      
      if (existingIdx !== -1) {
        // Remove node and everything after it to maintain a valid path
        newPaths[activePairIndex] = currentPath.slice(0, existingIdx);
      } else {
        // Ensure orthogonal movement
        if (currentPath.length > 0) {
          const last = currentPath[currentPath.length - 1];
          const dx = Math.abs(x - last.x);
          const dy = Math.abs(y - last.y);
          if (dx + dy > 1) {
            toast.error("Hints must be step-by-step (orthogonal)");
            return prev;
          }
        }
        newPaths[activePairIndex] = [...currentPath, { x, y }];
      }
      
      return newPaths;
    });
  };

  const handleSave = () => {
    const validPaths = paths.filter(p => p.length >= 2);
    if (validPaths.length < level.pairs.length) {
      toast.error("Please define paths for all pairs before saving.");
      return;
    }

    const updatedLevel = createLevel(level.id, level.size, paths);
    saveCustomLevelToStorage(updatedLevel);
    toast.success(`Hints for Level ${level.id} updated!`, {
      description: "Restart the level to see your new hints."
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-slate-950 flex flex-col p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black text-white">HINT EDITOR</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Level {level.id} • {level.size}x{level.size}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full text-white hover:bg-white/10">
          <X size={24} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Grid Section */}
        <div 
          className="aspect-square w-full max-w-sm bg-white/5 rounded-[2rem] p-6 border border-white/10 grid gap-2"
          style={{ 
            gridTemplateColumns: `repeat(${level.size}, 1fr)`,
            gridTemplateRows: `repeat(${level.size}, 1fr)`
          }}
        >
          {Array.from({ length: level.size * level.size }).map((_, i) => {
            const x = i % level.size;
            const y = Math.floor(i / level.size);
            
            let cellColor = 'transparent';
            let isEndpoint = false;
            let isActivePath = false;
            
            paths.forEach((path, pIdx) => {
              const ptIdx = path.findIndex(p => p.x === x && p.y === y);
              if (ptIdx !== -1) {
                cellColor = level.pairs[pIdx].color;
                if (ptIdx === 0 || ptIdx === path.length - 1) isEndpoint = true;
                if (pIdx === activePairIndex) isActivePath = true;
              }
            });

            // Also show original endpoints if path is empty
            const originalPairIdx = level.pairs.findIndex(p => 
              (p.start.x === x && p.start.y === y) || (p.end.x === x && p.end.y === y)
            );

            return (
              <div 
                key={i}
                onClick={() => handleCellClick(x, y)}
                className={`relative rounded-xl border border-white/5 flex items-center justify-center cursor-pointer transition-all ${isActivePath ? 'bg-white/5' : 'hover:bg-white/5'}`}
              >
                <div className="w-1 h-1 rounded-full bg-white/10" />
                
                {(cellColor !== 'transparent' || originalPairIdx !== -1) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className={`rounded-full shadow-lg transition-all ${
                        isEndpoint || originalPairIdx !== -1 ? 'w-4/5 h-4/5 ring-2 ring-black/20' : 'w-1/2 h-1/2 opacity-40'
                      }`}
                      style={{ backgroundColor: cellColor !== 'transparent' ? cellColor : level.pairs[originalPairIdx].color }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls Section */}
        <div className="w-full max-w-xs space-y-4">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Select Pair</h3>
            <div className="grid grid-cols-2 gap-2">
              {level.pairs.map((pair, i) => (
                <button
                  key={i}
                  onClick={() => setActivePairIndex(i)}
                  className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                    activePairIndex === i 
                      ? 'bg-white/10 border-white/20 ring-1 ring-white/20' 
                      : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: pair.color }} />
                  <span className="text-[10px] font-bold text-white">Pair {i + 1}</span>
                  {paths[i]?.length >= 2 && <CheckCircle2 size={12} className="ml-auto text-emerald-500" />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button 
              variant="outline" 
              onClick={() => {
                const newPaths = [...paths];
                newPaths[activePairIndex] = [];
                setPaths(newPaths);
              }}
              className="w-full border-white/10 hover:bg-white/5 text-white rounded-xl font-bold gap-2"
            >
              <Eraser size={18} /> CLEAR CURRENT PATH
            </Button>
            <Button 
              onClick={handleSave}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-6 font-bold gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Save size={18} /> SAVE HINTS
            </Button>
          </div>

          <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-[9px] font-medium text-blue-200 leading-relaxed">
              Draw the path from one node to the other. This path will be shown when the player uses a hint.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HintEditorView;