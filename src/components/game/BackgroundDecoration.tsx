import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../../data/themes';

interface BackgroundDecorationProps {
  theme: Theme;
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({ theme }) => {
  // Reduced number of nodes for better performance on mobile
  const nodes = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {nodes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0 
          }}
          animate={{ 
            x: [
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%'
            ],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25 + Math.random() * 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-48 h-48 rounded-full blur-[80px]"
          style={{ backgroundColor: theme.accentColor }}
        />
      ))}
      
      {/* Subtle grid overlay - optimized with CSS instead of many divs */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(${theme.textColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />
    </div>
  );
};

export default BackgroundDecoration;