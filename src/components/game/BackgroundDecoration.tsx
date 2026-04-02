import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../../data/themes';

interface BackgroundDecorationProps {
  theme: Theme;
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({ theme }) => {
  // Using CSS-based animations for better battery life on mobile
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.05, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full blur-[100px] will-change-transform"
        style={{ backgroundColor: theme.accentColor }}
      />
      
      <motion.div
        animate={{ 
          opacity: [0.02, 0.06, 0.02],
          scale: [1.05, 1, 1.05],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -bottom-1/4 -right-1/4 w-full h-full rounded-full blur-[100px] will-change-transform"
        style={{ backgroundColor: theme.accentColor }}
      />
      
      {/* Static grid overlay - very low cost */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `radial-gradient(${theme.textColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
};

export default BackgroundDecoration;