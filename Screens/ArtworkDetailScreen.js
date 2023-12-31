import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import Nav from "../Nav";
import BackNavigator from "../BackNavigator";

export default function ArtworkDetailScreen({ route, navigation }) {
  const { artworkDetails } = route.params;
  const history = route.params.history;
  const altText = artworkDetails.thumbnail.alt_text;
  const { addFavourite, favourites, removeFavourite } = route.params;
  const apiID = artworkDetails.id;
  const [imageID, setImageID] = useState(null);
  const imageUrl = `https://www.artic.edu/iiif/2/${imageID}/full/843,/0/default.jpg`;
  const [isLoading, setIsLoading] = useState(false);
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");

  function getMoreInfo() {
    setIsLoading(true);
    fetch("https://api.artic.edu/api/v1/artworks/" + apiID)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const imageID = json.data.image_id;
        setImageID(imageID);
        const origin = json.data.place_of_origin;
        setOrigin(origin);
        const description = json.data.description
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "");
        setDescription(description);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data.");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getMoreInfo();
  }, [imageID]);

  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#190482" size="large" />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.artworkImage}
        />
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Added to favourites.");
          }}
          style={styles.addFavourites}
        >
          <Image
            source={require("/Users/alicewheeler/Documents/Projects/ArtFinder/assets/favorite.png")}
            style={{ width: 30, height: 30, margin: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{artworkDetails.title}</Text>
        {altText ? (
          <Text style={styles.artworkAlt}>{altText}</Text>
        ) : (
          console.log("No alternative text")
        )}
        <Text style={styles.artworkOrigin}>Country of origin: {origin}</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          {description ? (
            <Text style={styles.artDesc}>{description}</Text>
          ) : (
            console.log("No description")
          )}
        </ScrollView>
      </View>
      <Nav navigation={navigation} history={history} />
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
  detailsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "nunito-regular",
    bottom: 300,
    justifyContent: "center",
    textAlign: "center",
  },

  addFavourites: {
    bottom: 280,
    left: 130,
  },

  artworkAlt: {
    fontSize: 16,
    fontFamily: "nunito-regular",
    bottom: 280,
    textAlign: "left",
  },
  artworkImage: {
    width: 300,
    height: 400,
    bottom: 250,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#C2D9FF",
    justifyContent: "center",
    alignItems: "center",
  },

  backnav: {
    flex: 1,
    right: 225,
    top: 40,
  },

  artworkOrigin: {
    fontSize: 15,
    fontFamily: "nunito-regular",
    bottom: 270,
  },

  artDesc: {
    fontSize: 16,
    fontFamily: "nunito-regular",
  },

  scrollContainer: {
    maxHeight: 90,
    maxWidth: 350,
  },
});
