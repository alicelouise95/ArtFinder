import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Nav from "../Nav";
import BackNavigator from "../BackNavigator";

export default function HistoryScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontFamily: "nunito-regular" }}>
          Recently Viewed Artwork
        </Text>
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

  header: {
    bottom: 250,
  },

  navbar: {
    top: 330,
  },

  backnav: {
    bottom: 300,
    paddingRight: 350,
  },
});
