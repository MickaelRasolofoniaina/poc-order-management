import { loadFonts } from "@/constants/fonts";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function setup() {
      try {
        await loadFonts();
        await SplashScreen.hideAsync();
        setIsReady(true);
      } catch (error) {
        setIsReady(false);
        console.warn(error);
      }
    }

    setup();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
