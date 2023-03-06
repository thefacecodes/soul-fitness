import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BodyPart = ({ workout }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("BodyPart", { name: workout.name })}
      className="rounded-sm overflow-hidden h-[180px] w-full mb-2"
    >
      <Image
        source={{
          uri: workout.image,
        }}
        className="h-[180px] object-contain w-full"
      />
      <Text className="text-3xl uppercase absolute bottom-0 left-0 p-2 text-white font-SF bg-black w-full">
        {workout.name}
      </Text>
    </TouchableOpacity>
  );
};

export default BodyPart;
