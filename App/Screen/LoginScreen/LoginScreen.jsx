import { View, Text, Image } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="flex justify-center items-center mt-[50px]">
      <Image
        className="w-[200px] h-[40px]"
        resizeMode="contain"
        source={require("../../../assets/images/logo.png")}
      />
      <Image
        className="w-full h-[300px] mt-[20px]"
        resizeMode="cover"
        source={require("../../../assets/images/ev-charging.jpg")}
      />
    </View>
  );
}
