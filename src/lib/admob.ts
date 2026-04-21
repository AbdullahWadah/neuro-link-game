import { Capacitor } from '@capacitor/core';

export const ADMOB_UNIT_IDS = {
  rewardedHints: (import.meta.env.VITE_ADMOB_REWARDED_HINTS_ID || '').trim(),
  bannerHome: (import.meta.env.VITE_ADMOB_BANNER_HOME_ID || '').trim(),
  interstitialLevelComplete: (import.meta.env.VITE_ADMOB_INTERSTITIAL_LEVEL_COMPLETE_ID || '').trim(),
};

export interface AdMobStatus {
  platform: string;
  isNative: boolean;
  hasRewardedHintsUnitId: boolean;
  pluginDetected: boolean;
}

export interface RewardedAdResult {
  rewarded: boolean;
  provider: 'preview';
  status: AdMobStatus;
}

export const getAdMobStatus = (): AdMobStatus => {
  const platform = Capacitor.getPlatform();
  const isNative = Capacitor.isNativePlatform();
  const pluginDetected = Boolean((window as Window & { Capacitor?: { Plugins?: Record<string, unknown> } }).Capacitor?.Plugins?.AdMob);

  return {
    platform,
    isNative,
    hasRewardedHintsUnitId: Boolean(ADMOB_UNIT_IDS.rewardedHints),
    pluginDetected,
  };
};

const wait = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms));

export const showRewardedHintAd = async (durationMs = 3200): Promise<RewardedAdResult> => {
  const status = getAdMobStatus();

  await wait(durationMs);

  return {
    rewarded: true,
    provider: 'preview',
    status,
  };
};
