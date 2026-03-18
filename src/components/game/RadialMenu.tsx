import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, RotateCcw, 
  Eye, EyeOff, Lightbulb, Calendar,
  Ban
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

interface RadialMenuProps {
  isMuted: boolean;
  isColorblindMode: boolean;
  isAdFree: boolean;
  hints: number;
  onToggleColorblind: () => void;
  onRetry: () => void;
  onOpenSettings: () => void;
  onOpenDaily: () => void;
  onUseHint: () => void;
  onAddHints?: (amount: number) => void;
  onBuyNoAds: () => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ 
  isColorblindMode, 
  isAdFree,
  hints,
  onToggleColorblind, 
  onRetry,
  onOpenSettings,
  onOpenDaily,
  onUseHint,
  onAddHints,
  onBuyNoAds
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHintClick = () => {
    if (hints > 0) {
      onUseHint();
    } else if (isAdFree) {
      // Ad-free users get hints instantly
      onAddHints?.(3);
      toast.success("Ad-Free Bonus: +3 Hints!");
    } else {
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

  const handleNoAdsClick = () => {
    toast((t) => (
      <div className="flex flex-col gap-3 p-1">
        <p className="text-sm font-bold text-slate-800">Remove all ads for $2.99?</p>
        <p className="text-[10px] text-slate-500">Includes 10 bonus hints and instant hint refills!</p>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1 bg-slate-800 text-white font-bold"
            onClick={() => {
              toast.dismiss(t.id);
              const loading = toast.loading("Processing payment...");
              setTimeout(() => {
                toast.dismiss(loading);
                onBuyNoAds();
                toast.success("Purchase Successful! Ads Removed.", { icon: '🎉' });
              }, 1500);
            }}
          >
            Pay $2.99
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            className="text-slate-400"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </Button>
        </div>
      </div>
    ), { duration: 6000 });
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

  // Add No Ads button if not already purchased
  if (!isAdFree) {
    menuItems.splice(2, 0, { 
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
              // Adjust arc for 5 or 6 items
              const startAngle = -160;
              const endAngle = -20;
              const step = (endAngle - startAngle) / (menuItems.length - 1);
              const angle = (startAngle + index * step) * (Math.PI / 180);
              
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={index}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ x, y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  transition={{ 
                    type: 'spring', 
                    damping: 20, 
                    stiffness: 300, 
                    delay: index * 0.03 
                  }}
                  className="absolute z-50 w-14 h-14 rounded-full bg-white shadow-xl flex flex-col items-center justify-center text-slate-700 hover:bg-slate-50 active:scale-90 transition-all border border-slate-100"
                  onClick={() => {
                    item.action();
                    if (item.label !== 'Hint' && item.label !== 'No Ads') {
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