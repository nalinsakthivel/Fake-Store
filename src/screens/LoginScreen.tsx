import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Colours } from "../values/Colours";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colours.white }}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
