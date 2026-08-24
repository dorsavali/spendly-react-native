import "../global.css";

import { Vazirmatn_300Light } from "@expo-google-fonts/vazirmatn/300Light";
import { Vazirmatn_400Regular } from "@expo-google-fonts/vazirmatn/400Regular";
import { Vazirmatn_600SemiBold } from "@expo-google-fonts/vazirmatn/600SemiBold";
import { Vazirmatn_700Bold } from "@expo-google-fonts/vazirmatn/700Bold";
import { Vazirmatn_900Black } from "@expo-google-fonts/vazirmatn/900Black";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colorScheme as nativeWindColorScheme } from "nativewind";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useSettingsStore } from "../src/store/SettingStore";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const language = useSettingsStore((state) => state.language);

  useEffect(() => {
    nativeWindColorScheme.set(isDark ? "dark" : "light");
  }, [isDark]);

  const [fontsLoaded, fontError] = useFonts({
    Vazirmatn_300Light,
    Vazirmatn_400Regular,
    Vazirmatn_600SemiBold,
    Vazirmatn_700Bold,
    Vazirmatn_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: isDark ? "#121212" : "#F7F3EA",
            direction: language === "fa" ? "rtl" : "ltr",
          },
        }}
      />
    </>
  );
}
