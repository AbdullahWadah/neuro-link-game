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

    // Calmer, cozier ambient pad logic
    const playPad = (freq: number, delay: number) => {
      if (!audioCtx.current) return;
      
      const osc = audioCtx.current.createOscillator();
      const gain = audioCtx.current.createGain();
      
      // Use sine for a softer, cozier sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime);
      
      gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
      // Slower attack for a calmer feel
      gain.gain.linearRampToValueAtTime(0.03, audioCtx.current.currentTime + 3);
      gain.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 8);
      
      osc.connect(gain);
      gain.connect(audioCtx.current.destination);
      
      osc.start(audioCtx.current.currentTime + delay);
      osc.stop(audioCtx.current.currentTime + delay + 8);
      
      oscillators.current.push(osc);
    };

    const interval = setInterval(() => {
      // Lower, warmer frequencies (C3, E3, G3, A3)
      const notes = [130.81, 164.81, 196.00, 220.00]; 
      const note = notes[Math.floor(Math.random() * notes.length)];
      playPad(note, 0);
    }, 5000);

    return () => {
      clearInterval(interval);
      oscillators.current.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      oscillators.current = [];
    };
  }, [isMuted]);
};