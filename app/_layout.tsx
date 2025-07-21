import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
  // 🧷 5 Font Statis
    "AbrilFatface": require("../assets/fonts/static/AbrilFatface-Regular.ttf"),
    "BowlbyOne": require("../assets/fonts/static/BowlbyOne-Regular.ttf"),
    "Michroma": require("../assets/fonts/static/Michroma-Regular.ttf"),
    "Play": require("../assets/fonts/static/Play-Regular.ttf"),
    "Shojumaru": require("../assets/fonts/static/Shojumaru-Regular.ttf"),

    // 🧷 5 Variable Fonts
    "Montserrat": require("../assets/fonts/variabel/Montserrat-VariableFont_wght.ttf"),
    "Raleway": require("../assets/fonts/variabel/Raleway-VariableFont_wght.ttf"),
    "Roboto": require("../assets/fonts/variabel/Roboto-VariableFont_wdth,wght.ttf"),
    "Rubik": require("../assets/fonts/variabel/Rubik-VariableFont_wght.ttf"),
    "TikTokSans": require("../assets/fonts/variabel/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }

    if (error) {
      console.error("❌ Failed to load fonts:", error);
    }
  }, [loaded, error]);

  if (!loaded) return null;

  return <Stack />;
}