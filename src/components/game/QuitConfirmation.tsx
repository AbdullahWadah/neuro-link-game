"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { App } from '@capacitor/app';

interface QuitConfirmationProps {
  onClose: () => void;
}

const QuitConfirmation: React.FC<QuitConfirmationProps> = ({ onClose }) => {
  const handleQuit = async () => {
    try {
      await App.exitApp();
    } catch (e) {
      // Fallback for web
      window.location.href = "about:blank";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-[3rem] p-10 shadow-2xl max-w-xs w-full text-center"
      >
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={40} />
        </div>
        
        <h2 className="text-2xl font-black text-slate-800 mb-4">
          QUIT GAME?
        </h2>
        
        <p className="text-slate-500 font-medium mb-8">
          Do you really want to quit? Your progress is saved automatically.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline"
            onClick={onClose}
            className="rounded-full py-6 font-bold border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            NO
          </Button>
          <Button 
            onClick={handleQuit}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full py-6 font-bold flex items-center justify-center gap-2"
          >
            YES <LogOut size={18} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuitConfirmation;