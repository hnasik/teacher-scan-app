import {
  AdMob,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents
} from '@capacitor-community/admob';

const BANNER_AD_UNIT_ID =
  'ca-app-pub-3984401016716571/8593407470';

export async function showBannerAd() {
  try {
    await AdMob.initialize();

    console.log('AdMob initialized successfully');

    await AdMob.addListener(
      BannerAdPluginEvents.Loaded,
      () => {
        console.log('Production banner loaded successfully');
      }
    );

    await AdMob.addListener(
      BannerAdPluginEvents.FailedToLoad,
      (error) => {
  console.error(
    'Production banner failed to load:',
    JSON.stringify(error, null, 2)
  );
}
    );

    await AdMob.showBanner({
      adId: BANNER_AD_UNIT_ID,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false
    });

    console.log('Production banner requested');

 } catch (error) {
  console.error(
    'AdMob error:',
    JSON.stringify(error, null, 2)
  );
}
}

document.addEventListener('DOMContentLoaded', showBannerAd);