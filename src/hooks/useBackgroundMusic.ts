import { useEffect, useRef } from 'react';

type OneShotVoice = {
  sources: AudioScheduledSourceNode[];
  nodes: AudioNode[];
  stopAt: number;
};

type DroneLayer = {
  root: OscillatorNode;
  fifth: OscillatorNode;
  octave: OscillatorNode;
  sub: OscillatorNode;
  gain: GainNode;
  filter: BiquadFilterNode;
};

type TextureLayer = {
  source: AudioBufferSourceNode;
  gain: GainNode;
  filter: BiquadFilterNode;
};

const STEP_LOOKAHEAD_MS = 250;
const SCHEDULE_AHEAD_SECONDS = 1.25;
const TEMPO = 72;
const STEP_DURATION = (60 / TEMPO) / 2;
const STEPS_PER_MEASURE = 8;
const TOTAL_STEPS = 32;
const PROGRESSION = [146.83, 174.61, 130.81, 110.0];
const MELODY_PATTERN: Array<number | null> = [
  12, null, 7, null, 10, null, 7, null,
  14, null, 12, null, 7, null, 5, null,
  10, null, 7, null, 12, null, 7, null,
  14, null, 15, null, 12, null, 7, null,
];
const ACCENT_PATTERN: Array<number | null> = [
  null, 19, null, null, 17, null, null, 14,
  null, 21, null, null, 19, null, null, 17,
  null, 17, null, null, 19, null, null, 14,
  null, 22, null, null, 19, null, null, 17,
];

const semitone = (root: number, offset: number) => root * Math.pow(2, offset / 12);

const createNoiseBuffer = (audioContext: AudioContext) => {
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const channel = buffer.getChannelData(0);

  for (let i = 0; i < channel.length; i += 1) {
    channel[i] = (Math.random() * 2 - 1) * 0.12;
  }

  return buffer;
};

const createDroneLayer = (context: AudioContext, destination: AudioNode, rootFrequency: number): DroneLayer => {
  const root = context.createOscillator();
  const fifth = context.createOscillator();
  const octave = context.createOscillator();
  const sub = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  root.type = 'triangle';
  fifth.type = 'sine';
  octave.type = 'triangle';
  sub.type = 'sine';

  root.frequency.value = rootFrequency;
  fifth.frequency.value = rootFrequency * 1.5;
  octave.frequency.value = rootFrequency * 2;
  sub.frequency.value = rootFrequency / 2;

  root.detune.value = -3;
  fifth.detune.value = 2;
  octave.detune.value = 4;

  filter.type = 'lowpass';
  filter.frequency.value = 820;
  filter.Q.value = 0.5;

  gain.gain.value = 0.0001;

  root.connect(filter);
  fifth.connect(filter);
  octave.connect(filter);
  sub.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  const startAt = context.currentTime + 0.02;
  root.start(startAt);
  fifth.start(startAt);
  octave.start(startAt);
  sub.start(startAt);

  gain.gain.exponentialRampToValueAtTime(0.042, startAt + 2.8);

  return { root, fifth, octave, sub, gain, filter };
};

const createTextureLayer = (context: AudioContext, destination: AudioNode): TextureLayer => {
  const source = context.createBufferSource();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  source.buffer = createNoiseBuffer(context);
  source.loop = true;

  filter.type = 'bandpass';
  filter.frequency.value = 980;
  filter.Q.value = 0.35;

  gain.gain.value = 0.0001;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  source.start(context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0045, context.currentTime + 3.5);

  return { source, gain, filter };
};

export const useBackgroundMusic = (isMuted: boolean) => {
  const audioCtx = useRef<AudioContext | null>(null);
  const masterGain = useRef<GainNode | null>(null);
  const compressor = useRef<DynamicsCompressorNode | null>(null);
  const droneLayer = useRef<DroneLayer | null>(null);
  const textureLayer = useRef<TextureLayer | null>(null);
  const schedulerInterval = useRef<number | null>(null);
  const nextNoteTime = useRef(0);
  const currentStep = useRef(0);
  const activeVoices = useRef<OneShotVoice[]>([]);

  useEffect(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    }

    const context = audioCtx.current;

    if (!masterGain.current || !compressor.current) {
      const nextCompressor = context.createDynamicsCompressor();
      const nextMasterGain = context.createGain();

      nextCompressor.threshold.value = -24;
      nextCompressor.knee.value = 20;
      nextCompressor.ratio.value = 2;
      nextCompressor.attack.value = 0.02;
      nextCompressor.release.value = 0.25;

      nextMasterGain.gain.value = 0.0001;

      nextMasterGain.connect(nextCompressor);
      nextCompressor.connect(context.destination);

      compressor.current = nextCompressor;
      masterGain.current = nextMasterGain;
    }

    const resumeAudio = () => {
      if (context.state === 'suspended') {
        void context.resume();
      }
    };

    window.addEventListener('pointerdown', resumeAudio, { passive: true });

    const clearScheduler = () => {
      if (schedulerInterval.current) {
        window.clearInterval(schedulerInterval.current);
        schedulerInterval.current = null;
      }
    };

    const stopVoices = (fadeOutSeconds = 0.18) => {
      const now = context.currentTime;

      activeVoices.current.forEach(voice => {
        voice.sources.forEach(source => {
          try {
            source.stop(now + fadeOutSeconds);
          } catch {}
        });
        voice.nodes.forEach(node => {
          try {
            node.disconnect();
          } catch {}
        });
      });

      activeVoices.current = [];
    };

    const stopContinuousLayers = () => {
      const now = context.currentTime;

      if (droneLayer.current) {
        const layer = droneLayer.current;
        layer.gain.gain.cancelScheduledValues(now);
        layer.gain.gain.setTargetAtTime(0.0001, now, 0.35);
        [layer.root, layer.fifth, layer.octave, layer.sub].forEach(source => {
          try {
            source.stop(now + 0.5);
            source.disconnect();
          } catch {}
        });
        [layer.gain, layer.filter].forEach(node => {
          try {
            node.disconnect();
          } catch {}
        });
        droneLayer.current = null;
      }

      if (textureLayer.current) {
        const layer = textureLayer.current;
        layer.gain.gain.cancelScheduledValues(now);
        layer.gain.gain.setTargetAtTime(0.0001, now, 0.35);
        try {
          layer.source.stop(now + 0.5);
          layer.source.disconnect();
        } catch {}
        [layer.gain, layer.filter].forEach(node => {
          try {
            node.disconnect();
          } catch {}
        });
        textureLayer.current = null;
      }
    };

    const cleanupExpiredVoices = () => {
      const now = context.currentTime;
      activeVoices.current = activeVoices.current.filter(voice => {
        if (voice.stopAt > now - 0.15) return true;
        voice.nodes.forEach(node => {
          try {
            node.disconnect();
          } catch {}
        });
        return false;
      });
    };

    const scheduleGlassTone = (frequency: number, startTime: number, duration: number, volume: number) => {
      const gain = context.createGain();
      const filter = context.createBiquadFilter();
      const carrier = context.createOscillator();
      const shimmer = context.createOscillator();

      carrier.type = 'sine';
      shimmer.type = 'triangle';

      carrier.frequency.setValueAtTime(frequency, startTime);
      shimmer.frequency.setValueAtTime(frequency * 2, startTime);
      shimmer.detune.setValueAtTime(6, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2600, startTime);
      filter.Q.value = 0.8;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.07);
      gain.gain.exponentialRampToValueAtTime(Math.max(volume * 0.45, 0.0001), startTime + duration * 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      carrier.connect(filter);
      shimmer.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain.current!);

      carrier.start(startTime);
      shimmer.start(startTime);
      carrier.stop(startTime + duration + 0.08);
      shimmer.stop(startTime + duration + 0.08);

      activeVoices.current.push({
        sources: [carrier, shimmer],
        nodes: [gain, filter, carrier, shimmer],
        stopAt: startTime + duration + 0.08,
      });
    };

    const schedulePulse = (frequency: number, startTime: number, duration: number, volume: number) => {
      const osc = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, startTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.985, startTime + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, startTime);
      filter.Q.value = 0.3;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain.current!);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);

      activeVoices.current.push({
        sources: [osc],
        nodes: [gain, filter, osc],
        stopAt: startTime + duration + 0.05,
      });
    };

    const updateDroneForMeasure = (measureIndex: number, startTime: number) => {
      if (!droneLayer.current) return;

      const rootFrequency = PROGRESSION[measureIndex % PROGRESSION.length];
      const layer = droneLayer.current;
      const transitionEnd = startTime + 2.6;

      layer.root.frequency.cancelScheduledValues(startTime);
      layer.fifth.frequency.cancelScheduledValues(startTime);
      layer.octave.frequency.cancelScheduledValues(startTime);
      layer.sub.frequency.cancelScheduledValues(startTime);
      layer.filter.frequency.cancelScheduledValues(startTime);

      layer.root.frequency.exponentialRampToValueAtTime(rootFrequency, transitionEnd);
      layer.fifth.frequency.exponentialRampToValueAtTime(rootFrequency * 1.5, transitionEnd);
      layer.octave.frequency.exponentialRampToValueAtTime(rootFrequency * 2, transitionEnd);
      layer.sub.frequency.exponentialRampToValueAtTime(rootFrequency / 2, transitionEnd);
      layer.filter.frequency.exponentialRampToValueAtTime(760 + measureIndex * 40, transitionEnd);
    };

    const ensureContinuousLayers = () => {
      if (!masterGain.current) return;

      if (!droneLayer.current) {
        droneLayer.current = createDroneLayer(context, masterGain.current, PROGRESSION[0]);
      }

      if (!textureLayer.current) {
        textureLayer.current = createTextureLayer(context, masterGain.current);
      }
    };

    const scheduleStep = (step: number, startTime: number) => {
      const measureIndex = Math.floor(step / STEPS_PER_MEASURE) % PROGRESSION.length;
      const root = PROGRESSION[measureIndex];
      const melodyOffset = MELODY_PATTERN[step % TOTAL_STEPS];
      const accentOffset = ACCENT_PATTERN[step % TOTAL_STEPS];
      const beatInMeasure = step % STEPS_PER_MEASURE;

      if (beatInMeasure === 0) {
        updateDroneForMeasure(measureIndex, startTime);
        schedulePulse(root / 2, startTime, 1.6, 0.012);
      }

      if (beatInMeasure === 4) {
        schedulePulse(root / 2, startTime, 1.1, 0.009);
      }

      if (melodyOffset !== null) {
        scheduleGlassTone(semitone(root, melodyOffset), startTime, 2.8, 0.016);
      }

      if (accentOffset !== null) {
        scheduleGlassTone(semitone(root, accentOffset), startTime + 0.16, 2.2, 0.009);
      }
    };

    if (isMuted) {
      clearScheduler();
      stopVoices();
      stopContinuousLayers();
      if (masterGain.current) {
        masterGain.current.gain.cancelScheduledValues(context.currentTime);
        masterGain.current.gain.setTargetAtTime(0.0001, context.currentTime, 0.22);
      }
      if (context.state !== 'suspended') {
        void context.suspend();
      }

      return () => {
        window.removeEventListener('pointerdown', resumeAudio);
      };
    }

    ensureContinuousLayers();

    if (context.state === 'suspended') {
      void context.resume();
    }

    if (masterGain.current) {
      masterGain.current.gain.cancelScheduledValues(context.currentTime);
      masterGain.current.gain.setTargetAtTime(0.085, context.currentTime, 0.6);
    }

    nextNoteTime.current = context.currentTime + 0.12;
    currentStep.current = 0;

    if (!schedulerInterval.current) {
      schedulerInterval.current = window.setInterval(() => {
        cleanupExpiredVoices();

        while (nextNoteTime.current < context.currentTime + SCHEDULE_AHEAD_SECONDS) {
          scheduleStep(currentStep.current, nextNoteTime.current);
          nextNoteTime.current += STEP_DURATION;
          currentStep.current = (currentStep.current + 1) % TOTAL_STEPS;
        }
      }, STEP_LOOKAHEAD_MS);
    }

    return () => {
      window.removeEventListener('pointerdown', resumeAudio);
      clearScheduler();
      stopVoices();
      stopContinuousLayers();
      if (masterGain.current) {
        masterGain.current.gain.cancelScheduledValues(context.currentTime);
        masterGain.current.gain.setTargetAtTime(0.0001, context.currentTime, 0.2);
      }
    };
  }, [isMuted]);
};
