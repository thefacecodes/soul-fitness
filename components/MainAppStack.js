import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import BodyPartScreen from "../screens/BodyPartScreen";
import SingleExercise from "../screens/SingleExercise";

const MainAppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BodyPart" component={BodyPartScreen} />
      <Stack.Screen name="SingleExercise" component={SingleExercise} />
    </Stack.Navigator>
  );
};

export default MainAppStack;
