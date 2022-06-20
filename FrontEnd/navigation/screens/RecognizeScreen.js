import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {
  customStyles,
  buttons,
  touchableOpacityStyle,
  imgStyle,
} from "../../assets/AppStyles";
import {RNCamera} from 'react-native-camera'


export default function RecognizeScreen({ navigation }) {
    return (
    <SafeAreaView style={customStyles.container}>
      {/* <RNCamera
      style={{flex:1, alignItems: 'center'}}
      ref={ref=>{this.camera = ref}}/> */}
    </SafeAreaView>
    );
}