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
import { User } from '../utils/MyObjs';
import DropDownPicker from 'react-native-dropdown-picker';


const EditProfileScreen = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [roles, setRoles] = useState([
    { label: "Hobby", value: "Hobby" },
    { label: "BirdWatcher", value: "Bird Watcher" },
    { label: "Admin", value: "Admin" },]);


  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("hobby");

  const profileUpdate = () => {
    const user = new User(username, firstName, lastName, email);

    // const user = {
    //   username: username,
    //   first_name: firstName,
    //   last_name: lastName,
    //   password: password,
    //   email: email,
    //   // selectedValue: selectedValue,
    // };

  };

  const msgUserName = "";
  const msgFirstName = "";
  const msgLastName = "";
  const msgPassword = "";
  const msgEmail = "";
  const msgRole = "";

  return (

    <ScrollView style={customStyles.container}>
    {/* <Image style={imgStyle.long_logo} */}
      {/* // source={require('../../assets/logo_white.png')}/> */}
    <Text style={textStyle.h1}>Profile</Text>
    <View>
      <View style={textInputStyle.view}>
        <Text style={textStyle.default}> Name: </Text>
        <TextInput style={textInputStyle.default}/>
      </View>
    <View style={textInputStyle.view}>
      <Text style={textStyle.default}> Email: </Text>
      <TextInput style={textInputStyle.default}/>
      </View>
    <View style={textInputStyle.view}>
      <Text style={textStyle.default}> Password: </Text>
      <TextInput 
        style={textInputStyle.default}
        secureTextEntry={true}/>
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
    <View style={[buttons.in_view, {marginTop: 30, flexDirection: 'column', justifyContent: 'space-between'}]}>
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
