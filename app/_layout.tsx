import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
  // 🧷 5 Font Statis
    "Combo": require("../assets/fonts/Combo-Regular.ttf"),
    "Montserrat": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Roboto": require("../assets/fonts/Roboto_Condensed-Italic.ttf"),
    "Rubik": require("../assets/fonts/Rubik-SemiBoldItalic.ttf"),
    "TiktokSans": require("../assets/fonts/TikTokSans_18pt_Expanded-ExtraBold.ttf"),

    // 🧷 5 Variable Fonts
    "Bitcount": require("../assets/fonts/Bitcount-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "Manrope": require("../assets/fonts/Manrope-VariableFont_wght.ttf"),
    "Quicksand": require("../assets/fonts/Quicksand-VariableFont_wght.ttf"),
    "SmoochSans": require("../assets/fonts/SmoochSans-VariableFont_wght.ttf"),
    "JosefinSlab": require("../assets/fonts/JosefinSlab-VariableFont_wght.ttf"),
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