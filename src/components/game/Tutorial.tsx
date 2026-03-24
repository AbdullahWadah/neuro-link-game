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

  const solutionPath = level.solutions[firstPair.color];
  if (!solutionPath || solutionPath.length < 2) return null;

  // Convert grid points to percentage coordinates for the SVG and Arrow
  const getPos = (val: number) => ((val + 0.5) / level.size) * 100;

  const points = solutionPath.map(p => ({
    x: getPos(p.x),
    y: getPos(p.y)
  }));

  // Create the points string for the polyline
  const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 pointer-events-none p-6"
    >
      <div className="relative w-full h-full">
        {/* Accurate Solution Path Animation */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.polyline
            points={pointsString}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1, 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              times: [0, 0.7, 1]
            }}
          />
        </svg>

        {/* Animated Glowing Arrow following the path */}
        <motion.div
          animate={{ 
            left: points.map(p => `${p.x}%`),
            top: points.map(p => `${p.y}%`),
            opacity: [0, 1, 1, 1, 0],
            scale: [0.8, 1.1, 1.1, 1.1, 0.8]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.1, 0.5, 0.8, 1]
          }}
          className="absolute -ml-5 -mt-5 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
        >
          <motion.div
            animate={{ 
              rotate: solutionPath.slice(0, -1).map((p, i) => {
                const next = solutionPath[i + 1];
                return Math.atan2(next.y - p.y, next.x - p.x) * (180 / Math.PI);
              }).concat([Math.atan2(
                solutionPath[solutionPath.length - 1].y - solutionPath[solutionPath.length - 2].y,
                solutionPath[solutionPath.length - 1].x - solutionPath[solutionPath.length - 2].x
              ) * (180 / Math.PI)])
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            <ArrowBigRightDash size={40} fill="currentColor" />
          </motion.div>
        </motion.div>
        
        {/* Instruction Label */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-[2rem] shadow-2xl border border-white/20 text-white font-black text-center text-xs uppercase tracking-[0.2em]"
          >
            Follow the path to connect
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tutorial;