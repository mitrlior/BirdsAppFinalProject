import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Picker, Image} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, imgStyle, textStyle, textInputStyle} from '../../assets/AppStyles';


export default function LogInScreen({ navigation }) {
  const [selectedValue, getSelectedValue] = useState("hobby");
    return (
    <SafeAreaView style={customStyles.container}>
      <View>
        <Text style={textStyle.h1}>LogIn</Text>
      </View>
      <View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Username: </Text>
          <TextInput style={textInputStyle.default} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Password: </Text>
          <TextInput style={textInputStyle.default}/>
        </View>      
      </View>

      <View style={[buttons.view, {marginTop: 30, width: '50%',},]}>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}