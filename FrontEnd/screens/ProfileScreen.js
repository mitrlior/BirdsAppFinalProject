import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Picker,
  ScrollView,
} from "react-native";
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  textStyle,
  textInputStyle,
  pickerStyle,
  imgStyle,
} from "../assets/AppStyles";
import { getUser } from "../requests/UserRequests";

export default ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState(" ");
  const [role, setRole] = useState(null);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [username, setUsername] = useState(" ");
  const currentUser = useSelector((state) => state.username);
  

  async function setUserData() {
    console.log(`current_user = ${currentUser}`);
    const user = await getUser(currentUser);
    console.log(`User = ${user}`);
    setRole(user.user_type);
    setEmail(user.email);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setUsername(user.username);
  }

  useEffect(() => {
    setUserData();
  });

  return (
    <ScrollView style={customStyles.container}>
      <Text style={textStyle.h1}>Profile</Text>
      <View>
        <Text style={textStyle.h2}>{`${firstName} ${lastName}`}</Text>
        <Text style={textStyle.h3}>{username}</Text>
        <Text style={textStyle.default}>{`Email:\t ${email}`}</Text>
        <Text style={textStyle.default}>{`Role:\t ${role}`}</Text>
      </View>
      <View
        style={[
          buttons.in_view,
          {
            marginTop: 30,
            flexDirection: "column",
            justifyContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity
          style={touchableOpacityStyle.default}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={buttons.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>My Birds</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
