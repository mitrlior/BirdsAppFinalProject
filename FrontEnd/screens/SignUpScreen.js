import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  imgStyle,
  textStyle,
  textInputStyle,
  pickerStyle,
} from "../assets/AppStyles";
import { Picker } from "@react-native-picker/picker";
import { addNewUser } from "../requests/UserRequests";
import { User } from "../assets/utils/MyObjs";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState(1);

  const signUp = async () => {
    const user = new User(
      username,
      firstName,
      lastName,
      password,
      email,
      selectedValue
    );
    console.log(user);
    const res = await addNewUser(user);
    //TODO: Handle response, 201 for user created move to home screen or something
    console.log(`my res ${res}`);
    console.log(`status: ${res.status}`);
    if (res.status == 201) {
      console.log("Success");
      Alert.alert(
        "Success",
        "User created successfully",
        navigation.navigate("Main")
      );
    } else {
      const body = await res.json();
      console.log(body.message);
      Alert.alert("Problem!", body.message);
    }
  };

  const msgUserName = "";
  const msgFirstName = "";
  const msgLastName = "";
  const msgPassword = "";
  const msgEmail = "";
  const msgRole = "";

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View style={imgStyle.main_image}>
          <Text style={textStyle.h1}>SignUp</Text>
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
            <View
              flexDirection="row"
              style={"alignItems: center, alignSelf: center,"}
            >
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
                <Picker.Item label="Hobby" value="0" />
                <Picker.Item label="Birdwatcher" value="1" />
                <Picker.Item label="Admin" value="2" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={buttons.main_buttons}>
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => signUp()}
          >
            {/* () => navigation.navigate("Main") */}
            <Text style={buttons.text}>Sign Me Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
