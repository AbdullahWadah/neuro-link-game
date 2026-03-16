import React from 'react';
import { motion } from 'framer-motion';
import { X, Trophy, Zap, Target, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Achievement } from '../../hooks/useGameState';

interface ProfileViewProps {
  stats: {
    totalConnections: number;
    levelsCompleted: number;
    perfectClears: number;
    achievements: Achievement[];
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
      <div className="bg-white rounded-[3rem] w-full max-w-sm p-8 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute top-6 right-6 rounded-full z-10"
        >
          <X size={24} />
        </Button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={40} className="text-slate-800" />
          </div>
          <h2 className="text-2xl font-black text-slate-800">PLAYER PROFILE</h2>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Progress</p>
              <p className="text-lg font-black text-slate-800">{progress}%</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Perfects</p>
              <p className="text-lg font-black text-slate-800">{stats.perfectClears}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Achievements</h3>
            <div className="grid grid-cols-1 gap-3">
              {stats.achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`
                    p-4 rounded-2xl flex items-center gap-4 border-2 transition-all
                    ${achievement.unlocked 
                      ? 'bg-white border-slate-100 shadow-sm' 
                      : 'bg-slate-50 border-transparent opacity-50'}
                  `}
                >
                  <div className="text-2xl">{achievement.unlocked ? achievement.icon : '🔒'}</div>
                  <div>
                    <p className="text-sm font-black text-slate-800">{achievement.title}</p>
                    <p className="text-[10px] font-medium text-slate-500">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Total Links: {stats.totalConnections}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileView;