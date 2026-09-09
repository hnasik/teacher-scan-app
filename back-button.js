import { App } from '@capacitor/app';

let lastBackPress = 0;

App.addListener('backButton', ({ canGoBack }) => {

    // ??? ???? page ????
    if (canGoBack) {
        window.history.back();
        return;
    }

    // Root page-? double back to exit
    const now = Date.now();

    if (now - lastBackPress < 2000) {
        App.exitApp();
    } else {
        lastBackPress = now;

        // ????? Back press
        alert('Press back again to exit');
    }
});