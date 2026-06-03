import { Capacitor, type PluginListenerHandle } from '@capacitor/core';
import {
  AdMob,
  InterstitialAdPluginEvents,
  RewardAdPluginEvents,
} from '@capacitor-community/admob';

export const ADMOB_TEST_MODE = import.meta.env.VITE_ADMOB_TEST_MODE
  ? import.meta.env.VITE_ADMOB_TEST_MODE === 'true'
  : !import.meta.env.PROD;

const ADMOB_PRODUCTION_UNIT_IDS = {
  rewardedHints: 'ca-app-pub-3617236311704997/8483716593',
  bannerHome: '',
  interstitialLevelComplete: 'ca-app-pub-3617236311704997/8041342396',
};

const ADMOB_TEST_UNIT_IDS = {
  rewardedHints: 'ca-app-pub-3940256099942544/5224354917',
  bannerHome: 'ca-app-pub-3940256099942544/6300978111',
  interstitialLevelComplete: 'ca-app-pub-3940256099942544/1033173712',
};

const activeDefaultUnitIds = ADMOB_TEST_MODE ? ADMOB_TEST_UNIT_IDS : ADMOB_PRODUCTION_UNIT_IDS;

export const ADMOB_UNIT_IDS = {
  rewardedHints: (import.meta.env.VITE_ADMOB_REWARDED_HINTS_ID || activeDefaultUnitIds.rewardedHints).trim(),
  bannerHome: (import.meta.env.VITE_ADMOB_BANNER_HOME_ID || activeDefaultUnitIds.bannerHome).trim(),
  interstitialLevelComplete: (import.meta.env.VITE_ADMOB_INTERSTITIAL_LEVEL_COMPLETE_ID || activeDefaultUnitIds.interstitialLevelComplete).trim(),
};

export interface AdMobStatus {
  platform: string;
  isNative: boolean;
  hasRewardedHintsUnitId: boolean;
  hasInterstitialUnitId: boolean;
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
    | 'dismissed'
    | 'rewarded'
    | 'failed_to_load'
    | 'failed_to_show'
    | 'error';
  message: string;
  details?: unknown;
}

export interface InterstitialAdResult {
  shown: boolean;
  provider: 'preview' | 'admob';
  status: AdMobStatus;
  phase:
    | 'preview'
    | 'skipped_ad_free'
    | 'missing_plugin'
    | 'missing_unit_id'
    | 'shown'
    | 'dismissed'
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
    hasInterstitialUnitId: Boolean(ADMOB_UNIT_IDS.interstitialLevelComplete),
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

export const initializeAdMob = async () => {
  await AdMob.initialize({
    initializeForTesting: ADMOB_TEST_MODE,
  });
};

export const shouldShowInterstitialForLevel = (levelId: number, isAdFree: boolean) => {
  return !isAdFree && levelId > 0 && levelId % 6 === 0;
};

export const showRewardedHintAd = async (): Promise<RewardedAdResult> => {
  const status = getAdMobStatus();

  if (!status.isNative) {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          rewarded: true,
          provider: 'preview',
          status,
          phase: 'preview',
          message: 'Browser preview is simulating a rewarded ad.',
        });
      }, 1100);
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
      message: 'Rewarded ad unit ID is missing.',
    };
  }

  const listeners: PluginListenerHandle[] = [];
  let rewardedFromEvent = false;
  let latestFailure: RewardedAdResult | null = null;

  try {
    await initializeAdMob();

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
            message: 'The ad was closed before the reward was earned.',
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
          message: `Rewarded ad failed to load: ${stringifyError(error)}`,
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
          message: `Rewarded ad failed to show: ${stringifyError(error)}`,
          details: error,
        };
      }),
    );

    await AdMob.prepareRewardVideoAd({
      adId: ADMOB_UNIT_IDS.rewardedHints,
      isTesting: ADMOB_TEST_MODE,
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
        message: 'You earned the reward after watching the ad.',
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
      message: 'The ad finished without a reward event.',
      details: reward,
    };
  } catch (error) {
    await removeListeners(listeners);

    return latestFailure ?? {
      rewarded: false,
      provider: 'admob',
      status,
      phase: 'error',
      message: `Rewarded ad error: ${stringifyError(error)}`,
      details: error,
    };
  }
};

export const showInterstitialLevelAd = async (isAdFree: boolean): Promise<InterstitialAdResult> => {
  const status = getAdMobStatus();

  if (isAdFree) {
    return {
      shown: false,
      provider: 'admob',
      status,
      phase: 'skipped_ad_free',
      message: 'Interstitial ads are disabled because No Ads is active.',
    };
  }

  if (!status.isNative) {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve({
          shown: true,
          provider: 'preview',
          status,
          phase: 'preview',
          message: 'Browser preview is simulating an interstitial ad.',
        });
      }, 850);
    });
  }

  if (!status.pluginDetected) {
    return {
      shown: false,
      provider: 'admob',
      status,
      phase: 'missing_plugin',
      message: 'AdMob native plugin was not detected in this build.',
    };
  }

  if (!status.hasInterstitialUnitId) {
    return {
      shown: false,
      provider: 'admob',
      status,
      phase: 'missing_unit_id',
      message: 'Interstitial ad unit ID is missing.',
    };
  }

  const listeners: PluginListenerHandle[] = [];
  let latestFailure: InterstitialAdResult | null = null;

  try {
    await initializeAdMob();

    listeners.push(
      await AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info) => {
        console.log('Interstitial ad loaded', info);
      }),
    );

    listeners.push(
      await AdMob.addListener(InterstitialAdPluginEvents.Showed, () => {
        console.log('Interstitial ad showed');
      }),
    );

    listeners.push(
      await AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
        console.log('Interstitial ad dismissed');
      }),
    );

    listeners.push(
      await AdMob.addListener(InterstitialAdPluginEvents.FailedToLoad, (error) => {
        latestFailure = {
          shown: false,
          provider: 'admob',
          status,
          phase: 'failed_to_load',
          message: `Interstitial ad failed to load: ${stringifyError(error)}`,
          details: error,
        };
      }),
    );

    listeners.push(
      await AdMob.addListener(InterstitialAdPluginEvents.FailedToShow, (error) => {
        latestFailure = {
          shown: false,
          provider: 'admob',
          status,
          phase: 'failed_to_show',
          message: `Interstitial ad failed to show: ${stringifyError(error)}`,
          details: error,
        };
      }),
    );

    await AdMob.prepareInterstitial({
      adId: ADMOB_UNIT_IDS.interstitialLevelComplete,
      isTesting: ADMOB_TEST_MODE,
      npa: false,
    });

    await AdMob.showInterstitial();
    await removeListeners(listeners);

    if (latestFailure) {
      return latestFailure;
    }

    return {
      shown: true,
      provider: 'admob',
      status,
      phase: 'shown',
      message: 'Google test interstitial ad was shown successfully.',
    };
  } catch (error) {
    await removeListeners(listeners);

    return latestFailure ?? {
      shown: false,
      provider: 'admob',
      status,
      phase: 'error',
      message: `Interstitial ad error: ${stringifyError(error)}`,
      details: error,
    };
  }
};
