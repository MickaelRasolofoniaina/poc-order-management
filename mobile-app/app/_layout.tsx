import { loadFonts } from "@/constants/fonts";
//import { expoDb } from "@/database/db";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
//import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { initializeDatabase } from "@/services/db.service";
import { Colors } from "@/constants/colors";
import { Error } from "@/components/layout/Error";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  //useDrizzleStudio(expoDb);

  useEffect(() => {
    async function setupFont() {
      await loadFonts();
      await SplashScreen.hideAsync();
      try {
        await initializeDatabase();
        setState("loaded");
      } catch (error) {
        setState("error");
        console.warn(error);
      }
    }

    setupFont();
  }, []);

  if (state === "loading") {
    return (
      <ActivityIndicator
        size="large"
        className="flex-1"
        color={Colors.blue[100]}
      />
    );
  }

  if (state === "error") {
    return (
      <Error message="Une erreur s'est produite lors de l'initialisation de l'application" />
    );
  }

  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
