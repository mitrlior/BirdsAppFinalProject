import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../requests/UserRequests";

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  textStyle,
  textInputStyle,
} from "../assets/AppStyles";
import DropDownPicker from "react-native-dropdown-picker";

const EditProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState(" ");
  const [role, setRole] = useState(null);
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

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
    setPassword(user.password);
  }

  useEffect(() => {
    setUserData();
  });

  const [roles, setRoles] = useState([
    { label: "Hobby", value: "Hobby" },
    { label: "BirdWatcher", value: "Bird Watcher" },
    { label: "Admin", value: "Admin" },
  ]);

  const [selectedValue, setSelectedValue] = useState("hobby");

  const profileUpdate = () => {
    const user = new User(username, firstName, lastName, email);
  };

  return (
    <ScrollView style={customStyles.container}>
      <Text style={textStyle.h1}>Profile</Text>
      <View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Username: </Text>
          <TextInput style={textInputStyle.default} value={username} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> First Name: </Text>
          <TextInput style={textInputStyle.default} placeholder={firstName} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Last Name: </Text>
          <TextInput style={textInputStyle.default} placeholder={lastName} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Email: </Text>
          <TextInput style={textInputStyle.default} placeholder={email} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Password: </Text>
          <TextInput
            style={textInputStyle.default}
            secureTextEntry={true}
            placeholder={password}
          />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Role: </Text>
          <DropDownPicker
            open={open}
            value={role}
            items={roles}
            setOpen={setOpen}
            setValue={setRole}
            setItems={setRoles}
            searchable={true}
            placeholder="Select your bird"
          />
        </View>
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
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>My Birds</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default EditProfileScreen;
