import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Nav from "../Nav";
import BackNavigator from "../BackNavigator";

export default function FavouritesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourites</Text>
      </View>
      <View style={styles.content}></View>
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
  },
  header: {
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  favouriteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  favouriteText: {
    fontSize: 18,
  },
  removeButton: {
    padding: 5,
    backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backnav: {
    flex: 1,
    top: "2%",
    right: "3%",
  },
});
