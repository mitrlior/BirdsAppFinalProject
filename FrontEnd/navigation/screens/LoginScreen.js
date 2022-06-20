import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Picker,
  ScrollView,
} from "react-native";
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  imgStyle,
  textStyle,
  textInputStyle,
  pickerStyle,
} from "../../assets/AppStyles";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const userLogin = () => {

    // fetch("https://birds-app-final-project.herokuapp.com/bird")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch(console.log("Error signing in"));
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View style={imgStyle.main_image}>
          <Text style={textStyle.h1}>Log In</Text>
        </View>
        <View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Email: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setEmail(newText)}/>
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default} secureTextEntry={true}> Password: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setPassword(newText)}
          />
          </View>
        </View>
        <View style={[buttons.main_buttons,{marginTop: 30}]}>
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => userLogin}
          >
            <Text style={buttons.text}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
