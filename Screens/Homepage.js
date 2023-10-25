import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
  Image,
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

export default function Homepage({ navigation, route }) {
  useEffect(() => {
    Loadfonts();
  }, []);

  useEffect(() => {
    if (route.params?.userName != null) {
      setUsername(route.params?.userName || "");
    }
  }, [route.params?.userName]);

  const [searchText, setSearchtext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultsText, setResultsText] = useState("");
  const [userName, setUsername] = useState(route.params?.userName || "");

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
          Alert.alert("No results found.");
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
          art finder
        </Text>
        <Image
          source={require("/Users/alicewheeler/Documents/Projects/ArtFinder/assets/Logo.png")}
          style={{ width: 80, height: 80, margin: 40 }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            paddingTop: 10,
            color: "#190482",
            fontFamily: "nunito-regular",
          }}
        >
          {userName ? `Welcome back, ${userName}!` : "Welcome back!"}
        </Text>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchtext}
          placeholder="Search for an artist or piece of art..."
          style={styles.addTextinput}
          onSubmitEditing={SearchArt}
        />
        <View style={styles.searchButton}>
          <TouchableOpacity
            onPress={() => {
              SearchArt();
            }}
            style={styles.Searchbutton}
          >
            <Text style={styles.fontStyling}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.featuredcontainer}>
        <Text style={styles.fontStyling}>Featured artwork</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.artContainer}
      >
        <FamousArt />
      </KeyboardAvoidingView>

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
    paddingTop: 40,
  },

  textinputContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    top: 30,
    padding: 30,
  },

  addTextinput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#190482",
    width: 80,
    height: 30,
    paddingLeft: 10,
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
    backgroundColor: "#C2D9FF",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    paddingLeft: 20,
  },
});
