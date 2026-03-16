import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const Tutorial = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 0, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-12 text-slate-400"
        >
          <MousePointer2 size={32} fill="currentColor" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/50 text-slate-600 font-bold text-center"
        >
          Drag to connect matching nodes
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tutorial;