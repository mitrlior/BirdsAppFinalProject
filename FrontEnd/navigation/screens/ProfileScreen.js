import React, { useState, useEffect } from "react";

import { getUser } from "../../assets/requests/UserRequests";
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image, Picker, ScrollView} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, textStyle, textInputStyle,  pickerStyle, imgStyle} from "../../assets/AppStyles";
import DropDownPicker from 'react-native-dropdown-picker';


export default function ProfileScreen({ navigation }) {
  

  const [email, setEmail] = useState(' ');
  const [role, setRole] = useState(null);
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [username, setUsername] = useState(' ')

  async function setUserData(){
      const user = await getUser("mitrlior");
      setRole(user.user_type);
      setEmail(user.email);
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setUsername(user.username);
  }

  useEffect (() => {
    setUserData();
  });

  const user = {
    username: 'username',
    first_name: 'firstName',
    last_name: 'lastName',
    password: 'password',
    email: 'email',
    role : 'role',
  };

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