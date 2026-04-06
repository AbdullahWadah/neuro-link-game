"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, RotateCcw, 
  Eye, EyeOff, Calendar,
  Ban, LogOut, Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface RadialMenuProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  isAdFree: boolean;
  hasHint: boolean;
  onToggleColorblind: () => void;
  onRetry: () => void;
  onOpenSettings: () => void;
  onOpenDaily: () => void;
  onBuyNoAds: () => void;
  onOpenQuit: () => void;
  onHint: () => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ 
  isColorblindMode, 
  isAdFree,
  hasHint,
  onToggleColorblind, 
  onRetry,
  onOpenSettings,
  onOpenDaily,
  onBuyNoAds,
  onOpenQuit,
  onHint
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNoAdsClick = () => {
    toast("Remove Ads?", {
      description: "Remove all ads for $2.99 and support the game!",
      action: {
        label: "Pay $2.99",
        onClick: () => {
          const loading = toast.loading("Processing payment...");
          setTimeout(() => {
            toast.dismiss(loading);
            onBuyNoAds();
            toast.success("Purchase Successful! Ads Removed.", { icon: '🎉' });
          }, 1500);
        }
      }
    });
  };

  const menuItems = [
    { icon: <Settings size={20} />, label: 'Settings', action: onOpenSettings },
    { icon: isColorblindMode ? <EyeOff size={20} /> : <Eye size={20} />, label: 'Symbols', action: onToggleColorblind },
    { icon: <RotateCcw size={20} />, label: 'Retry', action: onRetry },
    { icon: <Calendar size={20} />, label: 'Daily', action: onOpenDaily },
    { icon: <LogOut size={20} className="text-red-500" />, label: 'Quit', action: onOpenQuit },
  ];

  // Add Hint button if a solution exists for this level
  if (hasHint) {
    menuItems.splice(0, 0, { 
      icon: <Lightbulb size={20} className="text-amber-500" />, 
      label: 'Hint', 
      action: onHint 
    });
  }

  if (!isAdFree) {
    menuItems.splice(hasHint ? 3 : 2, 0, { 
      icon: <Ban size={20} className="text-red-500" />, 
      label: 'No Ads', 
      action: handleNoAdsClick 
    });
  }

  return (
    <div className="relative flex items-center justify-center -mt-24">
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
              const startAngle = -180;
              const endAngle = 0;
              const step = (endAngle - startAngle) / (menuItems.length - 1);
              const angle = (startAngle + index * step) * (Math.PI / 180);
              
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ x, y, scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 45 }}
                  transition={{ 
                    type: 'spring', 
                    damping: 18, 
                    stiffness: 200, 
                    delay: index * 0.04,
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute z-50 w-14 h-14 rounded-full shadow-xl flex flex-col items-center justify-center active:scale-90 transition-all border bg-white border-slate-100 text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    item.action();
                    if (item.label !== 'No Ads' && item.label !== 'Hint') {
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
          w-20 h-20 rounded-full bg-white shadow-2xl border-none z-50 
          hover:scale-105 active:scale-95 transition-all duration-500
          ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div 
          animate={isOpen ? { scale: 0.8 } : { scale: 1 }}
          className="flex gap-1.5"
        >
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-800" />
        </motion.div>
      </Button>
    </div>
  );
};

export default RadialMenu;