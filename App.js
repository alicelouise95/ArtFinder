import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Screens/Homepage";
import ResultsScreen from "./Screens/ResultsScreen";
import HistoryScreen from "./Screens/HistoryScreen";
import FavouritesScreen from "./Screens/FavouritesScreen";
import UploadScreen from "./Screens/UploadScreen";
import ArtworkDetailScreen from "./Screens/ArtworkDetailScreen";
import FamousArtworkDetailScreen from "./Screens/FamousArtworkDetails";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results Screen"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History Screen"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favourites Screen"
          component={FavouritesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Upload Screen"
          component={UploadScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Artwork Detail Screen"
          component={ArtworkDetailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Famous Artwork Details Screen"
          component={FamousArtworkDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
