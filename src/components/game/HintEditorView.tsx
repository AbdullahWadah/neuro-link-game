"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PuzzleGrid from './PuzzleGrid';
import { Level, Point } from '../../types/game';
import { generatePlayableLevel } from '../../data/levels';
import { saveCustomHint } from '../../utils/storage';
import { toast } from 'sonner';

interface HintEditorViewProps {
  level: Level;
  onClose: () => void;
}

const HintEditorView: React.FC<HintEditorViewProps> = ({ level: initialLevel, onClose }) => {
  const [currentLevelId, setCurrentLevelId] = useState(initialLevel.id);
  const [currentLevel, setCurrentLevel] = useState<Level>(initialLevel);
  const [currentPaths, setCurrentPaths] = useState<Record<string, Point[]>>({});
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [resetKey, setResetKey] = useState(0);

  // Load level and its existing hints when ID changes
  useEffect(() => {
    const level = generatePlayableLevel(currentLevelId);
    setCurrentLevel(level);
    setCurrentPaths(level.solutions || {});
    setResetKey(prev => prev + 1);
  }, [currentLevelId]);

  const handlePathsChange = useCallback((paths: Record<string, Point[]>) => {
    setCurrentPaths(paths);
  }, []);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
  }, []);

  const handleSave = () => {
    const allConnected = currentLevel.pairs.every(p => completedColors.has(p.color));
    
    if (!allConnected) {
      toast.error("Puzzle incomplete!", {
        description: "You must connect all nodes before saving this as the hint solution."
      });
      return;
    }

    const updatedLevel: Level = {
      ...currentLevel,
      solutions: currentPaths
    };

    saveCustomHint(updatedLevel);
    toast.success(`Hint solution for Level ${currentLevelId} saved!`, {
      icon: '🧠'
    });
  };

  const nextLevel = () => {
    if (currentLevelId < 120) setCurrentLevelId(prev => prev + 1);
  };

  const prevLevel = () => {
    if (currentLevelId > 1) setCurrentLevelId(prev => prev - 1);
  };

  const isFullySolved = currentLevel.pairs.every(p => completedColors.has(p.color));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-[#020617] flex flex-col p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
            <Save size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-tight">Master Hint Editor</h2>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Solve to define the hint path</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full text-white hover:bg-white/10">
          <X size={24} />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4 mb-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={prevLevel} 
          disabled={currentLevelId <= 1}
          className="rounded-full text-white hover:bg-white/10 disabled:opacity-20"
        >
          <ChevronLeft size={28} />
        </Button>
        
        <div className="text-center min-w-[100px]">
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em] block mb-0.5">Level</span>
          <span className="text-3xl font-black text-white tabular-nums">{currentLevelId}</span>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={nextLevel} 
          disabled={currentLevelId >= 120}
          className="rounded-full text-white hover:bg-white/10 disabled:opacity-20"
        >
          <ChevronRight size={28} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full flex justify-center">
          <PuzzleGrid 
            key={`${currentLevelId}-${resetKey}`}
            level={currentLevel}
            initialPaths={currentPaths}
            onComplete={() => {}} 
            onPathsChange={handlePathsChange}
            onCompletedColorsChange={handleCompletedColorsChange}
            isMuted={false}
            isHapticEnabled={true}
            isColorblindMode={false}
          />
          
          <AnimatePresence>
            {isFullySolved && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-2 -right-2 bg-emerald-500 text-white p-2 rounded-full shadow-xl z-50"
              >
                <CheckCircle2 size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3">
        <div className="flex gap-3 w-full max-w-sm">
          <Button 
            variant="outline" 
            onClick={() => setResetKey(prev => prev + 1)}
            className="flex-1 border-white/10 bg-white/5 text-white rounded-xl py-6 font-bold gap-2 hover:bg-white/10"
          >
            <RotateCcw size={18} /> RESET
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!isFullySolved}
            className={`flex-[2] rounded-xl py-6 font-black text-base gap-2 shadow-2xl transition-all ${
              isFullySolved 
                ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20" 
                : "bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed"
            }`}
          >
            <Save size={20} /> SAVE AS HINT
          </Button>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          <Info size={10} />
          Solve the puzzle completely to enable saving
        </div>
      </div>
    </motion.div>
  );
};

export default HintEditorView;