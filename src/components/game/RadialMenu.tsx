import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, RotateCcw, 
  Eye, EyeOff, Lightbulb, Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

interface RadialMenuProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  hints: number;
  onToggleColorblind: () => void;
  onRetry: () => void;
  onOpenSettings: () => void;
  onOpenDaily: () => void;
  onUseHint: () => void;
  onAddHints?: (amount: number) => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ 
  isColorblindMode, 
  hints,
  onToggleColorblind, 
  onRetry,
  onOpenSettings,
  onOpenDaily,
  onUseHint,
  onAddHints
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHintClick = () => {
    if (hints > 0) {
      onUseHint();
    } else {
      // Simulate Ad Reward
      toast((t) => (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">No hints left!</p>
          <Button 
            size="sm" 
            className="bg-amber-500 hover:bg-amber-600 text-white text-xs"
            onClick={() => {
              toast.dismiss(t.id);
              const loadingToast = toast.loading("Watching Ad...");
              setTimeout(() => {
                toast.dismiss(loadingToast);
                onAddHints?.(3);
                toast.success("Reward: +3 Hints!");
              }, 2000);
            }}
          >
            Watch Ad for 3 hints reward
          </Button>
        </div>
      ), { duration: 5000 });
    }
  };

  const menuItems = [
    { icon: <Settings size={20} />, label: 'Settings', action: onOpenSettings },
    { icon: isColorblindMode ? <EyeOff size={20} /> : <Eye size={20} />, label: 'Symbols', action: onToggleColorblind },
    { icon: <RotateCcw size={20} />, label: 'Retry', action: onRetry },
    { icon: <Calendar size={20} />, label: 'Daily', action: onOpenDaily },
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
      action: handleHintClick 
    },
  ];

  return (
    <div className="relative flex items-center justify-center -mt-12">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
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
                  className="absolute z-50 w-14 h-14 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-slate-700 hover:bg-slate-50 active:scale-90 transition-all border-2 border-slate-100"
                  onClick={() => {
                    item.action();
                    if (item.label !== 'Hint' || hints > 0) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="text-[8px] font-black uppercase mt-0.5">{item.label}</span>
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className={`
          w-20 h-20 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] border-none z-50 
          hover:scale-105 active:scale-95 transition-all duration-300
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </div>
      </Button>
    </div>
  );
};

export default RadialMenu;