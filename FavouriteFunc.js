import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function FavouriteButton() {
  const FavouriteButton = ({ isFavourite, onToggle }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require("/Users/alicewheeler/Documents/Projects/ArtFinder/assets/favorite.png")}
          style={{ width: 30, height: 30, margin: 40 }}
        />
      </TouchableOpacity>
    );
  };
}
