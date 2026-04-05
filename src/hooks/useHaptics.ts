import { triggerHaptic as trigger } from '../utils/haptics';

/**
 * A simple hook to provide haptic feedback capabilities to components.
 */
export const useHaptics = () => {
  return {
    triggerHaptic: trigger
  };
};