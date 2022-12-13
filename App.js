import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {  ScrollView} from "react-native";
import { useEffect, useCallback } from "react";
import Dasboard from "./screens/Dasboard";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log('Fonts Notloaded')
    return null;
  }

  return (
    <ScrollView onLayout={onLayoutRootView}>
      <Dasboard/>
    </ScrollView>
  );
}
