import * as Font from "expo-font";

export enum FontFamily {
  Inter400 = "inter-400",
  Inter500 = "inter-500",
  Inter600 = "inter-600",
  Inter700 = "inter-700",
  Inter800 = "inter-800",
}

export const loadFonts = async () => {
  await Font.loadAsync({
    [FontFamily.Inter400]: require("../assets/fonts/Inter-Regular.ttf"),
    [FontFamily.Inter500]: require("../assets/fonts/Inter-Medium.ttf"),
    [FontFamily.Inter600]: require("../assets/fonts/Inter-SemiBold.ttf"),
    [FontFamily.Inter700]: require("../assets/fonts/Inter-Bold.ttf"),
    [FontFamily.Inter800]: require("../assets/fonts/Inter-ExtraBold.ttf"),
  });
};
