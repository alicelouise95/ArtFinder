import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

export default function BackNavigator({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("./assets/return.png")}
          style={{ width: 30, height: 30, margin: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}
