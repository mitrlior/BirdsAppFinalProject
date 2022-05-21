import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, imgStyle} from '../../assets/AppStyles';

export default function HomeScreen({ navigation }) {
    return (
    <SafeAreaView style={customStyles.container}>
      <View style={imgStyle.view}>
        <Image style={imgStyle.default}
          source={require('../../../Client/assets/sqlogo_white.png')}/>
      </View>
      <View style={[buttons.view, {marginTop: 30}]}>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>Remind me later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}