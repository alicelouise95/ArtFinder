import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import BackNavigator from "../BackNavigator";
import Nav from "../Nav";

export default function FamousArtworkDetailScreen({ route, navigation }) {
  const { artwork } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      <Image source={artwork.imageSource} style={styles.artworkImage} />
      <View style={styles.favouriteButton}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("/Users/alicewheeler/Documents/Projects/ArtFinder/assets/favorite.png")}
            style={{ width: 30, height: 30, margin: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>Title: {artwork.title}</Text>
        <Text style={styles.title}>Artist: {artwork.artist}</Text>
        <Text style={styles.title}>Year: {artwork.created}</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C2D9FF",
  },
  artworkImage: {
    width: 300,
    height: 400,
    top: 30,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    color: "#190482",
    fontFamily: "nunito-regular",
  },

  backnav: {
    flex: 1,
    bottom: -20,
    right: 230,
  },

  description: {
    flexDirection: "column",
    top: 10,
  },

  navbar: {
    top: 80,
  },

  favouriteButton: {
    top: 0,
    left: 130,
  },
});
