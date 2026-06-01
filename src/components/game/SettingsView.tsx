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
  onClose,
}) => {
  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all progress? Your No Ads purchase will stay active.')) {
      const preservedNoAds = localStorage.getItem('neuronodes_adfree');

      localStorage.clear();

      if (preservedNoAds !== null) {
        localStorage.setItem('neuronodes_adfree', preservedNoAds);
      }

      window.location.reload();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-6 backdrop-blur-md"
    >
      <div className="relative w-full max-w-sm rounded-[3rem] bg-white p-8 shadow-2xl max-sm:max-w-full">
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-6 top-6 rounded-full">
          <X size={24} />
        </Button>

        <h2 className="mb-8 text-2xl font-black text-slate-800">SETTINGS</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              {isMuted ? <VolumeX className="text-slate-400" /> : <Volume2 className="text-slate-800" />}
              <Label className="font-bold text-slate-700">Sound Effects</Label>
            </div>
            <Switch checked={!isMuted} onCheckedChange={onToggleMute} />
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <Music className={isMusicMuted ? 'text-slate-400' : 'text-slate-800'} />
              <Label className="font-bold text-slate-700">Background Music</Label>
            </div>
            <Switch checked={!isMusicMuted} onCheckedChange={onToggleMusicMute} />
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <Smartphone className={isHapticEnabled ? 'text-slate-800' : 'text-slate-400'} />
              <Label className="font-bold text-slate-700">Haptic Feedback</Label>
            </div>
            <Switch checked={isHapticEnabled} onCheckedChange={onToggleHaptic} />
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-4">
            <Button
              onClick={onClose}
              className="w-full rounded-2xl bg-slate-800 py-6 font-bold text-white transition-transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                <ArrowLeft size={18} /> BACK TO GAME
              </span>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-xl font-bold text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={handleResetData}
            >
              <Trash2 size={18} />
              Reset All Progress
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Info size={12} />
            NeuroNodes v1.0.0
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsView;
