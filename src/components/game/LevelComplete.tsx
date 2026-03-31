import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LevelCompleteProps {
  levelId: number;
  isPerfect: boolean;
  onNext: () => void;
}

const LevelComplete: React.FC<LevelCompleteProps> = ({ levelId, isPerfect, onNext }) => {
  const stars = isPerfect ? 3 : 1;

  const handleShare = () => {
    const text = `I just got ${stars} stars on Level ${levelId} in NeuroNodes! 🧠🔗 Can you beat my score?`;
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      style: { borderRadius: '20px' }
    });
  };

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
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
            >
              <Star 
                size={32} 
                className={i <= stars ? "text-amber-400 fill-amber-400" : "text-slate-100"} 
              />
            </motion.div>
          ))}
        </div>
        
        <h2 className="text-3xl font-black text-slate-800 mb-2">
          {isPerfect ? "PERFECT!" : "DONE!"}
        </h2>
        <p className="text-slate-500 font-medium mb-8">Level {levelId} Completed</p>

        <div className="space-y-3">
          <Button 
            onClick={onNext}
            className="w-full bg-slate-800 text-white rounded-full py-8 text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            NEXT LEVEL <ArrowRight size={24} />
          </Button>
          
          <Button 
            variant="ghost"
            onClick={handleShare}
            className="w-full text-slate-400 font-bold flex items-center justify-center gap-2 hover:text-slate-600"
          >
            <Share2 size={18} /> SHARE PROGRESS
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LevelComplete;