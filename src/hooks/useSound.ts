import { useCallback } from 'react';

export const useSound = (isMuted: boolean) => {
  const playSound = useCallback((type: 'connect' | 'win' | 'click' | 'error') => {
    if (isMuted) return;
    
    // In a real Capacitor app, you'd use a native audio plugin or HTML5 Audio
    // For now, we'll log the sound trigger to simulate the logic
    console.log(`Playing sound: ${type}`);
    
    // Example of how you'd implement it:
    // const audio = new Audio(`/sounds/${type}.mp3`);
    // audio.play().catch(() => {});
  }, [isMuted]);

  return { playSound };
};