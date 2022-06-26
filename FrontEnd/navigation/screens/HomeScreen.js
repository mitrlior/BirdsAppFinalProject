import * as React from "react";
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
} from "../../assets/AppStyles";
import {MyButton} from "../utils/MyButtons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={customStyles.middle_container}>
      <View style={imgStyle.view}>
        <Image
          style={imgStyle.default}
          source={require("../../assets/sqlogo_white.png")}
        />
      </View>
      <View style={[buttons.view, { marginTop: 30 }]}>
        
        {/* <MyButton 
        title = 'Sign Up'
        style={touchableOpacityStyle.default}
        onPress={() => navigation.navigate("SignUp")}
        /> */}
        
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={buttons.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={buttons.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Main")}>
          <Text style={buttons.text}>Remind me later</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={buttons.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={buttons.text}>Main</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Area")}
        >
          <Text style={buttons.text}>Area</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={buttons.text}>Search</Text>
        </TouchableOpacity> */}
        
        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Recognize")}
        >
          <Text style={buttons.text}>Recognize</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={buttons.text}>Edit Profile</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Search")}
        > */}
          {/* <Text style={buttons.text}>Search Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("BirdID")}
        >
          <Text style={buttons.text}>Bird ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Area")}
        >
          <Text style={buttons.text}>Area</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("Approve")}
        >
          <Text style={buttons.text}>Approve</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
