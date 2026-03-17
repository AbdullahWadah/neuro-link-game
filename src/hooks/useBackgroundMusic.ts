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

    const playPianoNote = (freq: number, delay: number, duration: number = 3) => {
      if (!audioCtx.current) return;
      
      const osc = audioCtx.current.createOscillator();
      const gain = audioCtx.current.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.current.currentTime + delay);
      
      gain.gain.setValueAtTime(0, audioCtx.current.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.03, audioCtx.current.currentTime + delay + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + delay + duration);
      
      osc.connect(gain);
      gain.connect(audioCtx.current.destination);
      
      osc.start(audioCtx.current.currentTime + delay);
      osc.stop(audioCtx.current.currentTime + delay + duration);
      
      oscillators.current.push(osc);
    };

    const playExtendedMelody = () => {
      // A longer, more complex sequence (Cmaj9 -> Fmaj9 -> Am7 -> Gsus4)
      const sequence = [
        // Phrase 1
        { note: 261.63, time: 0 },    // C4
        { note: 329.63, time: 0.75 }, // E4
        { note: 392.00, time: 1.5 },  // G4
        { note: 493.88, time: 2.25 }, // B4
        { note: 587.33, time: 3.0 },  // D5
        
        // Phrase 2
        { note: 349.23, time: 4.5 },  // F4
        { note: 440.00, time: 5.25 }, // A4
        { note: 523.25, time: 6.0 },  // C5
        { note: 659.25, time: 6.75 }, // E5
        { note: 783.99, time: 7.5 },  // G5
        
        // Phrase 3
        { note: 440.00, time: 9.0 },  // A4
        { note: 523.25, time: 9.75 }, // C5
        { note: 659.25, time: 10.5 }, // E5
        { note: 523.25, time: 11.25 },// C5
        
        // Phrase 4
        { note: 392.00, time: 12.75 },// G4
        { note: 523.25, time: 13.5 }, // C5
        { note: 587.33, time: 14.25 },// D5
        { note: 392.00, time: 15.0 }, // G4
      ];

      sequence.forEach(s => playPianoNote(s.note, s.time, 4));
    };

    const interval = setInterval(() => {
      playExtendedMelody();
    }, 18000); // Longer loop for the extended melody

    playExtendedMelody();

    return () => {
      clearInterval(interval);
      oscillators.current.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      oscillators.current = [];
    };
  }, [isMuted]);
};