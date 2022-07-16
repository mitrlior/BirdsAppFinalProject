import React, { useEffect, useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/action";

import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  imgStyle,
} from "../assets/AppStyles";

export default MainScreen = ({ navigation }) => {
  let username = useSelector((state) => state.username);
  let user_type = useSelector((state) => state.user_type);
  const dispatch = useDispatch();

  console.log(`MainScreen:\nusername = ${username}\nuser_type = ${user_type}`);
  function out() {
    dispatch(logOut());
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={customStyles.middle_container}>
      <View style={imgStyle.view}>
        <Image
          style={imgStyle.long_logo}
          source={require("../assets/logo_white.png")}
        />
      </View>
      <View style={buttons.view}>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Recognize")}
        >
          <Text style={buttons.text}>Recognize</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Area")}
        >
          <Text style={buttons.text}>Birds in my Area</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={buttons.text}>Search Bird</Text>
        </TouchableOpacity>

        {username ? (
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={buttons.text}>My Profile</Text>
          </TouchableOpacity>
        ) : null}
        {user_type &&
        (user_type === "BIRD_WATCHER" || user_type === "ADMIN") ? (
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => navigation.navigate("Approve")}
          >
            <Text style={buttons.text}>Approve</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => out()}
        >
          <Text style={buttons.text}>{username ? "Log Out" : "Exit"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
