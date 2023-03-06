import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Exercise from "../components/Exercise";
import * as Progress from "react-native-progress";

const BodyPartScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState(null);
  const [part, setPart] = useState("");
  const {
    params: { name },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: name,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "black",
      },
    });
  }, []);

  useEffect(() => {
    if (name) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d2e3033679msh77d666f9c57ccffp1035f0jsn78edea1c284d",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      fetch(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name.toLowerCase()}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setExercises(data))
        .catch((err) => console.error(err));
    }
  }, [name]);

  if (!exercises) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Progress.Pie
          className=""
          indeterminate={true}
          size={50}
          color={"white"}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center bg-black items-center">
      <FlatList
        data={exercises}
        renderItem={({ item }) => <Exercise workout={item} />}
        keyExtractor={({ item }) => item?.id}
        showsVerticalScrollIndicator={false}

        // ItemSeparatorComponent={Separate}
      />
    </View>
  );
};

export default BodyPartScreen;
