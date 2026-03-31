import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../../data/themes';

interface BackgroundDecorationProps {
  theme: Theme;
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({ theme }) => {
  // Reduced number of nodes and simplified animations for performance
  const nodes = Array.from({ length: 4 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {nodes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: (i * 25) + '%', 
            y: (i * 20) + '%',
            opacity: 0 
          }}
          animate={{ 
            x: [(i * 25) + '%', (i * 25 + 10) + '%', (i * 25) + '%'],
            y: [(i * 20) + '%', (i * 20 + 15) + '%', (i * 20) + '%'],
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20 + i * 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute w-64 h-64 rounded-full blur-[100px]"
          style={{ backgroundColor: theme.accentColor }}
        />
      ))}
      
      {/* Subtle grid overlay optimized with CSS */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(${theme.textColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
};

export default BackgroundDecoration;