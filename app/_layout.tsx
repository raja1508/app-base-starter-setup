import { Stack, SplashScreen } from "expo-router";
import "@/global.css";
import { useEffect } from "react";
import {useFonts} from "expo-font"; 

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf')
  })

  useEffect(() => {
    // Hide splash only when both fonts and auth are loaded
    // && authLoaded
    if (fontsLoaded) {
      
      SplashScreen.hideAsync()
    }

    // authLoaded
  }, [fontsLoaded])

  // Don't render app until both are ready
  // || !authLoaded
  if (!fontsLoaded) return null;

  return <Stack />;
}
