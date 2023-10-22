import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Nav from "../Nav";
import FamousArt from "../FamousArt";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";

async function Loadfonts() {
  await Font.loadAsync({
    "nunito-regular": require("../assets/Fonts/Nunito/Nunito-VariableFont_wght.ttf"),
  });
}

export default function Homepage({ navigation }) {
  useEffect(() => {
    Loadfonts();
  }, []);

  const [searchText, setSearchtext] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [resultsText, setResultsText] = useState("");

  function SearchArt() {
    setIsLoading(true);
    fetch("https://api.artic.edu/api/v1/artworks/search?q=" + searchText)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const totalResults = json.data.length;

        if (totalResults === 0) {
          console.log("No results found");
          setResultsText("No results found");
        } else {
          const first10Results = json.data.slice(0, 10);
          setResultsText(first10Results);
          navigation.navigate("Results Screen", {
            resultsText: first10Results,
          });
          console.log("10 results shown: ");
          first10Results.forEach((result, index) => {
            console.log(`Result ${index + 1}:`, result);
          });
        }
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#190482" size="large" />
        </View>
      )}

      <View style={styles.header}>
        <Text
          style={{
            fontSize: 40,
            color: "#190482",
            fontFamily: "nunito-regular",
          }}
        >
          Art finder
        </Text>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchtext}
          placeholder="Search for an artist or piece of art..."
          style={styles.addTextinput}
        />
        <TouchableOpacity
          onPress={() => {
            SearchArt();
          }}
          style={styles.Searchbutton}
        >
          <Text style={styles.fontStyling}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.filterButtons}>
          <Text style={styles.fontStyling}>Newest</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.filterButtons}>
          <Text style={styles.fontStyling}>Most Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.filterButtons}>
          <Text style={styles.fontStyling}>Random</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuredcontainer}>
        <Text style={styles.fontStyling}>Featured artwork</Text>
      </View>
      <View style={styles.artContainer}>
        <FamousArt />
      </View>
      <Nav navigation={navigation} />
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
    flex: 0.3,
    top: "5%",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 0.2,
    paddingTop: 40,
  },

  textinputContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    bottom: 50,
    padding: 30,
  },

  addTextinput: {
    flex: 1,
  },

  Searchbutton: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    height: 30,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#190482",
  },

  filterContainer: {
    flexDirection: "row",
    bottom: 150,
    width: "100%",
    justifyContent: "center",
    paddingTop: 30,
  },

  filterButtons: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },

  artContainer: {
    flex: 1,
  },

  fontStyling: {
    fontFamily: "nunito-regular",
    fontSize: 20,
    color: "#190482",
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
