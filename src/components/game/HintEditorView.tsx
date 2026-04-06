"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Info, Code, Trash2 } from 'lucide-react';
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
  
  // Track all levels solved in this session
  const [sessionSolvedLevels, setSessionSolvedLevels] = useState<Record<number, Level>>({});

  const loadLevelData = useCallback((id: number) => {
    const level = generatePlayableLevel(id);
    setCurrentLevel(level);
    // If we already solved it in this session, show that solution
    if (sessionSolvedLevels[id]) {
      setCurrentPaths(sessionSolvedLevels[id].solutions || {});
    } else {
      setCurrentPaths(level.solutions || {});
    }
    setResetKey(prev => prev + 1);
  }, [sessionSolvedLevels]);

  useEffect(() => {
    loadLevelData(currentLevelId);
  }, [currentLevelId, loadLevelData]);

  const handlePathsChange = useCallback((paths: Record<string, Point[]>) => {
    setCurrentPaths(paths);
  }, []);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
    
    // Auto-save to session if fully solved
    const allConnected = currentLevel.pairs.every(p => colors.has(p.color));
    if (allConnected) {
      const solvedLevel: Level = {
        ...currentLevel,
        solutions: { ...currentPaths }
      };
      setSessionSolvedLevels(prev => ({
        ...prev,
        [currentLevelId]: solvedLevel
      }));
    }
  }, [currentLevel, currentPaths, currentLevelId]);

  const handleCopyAllCode = () => {
    const solvedArray = Object.values(sessionSolvedLevels).sort((a, b) => a.id - b.id);
    
    if (solvedArray.length === 0) {
      toast.error("think
The previous response was cut off in the middle of the `handleCopyAllCode` function in `src/components/game/HintEditorView.tsx`. I need to complete the file content starting from where it stopped.

The last line was: `toast.error("`

I will continue the `dyad-write` block for `src/components/game/HintEditorView.tsx`.

Plan:
1. Complete the `handleCopyAllCode` function.
2. Complete the `handleSave` function.
3. Complete the `nextLevel` and `prevLevel` functions.
4. Complete the JSX return statement.
5. Add the `dyad-chat-summary`.

Wait, the user said "Continue exactly where you left off without any preamble".
However, I must use the `<dyad-write>` tag to provide the code. I cannot just output text.
The instructions say: "Only use ONE <dyad-write> block per file that you write!" and "do NOT be lazy and ALWAYS write the entire file. It needs to be a complete file."

So I must rewrite the entire file `src/components/game/HintEditorView.tsx` with the completed logic.

Logic to include:
- `sessionSolvedLevels` state to track multiple solved levels.
- `handleCompletedColorsChange` to auto-add to session.
- `handleCopyAllCode` to copy the entire session as an array.
- `handleSave` to save the current level to local storage.
- UI buttons for Reset, Clear Session, and Copy All.

Let's write the full file.<dyad-write path="src/components/game/HintEditorView.tsx" description="Completing the Hint Editor to support multi-level solving and bulk code copying.">
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Info, Code, Trash2 } from 'lucide-react';
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
  
  // Track all levels solved in this session
  const [sessionSolvedLevels, setSessionSolvedLevels] = useState<Record<number, Level>>({});

  const loadLevelData = useCallback((id: number) => {
    const level = generatePlayableLevel(id);
    setCurrentLevel(level);
    // If we already solved it in this session, show that solution
    if (sessionSolvedLevels[id]) {
      setCurrentPaths(sessionSolvedLevels[id].solutions || {});
    } else {
      setCurrentPaths(level.solutions || {});
    }
    setResetKey(prev => prev + 1);
  }, [sessionSolvedLevels]);

  useEffect(() => {
    loadLevelData(currentLevelId);
  }, [currentLevelId, loadLevelData]);

  const handlePathsChange = useCallback((paths: Record<string, Point[]>) => {
    setCurrentPaths(paths);
    
    // Check if this change completes the level
    const allConnected = currentLevel.pairs.every(p => completedColors.has(p.color));
    if (allConnected) {
      const solvedLevel: Level = {
        ...currentLevel,
        solutions: { ...paths }
      };
      setSessionSolvedLevels(prev => ({
        ...prev,
        [currentLevelId]: solvedLevel
      }));
    }
  }, [currentLevel, completedColors, currentLevelId]);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
    
    const allConnected = currentLevel.pairs.every(p => colors.has(p.color));
    if (allConnected) {
      const solvedLevel: Level = {
        ...currentLevel,
        solutions: { ...currentPaths }
      };
      setSessionSolvedLevels(prev => ({
        ...prev,
        [currentLevelId]: solvedLevel
      }));
    }
  }, [currentLevel, currentPaths, currentLevelId]);

  const handleCopyAllCode = () => {
    const solvedArray = Object.values(sessionSolvedLevels).sort((a, b) => a.id - b.id);
    
    if (solvedArray.length === 0) {
      toast.error("No levels solved yet!", {
        description: "Solve at least one level to copy its code."
      });
      return;
    }

    const jsonString = JSON.stringify(solvedArray, null, 2);
    navigator.clipboard.writeText(jsonString);
    
    toast.success(`Copied ${solvedArray.length} levels!`, {
      description: "Paste this into src/data/manualLevels.ts",
      icon: '📋'
    });
  };

  const handleSaveCurrent = () => {
    const allConnected = currentLevel.pairs.every(p => completedColors.has(p.color));
    
    if (!allConnected) {
      toast.error("Puzzle incomplete!");
      return;
    }

    const updatedLevel: Level = {
      ...currentLevel,
      solutions: { ...currentPaths }
    };

    saveCustomHint(updatedLevel);
    toast.success(`Level ${currentLevelId} saved to browser!`);
  };

  const nextLevel = () => {
    if (currentLevelId < 120) setCurrentLevelId(prev => prev + 1);
  };

  const prevLevel = () => {
    if (currentLevelId > 1) setCurrentLevelId(prev => prev - 1);
  };

  const isFullySolved = currentLevel.pairs.every(p => completedColors.has(p.color));
  const sessionCount = Object.keys(sessionSolvedLevels).length;

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
            <Code size={20} />
          </div>
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-tight">Bulk Hint Editor</h2>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              {sessionCount} levels solved in session
            </p>
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
            onClick={() => {
              setCurrentPaths({});
              setResetKey(prev => prev + 1);
            }}
            className="flex-1 border-white/10 bg-white/5 text-white rounded-xl py-6 font-bold gap-2 hover:bg-white/10"
          >
            <RotateCcw size={18} /> RESET
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => setSessionSolvedLevels({})}
            className="flex-1 border-white/10 bg-white/5 text-red-400 rounded-xl py-6 font-bold gap-2 hover:bg-red-500/10"
          >
            <Trash2 size={18} /> CLEAR
          </Button>

          <Button 
            onClick={handleCopyAllCode}
            disabled={sessionCount === 0}
            className={`flex-[2] rounded-xl py-6 font-black text-base gap-2 shadow-2xl transition-all ${
              sessionCount > 0 
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/20" 
                : "bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed"
            }`}
          >
            <Code size={20} /> COPY {sessionCount > 0 ? `(${sessionCount})` : ""}
          </Button>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          <Info size={10} />
          {isFullySolved ? "Level solved! It's added to your copy session." : "Solve levels to add them to the bulk copy session."}
        </div>
      </div>
    </motion.div>
  );
};

export default HintEditorView;