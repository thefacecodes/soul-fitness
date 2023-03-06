import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bodyParts from "../bodyparts.json";
import BodyPart from "../components/BodyPart";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import * as Progress from "react-native-progress";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const time = new Date().getHours();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out success");
        AsyncStorage.removeItem("userToken");
        // navigation.navigate("Auth");
      })
      .catch((error) => {
        // An error happened.

        console.log("Couldn't sign you out");
      });
  };

  const getDetails = async () => {
    const getUser = await AsyncStorage.getItem("userToken");
    setUser(JSON.parse(getUser));
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!user) {
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
  }

  return (
    <View className="flex-1 p-4">
      <View className="p-4 flex-row spax-3 justify-between mt-8 mb-4 bg-black h-[120px] items-center rounded-md w-full">
        <View>
          <Text className="text-3xl font-SF text-white">
            {time < 12
              ? "Good morning"
              : time < 16
              ? "Good Afternoon"
              : time < 21
              ? "Good evening"
              : "Good Night"}
          </Text>
          <Text className="text-base text-white font-SF">{user?.email}</Text>
          <TouchableOpacity
            onPress={logOut}
            className="bg-white py-1  mt-2 px-2 rounded self-start"
          >
            <Text className="text-base font-SF">Log out</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: user.photoURL
              ? user.photoURL
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          className="h-[70px] w-[70px] rounded-full"
        />
      </View>
      {/* <Text className="my-4 text-xl font-SF text-center">Body parts</Text> */}
      <FlatList
        data={bodyParts.parts}
        renderItem={({ item }) => <BodyPart workout={item} />}
        keyExtractor={({ item }) => item?.id}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={Separate}
      />
    </View>
  );
};

export default HomeScreen;
