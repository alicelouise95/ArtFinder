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
} from "react-native";
import Nav from "../Nav";
import BackNavigator from "../BackNavigator";

export default function ArtworkDetailScreen({ route, navigation }) {
  const { artworkDetails } = route.params;
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
            navigation.navigate("Favourites Screen", {
              addFavourite,
              favourites,
              removeFavourite,
            });
          }}
          style={styles.addFavourites}
        >
          <Image
            source={require("/Users/alicewheeler/Documents/Projects/ArtFinder/assets/favorite.png")}
            style={{ width: 30, height: 30, margin: 40 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{artworkDetails.title}</Text>
        <Text style={styles.artworkAlt}>{altText}</Text>
        <Text style={styles.artworkOrigin}>Country of origin: {origin}</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <Text style={styles.artDesc}>{description || ""}</Text>
        </ScrollView>
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
    top: 40,
    justifyContent: "center",
    textAlign: "center",
  },

  addFavourites: {
    top: 55,
    left: 130,
  },

  artworkAlt: {
    fontSize: 16,
    fontFamily: "nunito-regular",
    top: 50,
    textAlign: "left",
  },
  artworkImage: {
    width: 300,
    height: 400,
    top: 90,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  backnav: {
    right: 225,
    top: 40,
  },

  artworkOrigin: {
    fontSize: 15,
    fontFamily: "nunito-regular",
    top: 70,
  },

  artDesc: {
    top: 140,
    fontSize: 16,
    fontFamily: "nunito-regular",
  },

  scrollContainer: {
    maxHeight: 200,
    maxWidth: 350,
  },
});
