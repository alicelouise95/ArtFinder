import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function FamousArt() {
  const navigation = useNavigation();

  const famousArtworks = [
    {
      id: "1",
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      created: "1503",
      imageSource: require("./Artwork/MonaLisa.jpeg"),
    },
    {
      id: "2",
      title: "Starry Night",
      artist: "Vincent van Gogh",
      created: "1889",
      imageSource: require("./Artwork/starrynight.jpeg"),
    },
    {
      id: "3",
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      created: "1931",
      imageSource: require("./Artwork/thepersistenceofmemory.jpg"),
    },

    {
      id: "4",
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      created: "1485-1486",
      imageSource: require("./Artwork/thebirthofvenus.jpeg"),
    },

    {
      id: "5",
      title: "Pieta",
      artist: "Michelangelo",
      created: "1489-1499",
      imageSource: require("./Artwork/pieta.jpeg"),
    },

    {
      id: "6",
      title: "Las Meninas",
      artist: "Diego Velázquez",
      created: "1656",
      imageSource: require("./Artwork/lasmeninas.webp"),
    },

    {
      id: "7",
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      created: "1665",
      imageSource: require("./Artwork/girlwithpearlearing.jpeg"),
    },
  ];

  const navigateToArtworkDetail = (artwork) => {
    navigation.navigate("Famous Artwork Details Screen", { artwork });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={famousArtworks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToArtworkDetail(item)}>
            <View style={styles.artworkItem}>
              <Image source={item.imageSource} style={styles.artworkImage} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },

  artworkImage: {
    height: 150,
    width: 100,
  },
});
