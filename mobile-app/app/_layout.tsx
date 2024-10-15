import { loadFonts } from "@/constants/fonts";
import { expoDb } from "@/database/db";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { initializeDatabase } from "@/services/db.service";
import { Colors } from "@/constants/colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  useDrizzleStudio(expoDb);

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
      <View>
        <Text>Error</Text>
      </View>
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
