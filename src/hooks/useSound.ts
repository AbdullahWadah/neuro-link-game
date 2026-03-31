import { useCallback, useRef } from 'react';

export const useSound = (isMuted: boolean) => {
  const audioCtx = useRef<AudioContext | null>(null);

  const playTone = (freq: number, type: OscillatorType, duration: number, volume: number) => {
    if (isMuted) return;
    
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime);

    gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
    gain.gain.linearRampToValueAtTime(volume, audioCtx.current.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.current.destination);

    osc.start();
    osc.stop(audioCtx.current.currentTime + duration);
  };

  const playSound = useCallback((type: 'connect' | 'win' | 'click' | 'error' | 'hint') => {
    switch (type) {
      case 'click':
        playTone(440, 'sine', 0.1, 0.1);
        break;
      case 'connect':
        playTone(523.25, 'sine', 0.3, 0.1);
        setTimeout(() => playTone(659.25, 'sine', 0.3, 0.1), 100);
        break;
      case 'win':
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((note, i) => {
          setTimeout(() => playTone(note, 'triangle', 0.5, 0.05), i * 100);
        });
        break;
      case 'error':
        playTone(110, 'sawtooth', 0.2, 0.05);
        break;
      case 'hint':
        playTone(880, 'sine', 0.4, 0.05);
        break;
    }
  }, [isMuted]);

  return { playSound };
};