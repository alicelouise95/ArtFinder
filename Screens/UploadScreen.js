import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Nav from "../Nav";
import FamousArt from "../FamousArt";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import BackNavigator from "../BackNavigator";
import AboutAppModal from "../AboutAppModal";

export default function UploadScreen({ navigation }) {
  const [name, setName] = useState("");
  const [isAboutAppModalVisible, setAboutAppModalVisible] = useState(false);

  const saveName = () => {
    console.log("Name saved: " + name);
    navigation.navigate("Homepage", { userName: name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backnav}>
        <BackNavigator navigation={navigation} />
      </View>
      <Text
        style={{
          fontFamily: "nunito-regular",
          fontSize: 40,
          color: "#190482",
          top: -80,
        }}
      >
        Settings
      </Text>
      <Text
        style={{
          fontFamily: "nunito-regular",
          fontSize: 20,
          color: "#190482",
          top: 50,
          right: 100,
        }}
      >
        Change your name
      </Text>
      <View style={styles.textinputContainer}>
        <TextInput
          style={styles.addTextinput}
          value={name}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
        />
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.Searchbutton}
            onPress={() => {
              saveName();
            }}
          >
            <Text style={styles.fontStyling}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AboutAppModal
        visible={isAboutAppModalVisible}
        onClose={() => setAboutAppModalVisible(false)}
      />
      <View style={styles.aboutButton}>
        <TouchableOpacity onPress={() => setAboutAppModalVisible(true)}>
          <Text
            style={{
              fontFamily: "nunito-regular",
              fontSize: 20,
              color: "#190482",
            }}
          >
            About the app
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#C2D9FF",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    flex: 1,
    top: "16%",
  },

  backnav: {
    flex: 1,
    top: "2%",
    right: "53%",
  },

  textinputContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    top: -80,
    padding: 30,
    left: -2,
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
  searchContainer: {
    paddingLeft: 30,
  },

  fontStyling: {
    fontFamily: "nunito-regular",
    fontSize: 20,
    color: "#190482",
  },

  aboutButton: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#190482",
    width: 140,
    height: 30,
    alignItems: "center",
    bottom: 150,
  },
});
