import React, { useState } from "react";

import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image, Picker, ScrollView} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, textStyle, textInputStyle,  pickerStyle, imgStyle} from "../../assets/AppStyles";
import DropDownPicker from 'react-native-dropdown-picker';


export default function ProfileScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("hobby");
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [roles, setRoles] = useState([
    { label: "Hobby", value: 0 },
    { label: "BirdWatcher", value: 1 },
    { label: "Admin", value: 2 },
  ]);
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
          <Text style={textStyle.h2}>{user.first_name} {user.last_name}</Text>
          <Text style={textStyle.h3}>{user.username}</Text>
          <Text style={textStyle.default}>Email:{'   '} {user.email}</Text>
          <Text style={textStyle.default}>Role: {'    '} {user.role}</Text>
        </View>
        <View style={[buttons.in_view, {marginTop: 30, flexDirection: 'column', justifyContent: 'space-between'}]}>
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