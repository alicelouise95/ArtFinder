import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Nav({ navigation, history }) {
  return (
    <View style={styles.navcontainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Favourites Screen", { history: history });
        }}
      >
        <Image
          source={require("./Navigation/favourites.png")}
          style={{ width: 30, height: 30, margin: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("History Screen", { history: history });
        }}
      >
        <Image
          source={require("./Navigation/history.png")}
          style={{
            width: 30,
            height: 30,
            margin: 40,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Homepage", { history: history });
        }}
      >
        <Image
          source={require("./Navigation/home.png")}
          style={{ width: 30, height: 30, margin: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Upload Screen", { history: history });
        }}
      >
        <Image
          source={require("./Navigation/upload.png")}
          style={{ width: 30, height: 30, margin: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
