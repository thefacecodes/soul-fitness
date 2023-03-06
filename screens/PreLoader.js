import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

const PreLoader = ({ setLoading }) => {
  return (
    <SafeAreaView className="flex-1 bg-black justify-center items-center">
      <View className="space-y-4 justify-center items-center">
        <Image source={require("../assets/logo.png")} className="w-[150px]" />
        <Text className="font-SF text-lg text-center text-gray">
          Taking your workout to the next level on cross-functional platform{" "}
        </Text>
      </View>

      <View className="absolute bottom-12 items-center space-y-6">
        <TouchableOpacity onPress={() => setLoading(false)}>
          <Text className="text-2xl font-bold font-SF text-gray">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PreLoader;
