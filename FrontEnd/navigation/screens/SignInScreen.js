import React, { useState } from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, TextInput, Picker} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, imgStyle, textStyle, textInputStyle, pickerStyle} from '../../assets/AppStyles';

export default function SignInScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("hobby");
    return (
    <SafeAreaView style={customStyles.container}>
      <View style={imgStyle.main_image}>
        <Text style={textStyle.h1}>Sign In</Text>
      </View>
      <View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Username: </Text>
          <TextInput style={textInputStyle.default} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> First Name: </Text>
          <TextInput style={textInputStyle.default} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Last Name: </Text>
          <TextInput style={textInputStyle.default} />
        </View>
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Email: </Text>
          <TextInput style={textInputStyle.default}/>
          </View>        
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Password: </Text>
          <TextInput style={textInputStyle.default}/>
        </View>      
        <View style={textInputStyle.view}>
          <Text style={textStyle.default}> Role: </Text>
          <Picker
            selectedValue={selectedValue}
            style={pickerStyle.item}
            itemStyle={pickerStyle.default}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Hobby" value="hobby" />
            <Picker.Item label="Birdwatcher" value="birdwatcher" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>
        </View>
      </View>

      <View style={buttons.main_buttons}>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>Sign Me In!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}