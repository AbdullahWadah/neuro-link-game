"use client";

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="relative flex items-center justify-center -mt-2 sm:-mt-6">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/15"
              onClick={() => setIsOpen(false)}
            />
            {menuItems.map((item, index) => {
              const startAngle = -180;
              const endAngle = 0;
              const step = (endAngle - startAngle) / Math.max(menuItems.length - 1, 1);
              const angle = (startAngle + index * step) * (Math.PI / 180);
              const radius = 108;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={item.label}
                  initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  animate={{ x, y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 220, delay: index * 0.03 }}
                  className="absolute z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 shadow-xl transition-transform active:scale-90 sm:h-14 sm:w-14"
                  onClick={() => {
                    item.action();
                    if (item.label !== 'No Ads') {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="mt-0.5 text-[7px] font-black uppercase sm:text-[8px]">{item.label}</span>
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <Button
        variant="outline"
        size="icon"
        className={`z-50 h-16 w-16 rounded-full border-none bg-white shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-20 sm:w-20 ${
          isOpen ? 'rotate-[135deg]' : 'rotate-0'
        }`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-slate-800" />
          <div className="h-2 w-2 rounded-full bg-slate-800" />
          <div className="h-2 w-2 rounded-full bg-slate-800" />
        </div>
      </Button>
    </div>
  );
};

export default React.memo(RadialMenu);
