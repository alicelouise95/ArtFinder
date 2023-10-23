import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Nav from "../Nav";
import FamousArt from "../FamousArt";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import BackNavigator from "../BackNavigator";

export default function UploadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      <View>
        <Text>Upload Screen</Text>
      </View>
      <View style={styles.navbar}>
        <Nav navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C2D9FF",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    flex: 1,
    top: "37%",
  },

  backnav: {
    flex: 1,
    top: "2%",
    right: "53%",
  },
});
