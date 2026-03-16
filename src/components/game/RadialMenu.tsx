import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, RotateCcw, 
  User, Palette, Eye, EyeOff, Lightbulb 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RadialMenuProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  hints: number;
  onToggleMute: () => void;
  onToggleColorblind: () => void;
  onRetry: () => void;
  onOpenProfile: () => void;
  onOpenThemes: () => void;
  onUseHint: () => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ 
  isMuted, 
  isColorblindMode, 
  hints,
  onToggleMute, 
  onToggleColorblind, 
  onRetry,
  onOpenProfile,
  onOpenThemes,
  onUseHint
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />, label: 'Mute', action: onToggleMute },
    { icon: isColorblindMode ? <EyeOff size={20} /> : <Eye size={20} />, label: 'Symbols', action: onToggleColorblind },
    { icon: <RotateCcw size={20} />, label: 'Retry', action: onRetry },
    { icon: <Palette size={20} />, label: 'Themes', action: onOpenThemes },
    { icon: <User size={20} />, label: 'Profile', action: onOpenProfile },
    { 
      icon: (
        <div className="relative">
          <Lightbulb size={20} />
          <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
            {hints}
          </span>
        </div>
      ), 
      label: 'Hint', 
      action: onUseHint 
    },
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
              const radius = 110;
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