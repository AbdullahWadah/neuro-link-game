import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LevelCompleteProps {
  levelId: number;
  onNext: () => void;
}

const LevelComplete: React.FC<LevelCompleteProps> = ({ levelId, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-white/60 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 text-center max-w-xs w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={40} />
        </motion.div>
        
        <h2 className="text-3xl font-black text-slate-800 mb-2">PERFECT!</h2>
        <p className="text-slate-500 font-medium mb-8">Level {levelId} Completed</p>

        <Button 
          onClick={onNext}
          className="w-full bg-slate-800 text-white rounded-full py-8 text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          NEXT LEVEL <ArrowRight size={24} />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default LevelComplete;