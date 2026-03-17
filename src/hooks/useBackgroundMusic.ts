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

    const playPianoNote = (freq: number, delay: number) => {
      if (!audioCtx.current) return;
      
      const osc = audioCtx.current.createOscillator();
      const gain = audioCtx.current.createGain();
      
      // Triangle wave for a softer, more piano-like timbre
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime + delay);
      
      gain.gain.setValueAtTime(0, audioCtx.current.currentTime + delay);
      // Soft attack
      gain.gain.linearRampToValueAtTime(0.02, audioCtx.current.currentTime + delay + 0.1);
      // Long decay for ambient feel
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + delay + 4);
      
      osc.connect(gain);
      gain.connect(audioCtx.current.destination);
      
      osc.start(audioCtx.current.currentTime + delay);
      osc.stop(audioCtx.current.currentTime + delay + 4);
      
      oscillators.current.push(osc);
    };

    const interval = setInterval(() => {
      // Soft piano chords (C major 7, F major 7 feel)
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [349.23, 440.00, 523.25, 659.25]  // Fmaj7
      ];
      const chord = chords[Math.floor(Math.random() * chords.length)];
      
      chord.forEach((note, i) => {
        // Arpeggiate slightly
        playPianoNote(note, i * 0.2);
      });
    }, 6000);

    return () => {
      clearInterval(interval);
      oscillators.current.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      oscillators.current = [];
    };
  }, [isMuted]);
};