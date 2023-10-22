import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Nav from "../Nav";
import BackNavigator from "../BackNavigator";

export default function ArtworkDetailScreen({ route, navigation }) {
  const { artworkDetails } = route.params;
  const description = artworkDetails.thumbnail.alt_text;

  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <BackNavigator navigation={navigation} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{artworkDetails.title}</Text>
        <Text style={styles.artist}>Artist: {artworkDetails.artist}</Text>
        <Text style={styles.yearReleased}>
          Year Released: {artworkDetails.yearReleased}
        </Text>
        <Text style={styles.artworkDesc}>Description: {description}</Text>
      </View>
      <View style={styles.navcontainer}>
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

  backIcon: {
    paddingTop: 25,
    paddingRight: 350,
  },

  detailsContainer: {
    top: 400,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "nunito-regular",
  },
  artist: {
    fontSize: 18,
    fontFamily: "nunito-regular",
  },
  yearReleased: {
    fontSize: 16,
    fontFamily: "nunito-regular",
  },

  artworkDesc: {
    fontsize: 16,
    fontFamily: "nunito-regular",
  },

  navcontainer: {
    flex: 1,
    top: 545,
  },
});
