import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { AdMob } from '@capacitor-community/admob';

// Initialize mobile-specific features
const initMobile = async () => {
  try {
    await AdMob.initialize({
      requestTrackingAuthorization: false,
      initializeForTesting: true,
    } as any);

    await SplashScreen.hide();
    await StatusBar.hide();
  } catch (e) {
    console.log('Native mobile features not available');
  }
};

initMobile();

createRoot(document.getElementById("root")!).render(<App />);