"use client";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Save,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Info,
  Code,
  Sparkles,
} from 'lucide-react';
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

const LAST_LEVEL_ID = 120;

const HintEditorView: React.FC<HintEditorViewProps> = ({ level: initialLevel, onClose }) => {
  const [currentLevelId, setCurrentLevelId] = useState(initialLevel.id);
  const [currentLevel, setCurrentLevel] = useState<Level>(initialLevel);
  const [currentPaths, setCurrentPaths] = useState<Record<string, Point[]>>({});
  const [completedColors, setCompletedColors] = useState<Set<string>>(new Set());
  const [resetKey, setResetKey] = useState(0);
  const [savedLevelIds, setSavedLevelIds] = useState<number[]>([]);
  const [collectedLevels, setCollectedLevels] = useState<Record<number, Level>>({});

  const loadLevelData = useCallback((id: number) => {
    const nextLevel = generatePlayableLevel(id);
    setCurrentLevel(nextLevel);
    setCurrentPaths(nextLevel.solutions || {});
    setCompletedColors(new Set());
    setResetKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    setCurrentLevelId(initialLevel.id);
  }, [initialLevel.id]);

  useEffect(() => {
    loadLevelData(currentLevelId);
  }, [currentLevelId, loadLevelData]);

  const handlePathsChange = useCallback((paths: Record<string, Point[]>) => {
    setCurrentPaths(paths);
  }, []);

  const handleCompletedColorsChange = useCallback((colors: Set<string>) => {
    setCompletedColors(colors);
  }, []);

  const isFullySolved = useMemo(
    () => currentLevel.pairs.length > 0 && currentLevel.pairs.every(pair => completedColors.has(pair.color)),
    [currentLevel.pairs, completedColors]
  );

  const hasAnyPaths = Object.keys(currentPaths).some(color => (currentPaths[color] || []).length > 0);
  const hasSavedSolution = Object.keys(currentLevel.solutions || {}).length > 0;
  const collectedCount = Object.keys(collectedLevels).length;
  const canCopyLevels = isFullySolved || collectedCount > 0;
  const levelsReadyToCopyCount = collectedCount + (isFullySolved && !collectedLevels[currentLevelId] ? 1 : 0);

  const buildExportLevel = useCallback((): Level => {
    return {
      ...currentLevel,
      solutions: { ...currentPaths },
    };
  }, [currentLevel, currentPaths]);

  const handleSave = useCallback(() => {
    if (!isFullySolved) {
      toast.error('Finish the whole level first.', {
        description: 'Every color path must be connected before saving it as a hint.',
      });
      return;
    }

    const levelToSave = buildExportLevel();
    saveCustomHint(levelToSave);
    setSavedLevelIds(prev => (prev.includes(currentLevelId) ? prev : [...prev, currentLevelId]));
    setCollectedLevels(prev => ({
      ...prev,
      [levelToSave.id]: levelToSave,
    }));
    setCurrentLevel(levelToSave);

    toast.success(`Hint saved for level ${currentLevelId}`, {
      description: 'This hint is now stored locally and added to your code export collection.',
      icon: '💾',
    });
  }, [buildExportLevel, currentLevelId, isFullySolved]);

  const handleCopyCode = useCallback(async () => {
    const nextCollectedLevels = { ...collectedLevels };

    if (isFullySolved) {
      const levelToCollect = buildExportLevel();
      nextCollectedLevels[levelToCollect.id] = levelToCollect;
      setCollectedLevels(nextCollectedLevels);
    }

    const levelsToCopy = Object.values(nextCollectedLevels).sort((a, b) => a.id - b.id);

    if (levelsToCopy.length === 0) {
      toast.error('Nothing to copy yet.', {
        description: 'Solve at least one level first, then press Code.',
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(JSON.stringify(levelsToCopy, null, 2));
      toast.success(`Copied ${levelsToCopy.length} level${levelsToCopy.length === 1 ? '' : 's'}`, {
        description: 'The clipboard now contains all collected level entries as one array.',
        icon: '📋',
      });
    } catch {
      toast.error('Copy failed.', {
        description: 'Your browser blocked clipboard access. Try again.',
      });
    }
  }, [buildExportLevel, collectedLevels, isFullySolved]);

  const handleReset = useCallback(() => {
    setCurrentPaths({});
    setCompletedColors(new Set());
    setResetKey(prev => prev + 1);
  }, []);

  const goToPreviousLevel = useCallback(() => {
    setCurrentLevelId(prev => Math.max(1, prev - 1));
  }, []);

  const goToNextLevel = useCallback(() => {
    setCurrentLevelId(prev => Math.min(LAST_LEVEL_ID, prev + 1));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-[#07111f]/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
    >
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-white sm:text-xl">Hint Editor</h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                Build permanent manual hints
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <X size={22} />
          </Button>
        </div>

        <div className="mb-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPreviousLevel}
              disabled={currentLevelId <= 1}
              className="h-12 w-12 rounded-full bg-white/5 text-white hover:bg-white/10 disabled:opacity-25"
            >
              <ChevronLeft size={24} />
            </Button>

            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">Level</span>
              <span className="text-4xl font-black leading-none text-white tabular-nums">{currentLevelId}</span>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-white/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">
                  {currentLevel.size} × {currentLevel.size}
                </span>
                {hasSavedSolution && (
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
                    Saved hint exists
                  </span>
                )}
                {savedLevelIds.includes(currentLevelId) && (
                  <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
                    Saved this session
                  </span>
                )}
                {levelsReadyToCopyCount > 0 && (
                  <span className="rounded-full bg-violet-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-violet-300">
                    {levelsReadyToCopyCount} ready to copy
                  </span>
                )}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNextLevel}
              disabled={currentLevelId >= LAST_LEVEL_ID}
              className="h-12 w-12 rounded-full bg-white/5 text-white hover:bg-white/10 disabled:opacity-25"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 px-3 py-4 sm:px-6">
          <div className="flex h-full items-center justify-center">
            <div className="relative w-full flex justify-center">
              <PuzzleGrid
                key={`${currentLevelId}-${resetKey}`}
                level={currentLevel}
                initialPaths={currentPaths}
                onComplete={() => undefined}
                onPathsChange={handlePathsChange}
                onCompletedColorsChange={handleCompletedColorsChange}
                isMuted={false}
                isHapticEnabled={true}
                isColorblindMode={false}
              />

              <AnimatePresence>
                {isFullySolved && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 8 }}
                    className="absolute right-2 top-2 flex items-center gap-2 rounded-full bg-emerald-400 px-3 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-slate-950 shadow-xl shadow-emerald-500/25"
                  >
                    <CheckCircle2 size={16} />
                    Solved
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[2rem] border border-white/10 bg-white/5 p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={!hasAnyPaths}
              className="h-14 rounded-2xl border-white/10 bg-white/5 font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 disabled:opacity-40"
            >
              <RotateCcw size={18} />
              Reset
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyCode}
              disabled={!canCopyLevels}
              className="h-14 rounded-2xl border-cyan-400/20 bg-cyan-400/10 font-black uppercase tracking-[0.18em] text-cyan-200 hover:bg-cyan-400/15 disabled:opacity-40"
            >
              <Code size={18} />
              Code {levelsReadyToCopyCount > 0 ? `(${levelsReadyToCopyCount})` : ''}
            </Button>

            <Button
              onClick={handleSave}
              disabled={!isFullySolved}
              className="h-14 rounded-2xl bg-emerald-400 font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-300 disabled:bg-white/10 disabled:text-slate-500"
            >
              <Save size={18} />
              Save as hint
            </Button>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-2xl bg-slate-950/30 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Info size={14} className="mt-0.5 shrink-0" />
            <span>
              {isFullySolved
                ? 'Save stores the hint locally and adds it to your export set. Code copies every collected level together, not just the current one.'
                : canCopyLevels
                  ? 'You already have collected levels. Press Code to copy them all together, or solve this level to add it too.'
                  : 'Connect every color to unlock Save and start building a multi-level code export.'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HintEditorView;