import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

// Initialize mobile-specific features
const initMobile = async () => {
  try {
    // Hide splash screen once app is ready
    await SplashScreen.hide();
    
    // Make the game immersive by hiding the status bar
    await StatusBar.hide();
  } catch (e) {
    // Not running on a mobile device, ignore
    console.log('Native mobile features not available');
  }
};

initMobile();

createRoot(document.getElementById("root")!).render(<App />);