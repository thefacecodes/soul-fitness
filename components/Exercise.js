import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Exercise = ({ workout }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SingleExercise", workout)}
      className="flex-row mb-2 px-4 bg-white items-center space-x-2"
    >
      <Image source={{ uri: workout.gifUrl }} className="h-[100px] w-[100px]" />
      <View className="w-2/3">
        <Text className="font-SF w-fit text-lg capitalize">{workout.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Exercise;
