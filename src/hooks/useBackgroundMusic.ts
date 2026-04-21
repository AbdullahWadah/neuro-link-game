import { useEffect, useRef } from 'react';

type ScheduledVoice = {
  sources: AudioScheduledSourceNode[];
  nodes: AudioNode[];
  stopAt: number;
};

const LOOKAHEAD_MS = 250;
const SCHEDULE_AHEAD_SECONDS = 1.2;
const TEMPO = 68;
const STEP_DURATION = (60 / TEMPO) / 2;
const STEPS_PER_BAR = 8;

const PROGRESSION = [
  { root: 220, chord: [0, 4, 7, 11] },
  { root: 196, chord: [0, 3, 7, 10] },
  { root: 174.61, chord: [0, 5, 7, 10] },
  { root: 164.81, chord: [0, 4, 7, 11] },
  { root: 196, chord: [0, 3, 7, 10] },
  { root: 220, chord: [0, 4, 7, 11] },
  { root: 246.94, chord: [0, 4, 7, 11] },
  { root: 196, chord: [0, 3, 7, 10] },
];

const semitone = (root: number, offset: number) => root * Math.pow(2, offset / 12);

const arpeggioPattern = [0, 2, 1, 3, 2, 1, 0, 2];
const melodyPattern: Array<number | null> = [
  null, 14, null, null, 12, null, 11, null,
  null, 10, null, null, 12, null, 14, null,
  null, 12, null, null, 10, null, 7, null,
  null, 9, null, null, 11, null, 12, null,
  null, 10, null, null, 12, null, 14, null,
  null, 12, null, null, 11, null, 9, null,
  null, 14, null, null, 16, null, 14, null,
  null, 12, null, null, 11, null, 9, null,
];

const createPianoVoice = (
  context: AudioContext,
  destination: AudioNode,
  frequency: number,
  startTime: number,
  duration: number,
  volume: number,
): ScheduledVoice => {
  const fundamental = context.createOscillator();
  const overtone = context.createOscillator();
  const shimmer = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  fundamental.type = 'sine';
  overtone.type = 'triangle';
  shimmer.type = 'sine';

  fundamental.frequency.setValueAtTime(frequency, startTime);
  overtone.frequency.setValueAtTime(frequency * 2, startTime);
  shimmer.frequency.setValueAtTime(frequency * 3, startTime);
  overtone.detune.setValueAtTime(3, startTime);
  shimmer.detune.setValueAtTime(-4, startTime);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2200, startTime);
  filter.Q.value = 0.35;

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(volume * 0.35, startTime + 0.32);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  fundamental.connect(filter);
  overtone.connect(filter);
  shimmer.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  fundamental.start(startTime);
  overtone.start(startTime);
  shimmer.start(startTime);
  fundamental.stop(startTime + duration + 0.05);
  overtone.stop(startTime + duration + 0.05);
  shimmer.stop(startTime + duration + 0.05);

  return {
    sources: [fundamental, overtone, shimmer],
    nodes: [fundamental, overtone, shimmer, filter, gain],
    stopAt: startTime + duration + 0.05,
  };
};

const createGuitarPluck = (
  context: AudioContext,
  destination: AudioNode,
  frequency: number,
  startTime: number,
  duration: number,
  volume: number,
): ScheduledVoice => {
  const body = context.createOscillator();
  const string = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  body.type = 'triangle';
  string.type = 'sine';

  body.frequency.setValueAtTime(frequency, startTime);
  string.frequency.setValueAtTime(frequency * 2, startTime);
  string.detune.setValueAtTime(5, startTime);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1600, startTime);
  filter.Q.value = 0.45;

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(volume * 0.25, startTime + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  body.connect(filter);
  string.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  body.start(startTime);
  string.start(startTime);
  body.stop(startTime + duration + 0.05);
  string.stop(startTime + duration + 0.05);

  return {
    sources: [body, string],
    nodes: [body, string, filter, gain],
    stopAt: startTime + duration + 0.05,
  };
};

export const useBackgroundMusic = (isMuted: boolean) => {
  const audioCtx = useRef<AudioContext | null>(null);
  const compressor = useRef<DynamicsCompressorNode | null>(null);
  const masterGain = useRef<GainNode | null>(null);
  const schedulerInterval = useRef<number | null>(null);
  const nextNoteTime = useRef(0);
  const currentStep = useRef(0);
  const activeVoices = useRef<ScheduledVoice[]>([]);

  useEffect(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    }

    const context = audioCtx.current;

    if (!compressor.current || !masterGain.current) {
      const nextCompressor = context.createDynamicsCompressor();
      const nextMasterGain = context.createGain();

      nextCompressor.threshold.value = -20;
      nextCompressor.knee.value = 18;
      nextCompressor.ratio.value = 2;
      nextCompressor.attack.value = 0.01;
      nextCompressor.release.value = 0.22;

      nextMasterGain.gain.value = 0.0001;
      nextMasterGain.connect(nextCompressor);
      nextCompressor.connect(context.destination);

      compressor.current = nextCompressor;
      masterGain.current = nextMasterGain;
    }

    const destination = masterGain.current;
    if (!destination) return;

    const resumeAudio = () => {
      if (context.state === 'suspended') {
        void context.resume();
      }
    };

    const clearScheduler = () => {
      if (schedulerInterval.current) {
        window.clearInterval(schedulerInterval.current);
        schedulerInterval.current = null;
      }
    };

    const cleanupExpiredVoices = () => {
      const now = context.currentTime;
      activeVoices.current = activeVoices.current.filter(voice => {
        if (voice.stopAt > now - 0.1) return true;
        voice.nodes.forEach(node => {
          try {
            node.disconnect();
          } catch {}
        });
        return false;
      });
    };

    const stopAllVoices = (fadeOutSeconds = 0.16) => {
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

    const scheduleStep = (step: number, startTime: number) => {
      const barIndex = Math.floor(step / STEPS_PER_BAR) % PROGRESSION.length;
      const stepInBar = step % STEPS_PER_BAR;
      const { root, chord } = PROGRESSION[barIndex];
      const melodyOffset = melodyPattern[step % melodyPattern.length];

      const bassNote = root / 2;
      const pluckNote = semitone(root, chord[arpeggioPattern[stepInBar]]);

      if (stepInBar === 0 || stepInBar === 4) {
        activeVoices.current.push(createGuitarPluck(context, destination, bassNote, startTime, 1.8, 0.016));
      }

      activeVoices.current.push(createGuitarPluck(context, destination, pluckNote, startTime + 0.01, 1.45, 0.012));

      if (stepInBar === 2 || stepInBar === 6) {
        const supportTone = semitone(root, chord[(stepInBar + 1) % chord.length]) / 2;
        activeVoices.current.push(createPianoVoice(context, destination, supportTone, startTime + 0.03, 2.2, 0.008));
      }

      if (melodyOffset !== null) {
        activeVoices.current.push(createPianoVoice(context, destination, semitone(root, melodyOffset), startTime + 0.05, 2.8, 0.01));
      }
    };

    window.addEventListener('pointerdown', resumeAudio, { passive: true });

    if (isMuted) {
      clearScheduler();
      stopAllVoices();
      destination.gain.cancelScheduledValues(context.currentTime);
      destination.gain.setTargetAtTime(0.0001, context.currentTime, 0.2);
      if (context.state !== 'suspended') {
        void context.suspend();
      }

      return () => {
        window.removeEventListener('pointerdown', resumeAudio);
      };
    }

    if (context.state === 'suspended') {
      void context.resume();
    }

    destination.gain.cancelScheduledValues(context.currentTime);
    destination.gain.setTargetAtTime(0.075, context.currentTime, 0.55);

    nextNoteTime.current = context.currentTime + 0.12;
    currentStep.current = 0;

    if (!schedulerInterval.current) {
      schedulerInterval.current = window.setInterval(() => {
        cleanupExpiredVoices();

        while (nextNoteTime.current < context.currentTime + SCHEDULE_AHEAD_SECONDS) {
          scheduleStep(currentStep.current, nextNoteTime.current);
          nextNoteTime.current += STEP_DURATION;
          currentStep.current = (currentStep.current + 1) % (PROGRESSION.length * STEPS_PER_BAR);
        }
      }, LOOKAHEAD_MS);
    }

    return () => {
      window.removeEventListener('pointerdown', resumeAudio);
      clearScheduler();
      stopAllVoices();
      destination.gain.cancelScheduledValues(context.currentTime);
      destination.gain.setTargetAtTime(0.0001, context.currentTime, 0.18);
    };
  }, [isMuted]);
};
