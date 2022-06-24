import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
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
import { Picker } from '@react-native-picker/picker'

const EditProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("hobby");

  const profileUpdate = () => {
    const user = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      email: email,
      // selectedValue: selectedValue,
    };
    const res = addNewUser(user);
  };

  const msgUserName = "hi";
  const msgFirstName = "";
  const msgLastName = "";
  const msgPassword = "";
  const msgEmail = "";
  const msgRole = "";

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View style={imgStyle.main_image}>
          <Text style={textStyle.h1}>Edit Profile</Text>
        </View>
        <View>
          <View style={textInputStyle.view}>
            <View flexDirection="row">
              <Text style={textStyle.default}>Username: </Text>
              <Text style={textStyle.error}>{msgUserName}</Text>
            </View>
            <TextInput
              style={textInputStyle.default}
              selectedValue={username}
              onChangeText={(newText) => setUsername(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <View flexDirection="row">
              <Text style={textStyle.default}>First Name: </Text>
              <Text style={textStyle.error}>{msgFirstName}</Text>
            </View>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setFirstName(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <View flexDirection="row">
              <Text style={textStyle.default}>Last Name: </Text>
              <Text style={textStyle.error}>{msgLastName}</Text>
            </View>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setLastName(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <View flexDirection="row">
              <Text style={textStyle.default}>Email: </Text>
              <Text style={textStyle.error}>{msgEmail}</Text>
            </View>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setEmail(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <View flexDirection="row">
              <Text style={textStyle.default}>Password: </Text>
              <Text style={textStyle.error}>{msgPassword}</Text>
            </View>
            <TextInput
              style={textInputStyle.default}
              onChangeText={(newText) => setPassword(newText)}
            />
          </View>
          <View style={textInputStyle.view}>
            <View flexDirection="row" style={"alignItems: center, alignSelf: center,"}>
              <Text style={textStyle.default}>Role: </Text>
              <Text style={textStyle.error}>{msgRole}</Text>

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
        </View>
        <View style={buttons.main_buttons}>
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => signUp()}
          >
            <Text style={buttons.text}>Update My Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
