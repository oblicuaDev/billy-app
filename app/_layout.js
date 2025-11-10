import { Slot, useRouter, SplashScreen } from "expo-router";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider, useSelector } from "react-redux";
import { store } from "../src/store";
import { selectIsLogged } from "../src/store/selectors";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const isLogged = useSelector(selectIsLogged);
  const router = useRouter();

  return (
    <>
      <Slot />
      <StatusBar hidden />
    </>
  );
};

const RootLayout = () => {
  let [fontsLoaded, fontsError] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });
  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <InitialLayout />
      </Provider>
    </SafeAreaView>
  );
};

export default RootLayout;
