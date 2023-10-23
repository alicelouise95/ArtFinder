import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackNavigator({ navigation }) {
  return (
    <View style={styles.backnav}>
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

const styles = StyleSheet.create({
  backnav: {
    position: "absolute",
  },
});
