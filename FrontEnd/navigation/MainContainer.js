import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SignInScreen from "./screens/SignInScreen";
import LogInScreen from "./screens/SignUp";
import MainScreen from "./screens/MainScreen";
import AreaScreen from "./screens/AreaScreen";

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const signinName = "SignIn";
const mainName = "Main";
const loginName = "Login";
const areaName = "Area";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainContainer() {
  return {};
}

export default MainContainer;
