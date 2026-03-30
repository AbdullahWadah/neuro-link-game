"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Trash2, Plus, Copy, Check, Play, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Point } from '../types/game';
import { createLevel, saveCustomLevelToStorage, getCustomLevel, clearAllCustomLevels } from '../data/manualLevels';
import { useNavigate } from 'react-router-dom';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

const Editor = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState(5);
  const [levelId, setLevelId] = useState(1);
  const [paths, setPaths] = useState<Point[][]>([]);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Load level data when levelId changes
  useEffect(() => {
  const custom = getCustomLevel(levelId);

  if (custom && custom.pairs && custom.solutions) {
    setSize(custom.size);

    const rebuiltPaths = custom.pairs.map(pair =>
      custom.solutions[pair.color] || []
    );

    setPaths(rebuiltPaths);
    setActiveColorIndex(0);
  } else {
    setPaths([]);
    setSize(5);
    setActiveColorIndex(0);
  }
}, [levelId]);

  const handleCellClick = (x: number, y: number) => {
    if (activeColorIndex === null) {
      toast.info("Select a color on the left first!");
      return;
    }

    setPaths(prev => {
      const newPaths = [...prev];
      const currentPath = [...(newPaths[activeColorIndex] || [])];
      
      const existingIdx = currentPath.findIndex(p => p.x === x && p.y === y);
      
      if (existingIdx !== -1) {
        newPaths[activeColorIndex] = currentPath.filter((_, i) => i !== existingIdx);
      } else {
        newPaths[activeColorIndex] = [...currentPath, { x, y }];
      }
      
      return newPaths;
    });
  };

  const addNewColor = () => {
    if (paths.length >= COLORS.length) {
      toast.error("Maximum colors reached");
      return;
    }
    setPaths([...paths, []]);
    setActiveColorIndex(paths.length);
  };

  const handleSave = (silent = false) => {
    const validPaths = paths.filter(p => p.length >= 2);
    
    if (validPaths.length !== paths.length) {
  toast.error("Some paths are invalid (must have at least 2 nodes)");
  return false;
}

    const level = createLevel(levelId, size, validPaths);
    saveCustomLevelToStorage(level);
    
    if (!silent) {
      toast.success(`Level ${levelId} Implemented!`, {
        description: "This is now the official version of this level."
      });
    }
    return true;
  };

  const handleSaveAndPlay = () => {
    if (handleSave(true)) {
      localStorage.setItem('neurolinks_level', levelId.toString());
      toast.success("Level saved! Launching...");
      setTimeout(() => navigate('/'), 500);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure? This will delete ALL levels you have built so far.")) {
      clearAllCustomLevels();
      setPaths([]);
      toast.success("All custom levels cleared.");
    }
  };

  const exportAllLevels = () => {
    const saved = localStorage.getItem('neurolinks_custom_levels');
    if (!saved) {
      toast.error("No levels to export!");
      return;
    }
    const blob = new Blob([saved], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neurolinks_levels.json';
    a.click();
    toast.success("All levels exported as JSON!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/')} className="rounded-full hover:bg-white/10">
              <ArrowLeft size={24} />
            </Button>
            <div>
              <h1 className="text-3xl font-black tracking-tighter">LEVEL BUILDER</h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Creating the game's core content</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleClearAll} variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl font-bold gap-2">
              <RotateCcw size={18} />
              WIPE ALL
            </Button>
            <Button onClick={exportAllLevels} variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl font-bold gap-2">
              <Download size={18} />
              EXPORT ALL
            </Button>
            <Button onClick={() => handleSave()} className="bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold gap-2 border border-white/10">
              <Save size={18} />
              IMPLEMENT LEVEL
            </Button>
            <Button onClick={handleSaveAndPlay} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold gap-2 shadow-lg shadow-emerald-500/20">
              <Play size={18} />
              SAVE & TEST
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 block">Level ID (1-120)</label>
                <Input 
                  type="number" 
                  value={levelId} 
                  min={1}
                  max={120}
                  onChange={(e) => setLevelId(parseInt(e.target.value) || 1)}
                  className="bg-white/5 border-white/10 rounded-xl font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 block">Grid Size ({size}x{size})</label>
                <div className="flex gap-2">
                  {[4, 5, 6, 7, 8].map(s => (
                    <button
                      key={s}
                      onClick={() => {
                        if (confirm("Changing size will clear the current design. Continue?")) {
                          setSize(s);
                          setPaths([]);
                          setActiveColorIndex(null);
                        }
                      }}
                      className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${size === s ? 'bg-white text-slate-950' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Neural Paths</h3>
                <Button size="icon" variant="ghost" onClick={addNewColor} className="rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                  <Plus size={16} />
                </Button>
              </div>
              <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {paths.map((path, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveColorIndex(i)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${activeColorIndex === i ? 'bg-white/10 border-white/20 ring-1 ring-white/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full shadow-inner" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-tighter">Path {i + 1}</span>
                        <span className="text-[8px] font-bold opacity-40">{path.length} Nodes</span>
                      </div>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-7 w-7 text-slate-400 hover:text-white hover:bg-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        const newPaths = [...paths];
                        newPaths[i] = [];
                        setPaths(newPaths);
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                ))}
                {paths.length === 0 && (
                  <p className="text-center py-8 text-xs font-bold text-slate-600 uppercase tracking-widest">No paths added</p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col items-center justify-center">
            <div 
              className="aspect-square w-full max-w-lg bg-white/5 rounded-[3rem] p-8 border border-white/10 grid gap-3 shadow-2xl"
              style={{ 
                gridTemplateColumns: `repeat(${size}, 1fr)`,
                gridTemplateRows: `repeat(${size}, 1fr)`
              }}
            >
              {Array.from({ length: size * size }).map((_, i) => {
                const x = i % size;
                const y = Math.floor(i / size);
                
                let cellColor = 'transparent';
                let isEndpoint = false;
                
                paths.forEach((path, pIdx) => {
                  const ptIdx = path.findIndex(p => p.x === x && p.y === y);
                  if (ptIdx !== -1) {
                    cellColor = COLORS[pIdx % COLORS.length];
                    if (ptIdx === 0 || ptIdx === path.length - 1) isEndpoint = true;
                  }
                });

                return (
                  <div 
                    key={i}
                    onClick={() => handleCellClick(x, y)}
                    className="relative rounded-2xl border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all group"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/30" />
                    
                    {cellColor !== 'transparent' && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`absolute inset-0 flex items-center justify-center`}
                      >
                        {isEndpoint ? (
                          <div 
                            className="w-4/5 h-4/5 rounded-full shadow-lg ring-4 ring-black/20"
                            style={{ backgroundColor: cellColor }}
                          />
                        ) : (
                          <div 
                            className="w-1/2 h-1/2 rounded-full opacity-40 blur-[2px]"
                            style={{ backgroundColor: cellColor }}
                          />
                        )}
                      </motion.div>
                    )}
                    <span className="absolute bottom-1 right-1 text-[6px] font-black opacity-10 pointer-events-none">{x},{y}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-widest">Click cells to draw paths</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-black uppercase tracking-widest">First/Last nodes are endpoints</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;