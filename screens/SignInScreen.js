import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSuccess("Log in success");
        console.log(navigation);
        // navigation.navigate("App");
        console.log(user);
        //   dispatch({ type: "USER_ACTIVE", payload: user });
        //   dispatch({ type: "openModal", payload: "Log in success" });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const myError = errorMessage.replace("Firebase", "Soul");
        setError(myError);
        //   dispatch({ type: "openModal", payload: myError });
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    setTimeout(() => setError(""), 3000);
  }, [error]);

  useEffect(() => {
    setTimeout(() => setSuccess(""), 3000);
  }, [success]);

  return (
    <SafeAreaView className="flex-1 pb-8 pt-16 bg-black justify-between items-center">
      {success && (
        <View className="p-4 mx-4 bg-green-500 rounded w-11/12">
          <Text className="text-lg font-SF text-white">{success}</Text>
        </View>
      )}
      {error && (
        <View className="p-4 mx-4 bg-red-500 rounded w-11/12">
          <Text className="text-lg font-SF text-white">{error}</Text>
        </View>
      )}
      <View className="space-y-2 justify-center mt-6 items-center">
        <Text className="text-4xl font-SF text-white font-extrabold">
          Welcome Back!
        </Text>
        <Text className="font-SF text-base text-center text-gray">
          Enter your credentials to continue
        </Text>
      </View>

      <View className="w-full px-4">
        <Text className="text-white text-base mb-2 font-bold">User Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          className="border-b-2 font-SF text-white mb-4 placeholder:text-white border-white"
          placeholder="email@email.com"
        />
        <Text className="text-white mb-2 text-base font-bold">Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          className="border-b-2 font-SF text-white placeholder:text-white border-white"
          placeholder="*********"
        />
      </View>

      <View className="items-center p-4 w-full">
        <View className="mb-4 items-center space-x-2 flex-row justify-center">
          <Text className="text-white font-SF text-base">
            Don't have an account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-white font-SF text-base">Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={login}
          className="w-full h-[40px] bg-gray rounded-md justify-center items-center"
        >
          <Text className="text-2xl font-bold font-SF">Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
