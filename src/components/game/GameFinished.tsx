import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, PartyPopper, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameFinishedProps {
  onRestart: () => void;
}

const GameFinished: React.FC<GameFinishedProps> = ({ onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-slate-900 flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-[3rem] p-10 shadow-2xl max-w-sm w-full"
      >
        <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} />
        </div>
        
        <h2 className="text-3xl font-black text-slate-800 mb-4">
          CONGRATULATIONS!
        </h2>
        
        <p className="text-slate-600 font-medium mb-8 leading-relaxed">
          You've finished all 100 levels of Neurolinks! Thanks for playing and keeping your brain sharp.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold mb-4">
            <PartyPopper size={20} />
            <span>Master of Connections</span>
          </div>
          
          <Button 
            onClick={onRestart}
            className="w-full bg-slate-800 text-white rounded-full py-8 text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            PLAY AGAIN <RotateCcw size={24} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameFinished;