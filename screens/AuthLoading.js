import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from "react-native-progress";

const AuthLoading = ({ navigation }) => {
  const getUser = async () => {
    const user = await AsyncStorage.getItem("userToken");
    console.log("On it");
    navigation.navigate(user ? "App" : "Auth");
  };

  useEffect(() => {
    getUser();
  });

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Progress.Pie
        className=""
        indeterminate={true}
        size={50}
        color={"white"}
      />
      {/* <ActivityIndicator /> */}
    </View>
  );
};

export default AuthLoading;
