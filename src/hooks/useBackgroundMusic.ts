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

    const playPianoNote = (freq: number, delay: number, duration: number = 2) => {
      if (!audioCtx.current) return;
      
      const osc = audioCtx.current.createOscillator();
      const gain = audioCtx.current.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime + delay);
      
      gain.gain.setValueAtTime(0, audioCtx.current.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.05, audioCtx.current.currentTime + delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + delay + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.current.destination);
      
      osc.start(audioCtx.current.currentTime + delay);
      osc.stop(audioCtx.current.currentTime + delay + duration);
      
      oscillators.current.push(osc);
    };

    const playMelody = () => {
      const melody = [
        { note: 261.63, time: 0 },    // C4
        { note: 329.63, time: 0.5 },  // E4
        { note: 392.00, time: 1.0 },  // G4
        { note: 523.25, time: 1.5 },  // C5
        { note: 493.88, time: 2.0 },  // B4
        { note: 392.00, time: 2.5 },  // G4
        { note: 329.63, time: 3.0 },  // E4
        { note: 261.63, time: 3.5 },  // C4
      ];

      melody.forEach(m => playPianoNote(m.note, m.time, 1.5));
    };

    const interval = setInterval(() => {
      playMelody();
    }, 4000);

    playMelody(); // Initial play

    return () => {
      clearInterval(interval);
      oscillators.current.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      oscillators.current = [];
    };
  }, [isMuted]);
};