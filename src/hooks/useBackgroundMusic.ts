import { useEffect, useRef } from 'react';

export const useBackgroundMusic = (isMuted: boolean) => {
  const audioCtx = useRef<AudioContext | null>(null);
  const oscillators = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    if (isMuted) {
      if (audioCtx.current) {
        audioCtx.current.suspend();
      }
      return;
    }

    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }

    // Simple ambient pad logic
    const playPad = (freq: number, delay: number) => {
      if (!audioCtx.current) return;
      
      const osc = audioCtx.current.createOscillator();
      const gain = audioCtx.current.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime);
      
      gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, audioCtx.current.currentTime + 2);
      gain.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 6);
      
      osc.connect(gain);
      gain.connect(audioCtx.current.destination);
      
      osc.start(audioCtx.current.currentTime + delay);
      osc.stop(audioCtx.current.currentTime + delay + 6);
      
      oscillators.current.push(osc);
    };

    const interval = setInterval(() => {
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      const note = notes[Math.floor(Math.random() * notes.length)];
      playPad(note, 0);
    }, 4000);

    return () => {
      clearInterval(interval);
      oscillators.current.forEach(osc => osc.stop());
      oscillators.current = [];
    };
  }, [isMuted]);
};