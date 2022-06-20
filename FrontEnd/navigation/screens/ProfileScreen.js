import React, { useState } from "react";

import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image, Picker, ScrollView} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, textStyle, textInputStyle,  pickerStyle, imgStyle} from "../../assets/AppStyles";


export default function ProfileScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("hobby");

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
} 