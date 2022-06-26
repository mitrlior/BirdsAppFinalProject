import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ApproveScreen from "./screens/ApproveScreen";
import AreaScreen from "./screens/AreaScreen";
import BirdIDScreen from "./screens/BirdIDScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecognizeScreen from "./screens/RecognizeScreen";
import SearchBirdScreen from "./screens/SearchBirdScreen";
import SignUpScreen from "./screens/SignUpScreen";

//Screen names
const approveName = "Approve"; 
const areaName = "Area";
const birdIDName = "BirdID";
const editProfileName = "EditProfile";
const homeName = "Home";
const loginName = "Login";
const mainName = "Main";
const profileName = "Profile";
const recognizeName = "Recognize";
const searchName = "Search";
const signupName = "SignUp";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainContainer() {
  return {};
}

export default MainContainer;
