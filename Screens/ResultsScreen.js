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
  console.log("ResultsScreen rendered");
  const searchResults = route.params.resultsText;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log("Current history: ", JSON.stringify(history));
  }, [history]);

  const addToHistory = (artworkDetails) => {
    console.log("Adding to history...");
    if (!history.find((item) => item.id === artworkDetails.id)) {
      const newHistory = [artworkDetails, ...history];

      if (newHistory.length > 8) {
        newHistory.pop();
      }
      setHistory(newHistory);
      console.log(`Added to history: ${artworkDetails.title}`);
    }
  };

  const navigateToDetailScreen = (artworkDetails) => {
    if (artworkDetails) {
      navigation.navigate("Artwork Detail Screen", {
        artworkDetails,
        history,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#190482",
          fontSize: 30,
          top: 200,
          fontFamily: "nunito-regular",
        }}
      >
        Search Results
      </Text>
      <View style={styles.resultsContainer}>
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                addToHistory(item);
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
        <Nav navigation={navigation} history={history} />
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
    top: 280,
    left: 10,
    textAlign: "justify",
  },

  resultItem: {
    padding: 10,
  },

  resultText: {
    fontFamily: "nunito-regular",
    fontSize: 20,
    color: "#190482",
  },
});
