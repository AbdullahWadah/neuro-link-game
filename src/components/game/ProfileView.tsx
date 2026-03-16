import React from 'react';
import { motion } from 'framer-motion';
import { X, Trophy, Zap, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileViewProps {
  stats: {
    totalConnections: number;
    levelsCompleted: number;
  };
  unlockedLevel: number;
  onClose: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ stats, unlockedLevel, onClose }) => {
  const progress = Math.round((unlockedLevel / 100) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-md flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-[3rem] w-full max-w-sm p-8 shadow-2xl relative overflow-hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute top-6 right-6 rounded-full"
        >
          <X size={24} />
        </Button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={40} className="text-slate-800" />
          </div>
          <h2 className="text-2xl font-black text-slate-800">PLAYER PROFILE</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Target size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Progress</p>
              <p className="text-lg font-black text-slate-800">{progress}% Complete</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Levels Won</p>
              <p className="text-lg font-black text-slate-800">{stats.levelsCompleted}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Total Links</p>
              <p className="text-lg font-black text-slate-800">{stats.totalConnections}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-center text-slate-400 text-sm font-medium">
            Keep connecting to unlock more!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileView;