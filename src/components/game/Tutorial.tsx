"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowBigRightDash } from 'lucide-react';
import { Level } from '../../data/levels';

interface TutorialProps {
  level: Level;
}

const Tutorial: React.FC<TutorialProps> = ({ level }) => {
  const firstPair = level.pairs[0];
  if (!firstPair) return null;

  // Calculate percentage positions based on grid size
  const getPos = (val: number) => ((val + 0.5) / level.size) * 100;

  const startX = getPos(firstPair.start.x);
  const startY = getPos(firstPair.start.y);
  const endX = getPos(firstPair.end.x);
  const endY = getPos(firstPair.end.y);

  // Calculate rotation to point towards the end node
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 pointer-events-none p-6"
    >
      <div className="relative w-full h-full">
        {/* Trailing Line Animation */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <motion.line
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1, 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.6, 1]
            }}
          />
        </svg>

        {/* Animated Glowing Arrow */}
        <motion.div
          animate={{ 
            left: [`${startX}%`, `${endX}%`, `${startX}%`],
            top: [`${startY}%`, `${endY}%`, `${startY}%`],
            scale: [1, 1.2, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
          className="absolute -ml-6 -mt-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ rotate: `${angle}deg` }}
        >
          <ArrowBigRightDash size={48} fill="currentColor" />
        </motion.div>
        
        {/* Instruction Label */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/20 backdrop-blur-xl px-8 py-4 rounded-[2rem] shadow-2xl border border-white/30 text-white font-black text-center text-sm uppercase tracking-widest"
          >
            Connect matching nodes
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tutorial;