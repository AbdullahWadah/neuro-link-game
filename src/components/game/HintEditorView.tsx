"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Eraser, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Level, Point } from '../../types/game';
import { saveCustomLevelToStorage } from '../../data/manualLevels';
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

  const activePair = level.pairs[activePairIndex];
  const currentPath = paths[activePairIndex] || [];

  const isPathValid = useMemo(() => {
    if (currentPath.length < 2) return false;
    const start = currentPath[0];
    const end = currentPath[currentPath.length - 1];
    
    return (
      (start.x === activePair.start.x && start.y === activePair.start.y && end.x === activePair.end.x && end.y === activePair.end.y) ||
      (start.x === activePair.end.x && start.y === activePair.end.y && end.x === activePair.start.x && end.y === activePair.start.y)
    );
  }, [currentPath, activePair]);

  const handleCellClick = (x: number, y: number) => {
    setPaths(prev => {
      const newPaths = [...prev];
      const path = [...(newPaths[activePairIndex] || [])];
      
      const existingIdx = path.findIndex(p => p.x === x && p.y === y);
      
      if (existingIdx !== -1) {
        // If clicking an existing node, truncate the path to that point
        newPaths[activePairIndex] = path.slice(0, existingIdx + 1);
      } else {
        // If path is empty, must start at an endpoint
        if (path.length === 0) {
          const isEndpoint = (x === activePair.start.x && y === activePair.start.y) || 
                            (x === activePair.end.x && y === activePair.end.y);
          if (!isEndpoint) {
            toast.error("Path must start at one of the nodes.");
            return prev;
          }
        } else {
          // Must be orthogonal to last node
          const last = path[path.length - 1];
          const dx = Math.abs(x - last.x);
          const dy = Math.abs(y - last.y);
          if (dx + dy !== 1) {
            toast.error("Hints must be step-by-step (orthogonal)");
            return prev;
          }
          
          // Cannot pass through other pair endpoints (optional but cleaner)
          const hitsOther = level.pairs.some((p, idx) => 
            idx !== activePairIndex && 
            ((x === p.start.x && y === p.start.y) || (x === p.end.x && y === p.end.y))
          );
          if (hitsOther) {
            toast.error("Path cannot pass through other nodes.");
            return prev;
          }
        }
        newPaths[activePairIndex] = [...path, { x, y }];
      }
      
      return newPaths;
    });
  };

  const handleSave = () => {
    const allValid = paths.every((path, idx) => {
      if (path.length < 2) return false;
      const p = level.pairs[idx];
      const start = path[0];
      const end = path[path.length - 1];
      return (
        (start.x === p.start.x && start.y === p.start.y && end.x === p.end.x && end.y === p.end.y) ||
        (start.x === p.end.x && start.y === p.end.y && end.x === p.start.x && end.y === p.start.y)
      );
    });

    if (!allValid) {
      toast.error("All pairs must have a valid path connecting their nodes.");
      return;
    }

    const updatedSolutions: Record<string, Point[]> = {};
    level.pairs.forEach((pair, i) => {
      updatedSolutions[pair.color] = paths[i];
    });

    const updatedLevel: Level = {
      ...level,
      solutions: updatedSolutions
    };

    saveCustomLevelToStorage(updatedLevel);
    toast.success(`Imaginary paths for Level ${level.id} saved!`, {
      description: "The hint system will now use these paths."
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
          <h2 className="text-xl font-black text-white">IMAGINARY PATH EDITOR</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Level {level.id} • {level.size}x{level.size}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full text-white hover:bg-white/10">
          <X size={24} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Grid Section */}
        <div className="relative aspect-square w-full max-w-sm bg-white/5 rounded-[2rem] p-6 border border-white/10">
          <div 
            className="grid h-full w-full gap-2"
            style={{ 
              gridTemplateColumns: `repeat(${level.size}, 1fr)`,
              gridTemplateRows: `repeat(${level.size}, 1fr)`
            }}
          >
            {Array.from({ length: level.size * level.size }).map((_, i) => {
              const x = i % level.size;
              const y = Math.floor(i / level.size);
              
              const pairIdx = level.pairs.findIndex(p => 
                (p.start.x === x && p.start.y === y) || (p.end.x === x && p.end.y === y)
              );
              const isEndpoint = pairIdx !== -1;
              const isActiveEndpoint = pairIdx === activePairIndex;
              
              const isInActivePath = currentPath.some(p => p.x === x && p.y === y);

              return (
                <div 
                  key={i}
                  onClick={() => handleCellClick(x, y)}
                  className={`relative rounded-xl border border-white/5 flex items-center justify-center cursor-pointer transition-all ${
                    isInActivePath ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  
                  {isEndpoint && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`rounded-full shadow-lg transition-all ${
                          isActiveEndpoint ? 'w-4/5 h-4/5 ring-4 ring-white/20' : 'w-3/5 h-3/5 opacity-40'
                        }`}
                        style={{ backgroundColor: level.pairs[pairIdx].color }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SVG Overlay for the imaginary line */}
          <svg className="absolute inset-0 pointer-events-none w-full h-full p-6" viewBox="0 0 100 100" preserveAspectRatio="none">
            {currentPath.length >= 2 && (
              <polyline
                points={currentPath.map(p => `${((p.x + 0.5) / level.size) * 100},${((p.y + 0.5) / level.size) * 100}`).join(' ')}
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="2, 4"
                className="opacity-60"
              />
            )}
          </svg>
        </div>

        {/* Controls Section */}
        <div className="w-full max-w-xs space-y-4">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Select Pair to Edit</h3>
            <div className="grid grid-cols-2 gap-2">
              {level.pairs.map((pair, i) => {
                const path = paths[i] || [];
                const valid = path.length >= 2 && (
                  (path[0].x === pair.start.x && path[0].y === pair.start.y && path[path.length-1].x === pair.end.x && path[path.length-1].y === pair.end.y) ||
                  (path[0].x === pair.end.x && path[0].y === pair.end.y && path[path.length-1].x === pair.start.x && path[path.length-1].y === pair.start.y)
                );

                return (
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
                    {valid ? (
                      <CheckCircle2 size={12} className="ml-auto text-emerald-500" />
                    ) : (
                      <AlertCircle size={12} className="ml-auto text-amber-500 opacity-50" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className={`p-3 rounded-xl border text-[10px] font-bold flex items-center gap-2 ${isPathValid ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
              {isPathValid ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
              {isPathValid ? "PATH CONNECTED" : "PATH INCOMPLETE"}
            </div>

            <Button 
              variant="outline" 
              onClick={() => {
                const newPaths = [...paths];
                newPaths[activePairIndex] = [];
                setPaths(newPaths);
              }}
              className="w-full border-white/10 hover:bg-white/5 text-white rounded-xl font-bold gap-2"
            >
              <Eraser size={18} /> CLEAR PATH
            </Button>
            <Button 
              onClick={handleSave}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-6 font-bold gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Save size={18} /> SAVE ALL HINTS
            </Button>
          </div>

          <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Info size={14} className="text-blue-400 shrink-0 mt-0.5" />
            <p className="text-[9px] font-medium text-blue-200 leading-relaxed">
              Draw the "Imaginary Path" from one node to the other. This exact path will be shown as a hint in-game.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HintEditorView;