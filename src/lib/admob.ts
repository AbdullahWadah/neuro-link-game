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
  phase:
    | 'preview'
    | 'missing_plugin'
    | 'missing_unit_id'
    | 'initializing'
    | 'loading'
    | 'showing'
    | 'dismissed'
    | 'rewarded'
    | 'failed_to_load'
    | 'failed_to_show'
    | 'error';
  message: string;
  details?: unknown;
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

const stringifyError = (error: unknown) => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown AdMob error';
  }
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
          phase: 'preview',
          message: 'Browser preview is simulating a rewarded test ad.',
        });
      }, 1400);
    });
  }

  if (!status.pluginDetected) {
    return {
      rewarded: false,
      provider: 'admob',
      status,
      phase: 'missing_plugin',
      message: 'AdMob native plugin was not detected in this build.',
    };
  }

  if (!status.hasRewardedHintsUnitId) {
    return {
      rewarded: false,
      provider: 'admob',
      status,
      phase: 'missing_unit_id',
      message: 'Rewarded test ad unit ID is missing.',
    };
  }

  const listeners: PluginListenerHandle[] = [];
  let rewardedFromEvent = false;
  let latestFailure: RewardedAdResult | null = null;

  try {
    await AdMob.initialize({
      initializeForTesting: true,
    });

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.Loaded, (info) => {
        console.log('Rewarded ad loaded', info);
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.Showed, () => {
        console.log('Rewarded ad showed');
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
        console.log('Rewarded ad dismissed');
        if (!rewardedFromEvent && !latestFailure) {
          latestFailure = {
            rewarded: false,
            provider: 'admob',
            status,
            phase: 'dismissed',
            message: 'Rewarded test ad was closed before the reward completed.',
          };
        }
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.Rewarded, (reward) => {
        rewardedFromEvent = true;
        latestFailure = null;
        console.log('Rewarded ad reward earned', reward);
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
        console.error('Rewarded ad failed to load', error);
        latestFailure = {
          rewarded: false,
          provider: 'admob',
          status,
          phase: 'failed_to_load',
          message: `Rewarded test ad failed to load: ${stringifyError(error)}`,
          details: error,
        };
      }),
    );

    listeners.push(
      await AdMob.addListener(RewardAdPluginEvents.FailedToShow, (error) => {
        console.error('Rewarded ad failed to show', error);
        latestFailure = {
          rewarded: false,
          provider: 'admob',
          status,
          phase: 'failed_to_show',
          message: `Rewarded test ad failed to show: ${stringifyError(error)}`,
          details: error,
        };
      }),
    );

    await AdMob.prepareRewardVideoAd({
      adId: ADMOB_UNIT_IDS.rewardedHints,
      isTesting: true,
      npa: false,
    });

    const reward = await AdMob.showRewardVideoAd();

    await removeListeners(listeners);

    if (rewardedFromEvent || Boolean(reward)) {
      return {
        rewarded: true,
        provider: 'admob',
        status,
        phase: 'rewarded',
        message: 'Google AdMob test rewarded ad completed successfully.',
        details: reward,
      };
    }

    if (latestFailure) {
      return latestFailure;
    }

    return {
      rewarded: false,
      provider: 'admob',
      status,
      phase: 'dismissed',
      message: 'Rewarded test ad finished without a reward event.',
      details: reward,
    };
  } catch (error) {
    await removeListeners(listeners);
    console.error('Rewarded ad failed:', error);

    return latestFailure ?? {
      rewarded: false,
      provider: 'admob',
      status,
      phase: 'error',
      message: `Rewarded test ad error: ${stringifyError(error)}`,
      details: error,
    };
  }
};
