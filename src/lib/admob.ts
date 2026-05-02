import { Capacitor } from '@capacitor/core';
import { AdMob } from '@capacitor-community/admob';

// Official Google AdMob Test Unit IDs
export const ADMOB_UNIT_IDS = {
  rewardedHints: (import.meta.env.VITE_ADMOB_REWARDED_HINTS_ID || 'ca-app-pub-3940256099942544/5224354917').trim(),
  bannerHome: (import.meta.env.VITE_ADMOB_BANNER_HOME_ID || 'ca-app-pub-3940256099942544/6300978111').trim(),
  interstitialLevelComplete: (import.meta.env.VITE_ADMOB_INTERSTITIAL_LEVEL_COMPLETE_ID || 'ca-app-pub-3940256099942544/1033173712').trim(),
};

export interface AdMobStatus {
  platform: string;
  isNative: boolean;
  hasRewardedHintsUnitId: boolean;
  pluginDetected: boolean;
}

export interface RewardedAdResult {
  rewarded: boolean;
  provider: 'preview' | 'admob';
  status: AdMobStatus;
}

export const getAdMobStatus = (): AdMobStatus => {
  const platform = Capacitor.getPlatform();
  const isNative = Capacitor.isNativePlatform();
  const pluginDetected = Boolean((window as any).Capacitor?.Plugins?.AdMob);

  return {
    platform,
    isNative,
    hasRewardedHintsUnitId: Boolean(ADMOB_UNIT_IDS.rewardedHints),
    pluginDetected,
  };
};

export const showRewardedHintAd = async (): Promise<RewardedAdResult> => {
  const status = getAdMobStatus();

  if (!status.isNative) {
    console.log('Simulating rewarded ad in browser...');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          rewarded: true,
          provider: 'preview',
          status,
        });
      }, 2000);
    });
  }

  try {
    await AdMob.prepareRewardVideoAd({
      adId: ADMOB_UNIT_IDS.rewardedHints,
      isTesting: true,
    });

    const reward = await AdMob.showRewardVideoAd();

    return {
      rewarded: !!reward,
      provider: 'admob',
      status,
    };
  } catch (error) {
    console.error('Rewarded ad failed:', error);

    return {
      rewarded: false,
      provider: 'admob',
      status,
    };
  }
};