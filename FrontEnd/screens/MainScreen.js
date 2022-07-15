import * as React from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
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
  textStyle,
  textInputStyle,
} from "../assets/AppStyles";


export default function MainScreen({ navigation }) {
const username = useSelector((state) => state.username);

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

        {username && <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={buttons.text}>My Profile</Text>
        </TouchableOpacity> }

        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Approve")}
        >
          <Text style={buttons.text}>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={buttons.text}>{username ? 'Log Out' : 'Exit'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
