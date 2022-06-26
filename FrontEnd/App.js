import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ApproveScreen from "./navigation/screens/ApproveScreen";
import AreaScreen from "./navigation/screens/AreaScreen";
import BirdIDScreen from "./navigation/screens/BirdIDScreen";
import EditProfileScreen from "./navigation/screens/EditProfileScreen";
import HomeScreen from "./navigation/screens/HomeScreen";
import LoginScreen from "./navigation/screens/LoginScreen";
import MainScreen from "./navigation/screens/MainScreen";
import ProfileScreen from "./navigation/screens/ProfileScreen";
import RecognizeScreen from "./navigation/screens/RecognizeScreen";
import SearchBirdScreen from "./navigation/screens/SearchBirdScreen";
import SignUpScreen from "./navigation/screens/SignUpScreen";

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
          name="Approve"
          component={ApproveScreen}
          options={{ title: "Approve" }}
        />
        <Stack.Screen 
          name="Area"
          component={AreaScreen}
          options={{ title: "Area" }}
        />
        <Stack.Screen
          name="BirdID"
          component={BirdIDScreen}
          options={{ title: "BirdID" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: "Edit Profile" }}
        />

        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{ title: "LogIn" }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />        
        <Stack.Screen
          name="Recognize"
          component={RecognizeScreen}
          options={{ title: "Recognize" }}
        />        
        <Stack.Screen
          name="Search"
          component={SearchBirdScreen}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "SignUp" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
