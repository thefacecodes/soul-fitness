import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PreLoader from "./screens/PreLoader";
import { useFonts } from "expo-font";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OnboardStack from "./screens/OnboardStack";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./components/AppContainer";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    SFPro: require("./assets/fonts/SF-Pro-Display-Black.ttf"),
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        AsyncStorage.setItem("userToken", JSON.stringify(user));
        // ...
      } else {
        // User is signed out
        AsyncStorage.removeItem("userToken");
        // ...
      }
    });
  }, [AsyncStorage]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {loading ? <PreLoader setLoading={setLoading} /> : <AppContainer />}
    </NavigationContainer>
  );
}
