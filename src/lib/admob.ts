import { Capacitor, type PluginListenerHandle } from '@capacitor/core';
import { AdMob, RewardAdPluginEvents } from '@capacitor-community/admob';

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
  const pluginDetected = Capacitor.isPluginAvailable('AdMob');

  return {
    platform,
    isNative,
    hasRewardedHintsUnitId: Boolean(ADMOB_UNIT_IDS.rewardedHints),
    pluginDetected,
  };
};

const removeListeners = async (listeners: PluginListenerHandle[]) => {
  await Promise.all(listeners.map(listener => listener.remove().catch(() => undefined)));
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

  if (!status.pluginDetected || !status.hasRewardedHintsUnitId) {
    console.error('AdMob rewarded ad is not available', status);
    return {
      rewarded: false,
      provider: 'admob',
      status,
    };
  }

  const listeners: PluginListenerHandle[] = [];
  let rewardedFromEvent = false;

  try {
    await AdMob.initialize({
      initializeForTesting: true,
    });

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.Rewarded, () => {
        rewardedFromEvent = true;
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
        console.error('Rewarded ad failed to load', error);
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.FailedToShow, (error) => {
        console.error('Rewarded ad failed to show', error);
      }),
    );

    await AdMob.prepareRewardVideoAd({
      adId: ADMOB_UNIT_IDS.rewardedHints,
      isTesting: true,
      immersiveMode: true,
      npa: false,
    });

    const reward = await AdMob.showRewardVideoAd();

    await removeListeners(listeners);

    return {
      rewarded: rewardedFromEvent || Boolean(reward),
      provider: 'admob',
      status,
    };
  } catch (error) {
    await removeListeners(listeners);
    console.error('Rewarded ad failed:', error);

    return {
      rewarded: false,
      provider: 'admob',
      status,
    };
  }
};
