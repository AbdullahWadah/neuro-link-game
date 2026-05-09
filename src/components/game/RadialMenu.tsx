"use client";

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Settings,
  RotateCcw,
  Eye,
  EyeOff,
  Calendar,
  Ban,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface RadialMenuProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  isAdFree: boolean;
  onToggleColorblind: () => void;
  onRetry: () => void;
  onOpenSettings: () => void;
  onOpenDaily: () => void;
  onBuyNoAds: () => void;
  onOpenQuit: () => void;
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 160,
  damping: 18,
  mass: 0.9,
};

const RadialMenu: React.FC<RadialMenuProps> = ({
  isColorblindMode,
  isAdFree,
  onToggleColorblind,
  onRetry,
  onOpenSettings,
  onOpenDaily,
  onBuyNoAds,
  onOpenQuit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleNoAdsClick = () => {
    toast('Remove Ads?', {
      description: 'Remove all ads for $2.99 and support the game!',
      action: {
        label: 'Pay $2.99',
        onClick: () => {
          const loading = toast.loading('Processing payment...');
          setTimeout(() => {
            toast.dismiss(loading);
            onBuyNoAds();
            toast.success('Purchase Successful! Ads Removed.', { icon: '🎉' });
          }, 1500);
        },
      },
    });
  };

  const menuItems = useMemo(() => {
    const items = [
      { icon: <Settings size={18} />, label: 'Settings', action: onOpenSettings },
      {
        icon: isColorblindMode ? <EyeOff size={18} /> : <Eye size={18} />,
        label: 'Symbols',
        action: onToggleColorblind,
      },
      { icon: <RotateCcw size={18} />, label: 'Retry', action: onRetry },
      { icon: <Calendar size={18} />, label: 'Daily', action: onOpenDaily },
      { icon: <LogOut size={18} className="text-red-500" />, label: 'Quit', action: onOpenQuit },
    ];

    if (!isAdFree) {
      items.splice(2, 0, {
        icon: <Ban size={18} className="text-red-500" />,
        label: 'No Ads',
        action: handleNoAdsClick,
      });
    }

    return items;
  }, [handleNoAdsClick, isAdFree, isColorblindMode, onOpenDaily, onOpenQuit, onOpenSettings, onRetry, onToggleColorblind]);

  const itemPositions = useMemo(() => {
    const radius = menuItems.length > 5 ? 96 : 90;
    const startAngle = -172;
    const endAngle = -8;
    const step = (endAngle - startAngle) / Math.max(menuItems.length - 1, 1);

    return menuItems.map((_, index) => {
      const angle = (startAngle + index * step) * (Math.PI / 180);
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  }, [menuItems]);

  return (
    <div className="relative flex items-center justify-center pb-1">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.18 }}
              className="fixed inset-0 z-40 bg-slate-950/12 backdrop-blur-[1px]"
              onClick={() => setIsOpen(false)}
            />

            {menuItems.map((item, index) => {
              const position = itemPositions[index];
              const openAnimation = reduceMotion
                ? { opacity: 1, scale: 1 }
                : { x: position.x, y: position.y, opacity: 1, scale: 1 };
              const closedAnimation = reduceMotion
                ? { opacity: 0, scale: 0.92 }
                : { x: 0, y: 0, opacity: 0, scale: 0.88 };

              return (
                <motion.button
                  key={item.label}
                  initial={closedAnimation}
                  animate={openAnimation}
                  exit={closedAnimation}
                  transition={{
                    ...springTransition,
                    delay: reduceMotion ? 0 : index * 0.02,
                  }}
                  className="absolute z-50 flex h-12 w-12 origin-center flex-col items-center justify-center rounded-full border border-white/65 bg-white/95 text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.18)] will-change-transform active:scale-95 sm:h-14 sm:w-14"
                  onClick={() => {
                    item.action();
                    if (item.label !== 'No Ads') {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="mt-0.5 text-[7px] font-black uppercase tracking-[0.08em] sm:text-[8px]">{item.label}</span>
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <motion.div
        animate={isOpen ? { scale: 1.02 } : { scale: 1 }}
        transition={springTransition}
        className="relative z-50"
      >
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full border-none bg-white shadow-[0_20px_40px_rgba(15,23,42,0.22)] transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:h-20 sm:w-20"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <motion.div
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={springTransition}
            className="flex gap-1.5"
          >
            <div className="h-2 w-2 rounded-full bg-slate-800" />
            <div className="h-2 w-2 rounded-full bg-slate-800" />
            <div className="h-2 w-2 rounded-full bg-slate-800" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default React.memo(RadialMenu);
