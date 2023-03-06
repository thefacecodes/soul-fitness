import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

const SingleExercise = ({ navigation }) => {
  const { params: workout } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: workout.name,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "black",
      },
    });
  }, []);
  return (
    <View className="bg-white flex-1 items-center">
      <Image
        source={{ uri: workout?.gifUrl }}
        className="h-[400px] w-[350px] object-contain"
      />
      <Text className="text-2xl capitalize font-SF my-3">{workout?.name}</Text>
    </View>
  );
};

export default SingleExercise;
