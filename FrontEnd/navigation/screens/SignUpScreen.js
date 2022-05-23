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

import { addNewUser } from "../../assets/requests/UserRequests";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("hobby");

  const signUp = () => {
    const user = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      email: email,
      // selectedValue: selectedValue,
    };
    console.log(JSON.stringify(user));
    const res = addNewUser(user);
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View style={imgStyle.main_image}>
          <Text style={textStyle.h1}>SignUp</Text>
        </View>
        <View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Username: </Text>
            <TextInput
              style={textInputStyle.default}
              selectedValue={username}
              onChangeText={(newText) => setUsername(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> First Name: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setFirstName(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Last Name: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setLastName(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Email: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setEmail(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Password: </Text>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setPassword(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Role: </Text>
            <Picker
              selectedValue={selectedValue}
              style={pickerStyle.item}
              itemStyle={pickerStyle.default}
              onChangeText={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Hobby" value="hobby" />
              <Picker.Item label="Birdwatcher" value="birdwatcher" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>
        </View>
        <View style={buttons.main_buttons}>
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => signUp()}
          >
            <Text style={buttons.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
