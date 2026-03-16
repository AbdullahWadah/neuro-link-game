import React from 'react';
import { motion } from 'framer-motion';
import { X, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { THEMES } from '../../data/themes';

interface ThemeSelectorProps {
  currentThemeId: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentThemeId, onSelect, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-md flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-[3rem] w-full max-w-sm p-8 shadow-2xl relative">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute top-6 right-6 rounded-full"
        >
          <X size={24} />
        </Button>

        <div className="flex items-center gap-3 mb-8">
          <Palette size={28} className="text-slate-800" />
          <h2 className="text-2xl font-black text-slate-800">THEMES</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={`
                p-4 rounded-2xl border-2 transition-all text-left
                ${currentThemeId === theme.id 
                  ? 'border-slate-800 bg-slate-50' 
                  : 'border-slate-100 hover:border-slate-200'}
              `}
            >
              <div 
                className="w-full h-12 rounded-lg mb-3 shadow-inner"
                style={{ backgroundColor: theme.background }}
              />
              <p className="font-bold text-slate-800">{theme.name}</p>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeSelector;