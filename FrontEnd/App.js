import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./navigation/screens/HomeScreen";
import SignUpScreen from "./navigation/screens/SignUpScreen";
import LoginScreen from "./navigation/screens/LoginScreen";
import AreaScreen from "./navigation/screens/AreaScreen";
import ProfileScreen from "./navigation/screens/ProfileScreen";
import MainScreen from "./navigation/screens/MainScreen";
import SearchBirdScreen from "./navigation/screens/SearchBirdScreen";
import RecognizeScreen from "./navigation/screens/RecognizeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" // Name to navigate 
          component={HomeScreen} // Component name
          options={{ title: "Home" }} // Title
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "SignUp" }}
        />
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{ title: "LogIn" }}
        />
        <Stack.Screen
          name="Area"
          component={AreaScreen}
          options={{ title: "Area" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchBirdScreen}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="Recognize"
          component={RecognizeScreen}
          options={{ title: "Recognize" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
