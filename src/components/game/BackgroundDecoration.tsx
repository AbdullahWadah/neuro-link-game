import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../../data/themes';

interface BackgroundDecorationProps {
  theme: Theme;
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({ theme }) => {
  // Simplified background for better performance on mobile
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full blur-[120px]"
        style={{ backgroundColor: theme.accentColor }}
      />
      
      <motion.div
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-1/4 -right-1/4 w-full h-full rounded-full blur-[120px]"
        style={{ backgroundColor: theme.accentColor }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(${theme.textColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} 
      />
    </div>
  );
};

export default BackgroundDecoration;