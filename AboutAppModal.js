import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

export default function AboutAppModal({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>About the App</Text>
          <Text style={{ textAlign: "justify" }}>
            Art Finder (Version 1.0): Discover and collect stunning artworks,
            view detailed profiles, save favourites, and revisit recently viewed
            art. Expand your art knowledge with educational insights and enjoy
            art appreciation online
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text
              style={{
                paddingTop: 20,
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
});
