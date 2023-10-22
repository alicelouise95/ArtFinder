import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
    bottom: 30,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    color: "#190482",
    fontFamily: "nunito-regular",
  },

  backnav: {
    bottom: 60,
    paddingRight: 350,
  },

  description: {
    flexDirection: "column",
    top: 30,
  },

  navbar: {
    top: 80,
  },
});
