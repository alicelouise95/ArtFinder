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
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const searchResults = route.params.resultsText;
  const data = searchResults;
  const navigateToDetailScreen = (artworkDetails) => {
    navigation.navigate("Artwork Detail Screen", {
      artworkDetails,
      addFavourite,
      favourites,
      removeFavourite,
    });
  };
  const { addFavourite, favourites, removeFavourite } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, top: 200, fontFamily: "nunito-regular" }}>
        Search Results
      </Text>
      <View style={styles.resultsContainer}>
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigateToDetailScreen(item);
              }}
              style={styles.resultItem}
            >
              <Text style={styles.resultText}>{item.title}</Text>
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

  navbar: {
    flex: 1,
    top: 785,
  },

  resultsContainer: {
    position: "absolute",
    flex: 1,
    top: 300,
    left: 10,
    textAlign: "justify",
  },

  resultItem: {
    padding: 10,
  },

  resultText: {
    fontFamily: "nunito-regular",
  },
});
