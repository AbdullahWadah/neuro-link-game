"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import { Level } from '../../data/levels';

interface TutorialProps {
  level: Level;
}

const Tutorial: React.FC<TutorialProps> = ({ level }) => {
  const firstPair = level.pairs[0];
  if (!firstPair) return null;

  // Calculate percentage positions based on grid size
  // We add 0.5 to center the cursor on the node
  const getPos = (val: number) => ((val + 0.5) / level.size) * 100;

  const startX = getPos(firstPair.start.x);
  const startY = getPos(firstPair.start.y);
  const endX = getPos(firstPair.end.x);
  const endY = getPos(firstPair.end.y);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 pointer-events-none p-6"
    >
      <div className="relative w-full h-full">
        {/* Animated Cursor */}
        <motion.div
          animate={{ 
            left: [`${startX}%`, `${endX}%`, `${startX}%`],
            top: [`${startY}%`, `${endY}%`, `${startY}%`],
            scale: [1, 0.8, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
          className="absolute -ml-4 -mt-4 text-slate-800 drop-shadow-lg"
        >
          <MousePointer2 size={40} fill="currentColor" />
        </motion.div>
        
        {/* Instruction Label */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/50 text-slate-800 font-black text-center text-sm uppercase tracking-tight"
          >
            Drag to connect matching nodes
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tutorial;