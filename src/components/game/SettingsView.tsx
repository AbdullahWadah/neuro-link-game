"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, Volume2, VolumeX, Smartphone, Trash2, Info, ArrowLeft, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface SettingsViewProps {
  isMuted: boolean;
  isMusicMuted: boolean;
  isHapticEnabled: boolean;
  onToggleMute: () => void;
  onToggleMusicMute: () => void;
  onToggleHaptic: () => void;
  onClose: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ 
  isMuted, 
  isMusicMuted, 
  isHapticEnabled,
  onToggleMute, 
  onToggleMusicMute,
  onToggleHaptic,
  onClose 
}) => {
  const handleResetData = () => {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-md flex items-center justify-center p-6"
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

        <h2 className="text-2xl font-black text-slate-800 mb-8">SETTINGS</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              {isMuted ? <VolumeX className="text-slate-400" /> : <Volume2 className="text-slate-800" />}
              <Label className="font-bold text-slate-700">Sound Effects</Label>
            </div>
            <Switch checked={!isMuted} onCheckedChange={onToggleMute} />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <Music className={isMusicMuted ? "text-slate-400" : "text-slate-800"} />
              <Label className="font-bold text-slate-700">Background Music</Label>
            </div>
            <Switch checked={!isMusicMuted} onCheckedChange={onToggleMusicMute} />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <Smartphone className={isHapticEnabled ? "text-slate-800" : "text-slate-400"} />
              <Label className="font-bold text-slate-700">Haptic Feedback</Label>
            </div>
            <Switch checked={isHapticEnabled} onCheckedChange={onToggleHaptic} />
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Button 
              onClick={onClose}
              className="w-full bg-slate-800 text-white rounded-2xl py-6 font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <ArrowLeft size={18} /> BACK TO MENU
            </Button>

            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-bold gap-3"
              onClick={handleResetData}
            >
              <Trash2 size={18} />
              Reset All Progress
            </Button>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest justify-center mt-4">
            <Info size={12} />
            Neurolinks v1.0.0
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsView;