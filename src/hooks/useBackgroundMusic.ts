import { useEffect, useRef } from 'react';

type AmbientNode = {
  source: OscillatorNode | AudioBufferSourceNode;
  gain: GainNode;
};

const createNoiseBuffer = (audioContext: AudioContext) => {
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const channel = buffer.getChannelData(0);

  for (let i = 0; i < channel.length; i += 1) {
    channel[i] = (Math.random() * 2 - 1) * 0.15;
  }

  return buffer;
};

export const useBackgroundMusic = (isMuted: boolean) => {
  const audioCtx = useRef<AudioContext | null>(null);
  const activeNodes = useRef<AmbientNode[]>([]);
  const loopTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (isMuted) {
      if (loopTimeout.current) {
        window.clearTimeout(loopTimeout.current);
        loopTimeout.current = null;
      }

      if (audioCtx.current) {
        audioCtx.current.suspend();
      }
      return;
    }

    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    }

    const context = audioCtx.current;
    if (context.state === 'suspended') {
      context.resume();
    }

    const cleanupNodes = () => {
      activeNodes.current.forEach(({ source, gain }) => {
        try {
          source.stop();
        } catch {}
        try {
          source.disconnect();
        } catch {}
        try {
          gain.disconnect();
        } catch {}
      });
      activeNodes.current = [];
    };

    const schedulePad = (frequency: number, startTime: number, duration: number, gainAmount: number) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(frequency, startTime);
      oscillator.detune.setValueAtTime(-4, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, startTime);
      filter.Q.value = 0.4;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(gainAmount, startTime + 1.4);
      gain.gain.exponentialRampToValueAtTime(Math.max(gainAmount * 0.6, 0.0001), startTime + duration - 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration + 0.05);
      activeNodes.current.push({ source: oscillator, gain });
    };

    const scheduleBell = (frequency: number, startTime: number, duration = 3.6, gainAmount = 0.028) => {
      const carrier = context.createOscillator();
      const shimmer = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      carrier.type = 'sine';
      carrier.frequency.setValueAtTime(frequency, startTime);

      shimmer.type = 'triangle';
      shimmer.frequency.setValueAtTime(frequency * 2, startTime);
      shimmer.detune.setValueAtTime(8, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, startTime);
      filter.Q.value = 0.6;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(gainAmount, startTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.002, startTime + duration);

      carrier.connect(filter);
      shimmer.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);

      carrier.start(startTime);
      shimmer.start(startTime);
      carrier.stop(startTime + duration + 0.05);
      shimmer.stop(startTime + duration + 0.05);

      activeNodes.current.push({ source: carrier, gain });
      activeNodes.current.push({ source: shimmer, gain });
    };

    const scheduleTexture = (startTime: number, duration: number) => {
      const noiseSource = context.createBufferSource();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      noiseSource.buffer = createNoiseBuffer(context);
      noiseSource.loop = true;

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(700, startTime);
      filter.Q.value = 0.8;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0035, startTime + 1.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);

      noiseSource.start(startTime);
      noiseSource.stop(startTime + duration + 0.05);
      activeNodes.current.push({ source: noiseSource, gain });
    };

    const playLoop = () => {
      cleanupNodes();

      const start = context.currentTime + 0.08;
      const sectionLength = 18;
      const pads = [
        { root: 261.63, offset: 0, length: 6.4 },
        { root: 349.23, offset: 4.8, length: 6.6 },
        { root: 293.66, offset: 9.6, length: 6.4 },
        { root: 392.0, offset: 13.4, length: 5.8 },
      ];

      pads.forEach(({ root, offset, length }) => {
        schedulePad(root, start + offset, length, 0.013);
        schedulePad(root * 1.5, start + offset + 0.3, length - 0.2, 0.008);
      });

      [
        { note: 523.25, time: 0.5 },
        { note: 659.25, time: 2.4 },
        { note: 587.33, time: 4.7 },
        { note: 698.46, time: 6.6 },
        { note: 659.25, time: 8.9 },
        { note: 587.33, time: 11.2 },
        { note: 783.99, time: 13.6 },
        { note: 698.46, time: 15.4 },
      ].forEach(({ note, time }) => {
        scheduleBell(note, start + time);
      });

      scheduleTexture(start, sectionLength);

      loopTimeout.current = window.setTimeout(playLoop, (sectionLength - 0.35) * 1000);
    };

    playLoop();

    return () => {
      if (loopTimeout.current) {
        window.clearTimeout(loopTimeout.current);
        loopTimeout.current = null;
      }
      cleanupNodes();
    };
  }, [isMuted]);
};
