import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const triggerHaptic = async (pattern: 'light' | 'medium' | 'heavy' | 'success' | 'error' | number[] = 'light') => {
  try {
    if (typeof pattern === 'string') {
      switch (pattern) {
        case 'light':
          await Haptics.impact({ style: ImpactStyle.Light });
          break;
        case 'medium':
          await Haptics.impact({ style: ImpactStyle.Medium });
          break;
        case 'heavy':
          await Haptics.impact({ style: ImpactStyle.Heavy });
          break;
        case 'success':
          await Haptics.notification({ type: 'SUCCESS' as any });
          break;
        case 'error':
          await Haptics.notification({ type: 'ERROR' as any });
          break;
      }
    } else if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  } catch (e) {
    // Fallback to web vibration if plugin fails
    if ('vibrate' in navigator && typeof pattern !== 'string') {
      navigator.vibrate(pattern);
    }
  }
};