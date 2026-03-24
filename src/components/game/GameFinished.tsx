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
      className="fixed inset-0 z-[200] bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl max-w-sm w-full overflow-hidden"
      >
        <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={40} />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 break-words">
          CONGRATULATIONS!
        </h2>
        
        <p className="text-slate-600 font-medium mb-8 leading-relaxed text-sm md:text-base">
          You've finished all levels of Neurolinks! Thanks for playing and keeping your brain sharp.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold mb-4">
            <PartyPopper size={20} />
            <span>Master of Connections</span>
          </div>
          
          <Button 
            onClick={onRestart}
            className="w-full bg-slate-800 text-white rounded-full py-7 text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            PLAY AGAIN <RotateCcw size={20} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameFinished;