import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, RotateCcw, 
  User, Trophy, Ban, MoreHorizontal 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RadialMenuProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onRetry: () => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ isMuted, onToggleMute, onRetry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />, label: 'Mute', action: onToggleMute },
    { icon: <Ban size={20} />, label: 'No Ads', action: () => alert('Remove Ads clicked') },
    { icon: <RotateCcw size={20} />, label: 'Retry', action: onRetry },
    { icon: <User size={20} />, label: 'Profile', action: () => alert('Google Play Profile') },
    { icon: <Trophy size={20} />, label: 'Leaderboard', action: () => alert('Leaderboard') },
  ];

  return (
    <div className="relative flex items-center justify-center">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            {menuItems.map((item, index) => {
              const angle = (index * (360 / menuItems.length) - 90) * (Math.PI / 180);
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ x, y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200, delay: index * 0.05 }}
                  className="absolute z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 active:scale-90 transition-transform"
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className="w-16 h-16 rounded-full bg-white shadow-xl border-none z-50 hover:scale-105 active:scale-95 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        </div>
      </Button>
    </div>
  );
};

export default RadialMenu;