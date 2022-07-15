import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Picker,
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
import { signIn } from "../redux/action";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const user= useSelector(state => state.username);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const res = await login(username, password);
    console.log(`res = ${res}`);
    if(res=== 200){
      console.log(`User ${username} logged in`);
      dispatch(signIn(username));
      navigation.navigate("Main");
    }
    else{
      setPassword('');
      Alert.alert('Problem!', 
        'Username or password are inccorect');
    }
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View style={imgStyle.main_image}>
          <Text style={textStyle.h1}>Log In</Text>
        </View>
        <View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default}> Username: </Text>
            <TextInput
              style={textInputStyle.default}
              value={username}
              onChangeText={(newText) => setUsername(newText)}/>
          </View>
          <View style={textInputStyle.view}>
            <Text style={textStyle.default} secureTextEntry={true}> Password: </Text>
            <TextInput
              style={textInputStyle.default}
              value={password}
              onChangeText={(newText) => setPassword(newText)}
          />
          </View>
        </View>
        <View style={[buttons.main_buttons,{marginTop: 30}]}>
          <TouchableOpacity
            style={touchableOpacityStyle.default}
            onPress={() => userLogin()}
          >
            <Text style={buttons.text}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps  = state => ({
  username: state.username
});

const ActionCreators = Object.assign(
  {},
  signIn,
) 

const mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default LoginScreen;