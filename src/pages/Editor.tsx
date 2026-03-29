"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Trash2, Plus, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Point } from '../types/game';

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

const Editor = () => {
  const [size, setSize] = useState(5);
  const [levelId, setLevelId] = useState(1);
  const [paths, setPaths] = useState<Point[][]>([]);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCellClick = (x: number, y: number) => {
    if (activeColorIndex === null) return;

    setPaths(prev => {
      const newPaths = [...prev];
      const currentPath = [...(newPaths[activeColorIndex] || [])];
      
      // Check if point already exists in this path
      const existingIdx = currentPath.findIndex(p => p.x === x && p.y === y);
      
      if (existingIdx !== -1) {
        // Remove from this point onwards
        newPaths[activeColorIndex] = currentPath.slice(0, existingIdx);
      } else {
        // Add point
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

  const generateCode = () => {
    const pathsString = paths
      .filter(p => p.length > 0)
      .map(p => `    [${p.map(pt => `{x:${pt.x}, y:${pt.y}}`).join(', ')}]`)
      .join(',\n');

    return `  createLevel(${levelId}, ${size}, [\n${pathsString}\n  ]),`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => window.history.back()} className="rounded-full">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-3xl font-black">LEVEL EDITOR</h1>
          </div>
          <Button onClick={copyToClipboard} className="bg-white text-slate-950 hover:bg-slate-200 rounded-xl font-bold gap-2">
            {copied ? <Check size={18} /> : <Copy size={18} />}
            COPY CODE
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 block">Level ID</label>
                <Input 
                  type="number" 
                  value={levelId} 
                  onChange={(e) => setLevelId(parseInt(e.target.value))}
                  className="bg-white/5 border-white/10 rounded-xl"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 block">Grid Size</label>
                <Input 
                  type="number" 
                  value={size} 
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="bg-white/5 border-white/10 rounded-xl"
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">COLORS</h3>
                <Button size="icon" variant="ghost" onClick={addNewColor} className="rounded-full h-8 w-8 bg-white/10">
                  <Plus size={16} />
                </Button>
              </div>
              <div className="space-y-2">
                {paths.map((path, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveColorIndex(i)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${activeColorIndex === i ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                      <span className="text-xs font-bold">Path {i + 1} ({path.length} pts)</span>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-6 w-6 text-red-400 hover:text-red-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPaths(paths.filter((_, idx) => idx !== i));
                        if (activeColorIndex === i) setActiveColorIndex(null);
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <div 
              className="aspect-square w-full max-w-md bg-white/5 rounded-[2rem] p-4 border border-white/10 grid gap-2"
              style={{ 
                gridTemplateColumns: `repeat(${size}, 1fr)`,
                gridTemplateRows: `repeat(${size}, 1fr)`
              }}
            >
              {Array.from({ length: size * size }).map((_, i) => {
                const x = i % size;
                const y = Math.floor(i / size);
                
                // Find if this cell is in any path
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
                    className="relative rounded-lg border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    {cellColor !== 'transparent' && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-full h-full ${isEndpoint ? 'rounded-full scale-75' : 'opacity-50'}`}
                        style={{ backgroundColor: cellColor }}
                      />
                    )}
                    <span className="absolute text-[8px] opacity-20 pointer-events-none">{x},{y}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-slate-500 text-xs font-medium text-center">
              Click cells to draw paths. Click again to undo.<br/>
              Select a color on the left to start drawing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;