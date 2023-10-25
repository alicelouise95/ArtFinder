import React, { useState } from "react";
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

export default function HistoryScreen({ route }) {
  const navigation = useNavigation();
  const history = route.params.history;
  console.log("history data: ", history);

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
      <View style={styles.historyContainer}>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.historyItem}>
              <Text style={styles.historyText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
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
    flex: 1,
    bottom: "9%",
  },

  historyContainer: {
    flex: 1,
    top: 20,
    width: "100%",
  },

  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  historyText: {
    fontFamily: "nunito-regular",
  },

  navbar: {
    flex: 1,
    top: "13%",
  },

  backnav: {
    flex: 1,
    top: "2%",
    right: "53%",
  },
});
