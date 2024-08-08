import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./App/Screen/LoginScreen/LoginScreen";
import SignUpSceren from "./App/Screen/SignUpScreen/SignUpSceren";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-1">
      <LoginScreen />
      <SignUpSceren />
      <StatusBar style="auto" />
    </View>
  );
}
