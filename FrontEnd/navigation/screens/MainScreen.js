import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {customStyles, buttons, touchableOpacityStyle, imgStyle, textStyle, textInputStyle} from '../../assets/AppStyles';

export default function MainScreen({ navigation }) {
    return (
    <SafeAreaView style={customStyles.middle_container}>
      <View style={imgStyle.view}>
        <Image style={[imgStyle.medium, {paddingVertical: 30, marginTop: 30,}]}
          source={require('../../assets/sqlogo_white.png')}/>
      </View>
      <View style={buttons.view}>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>Recognize Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>Birds in my Area</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
        <Text style={buttons.text}>Search Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#00236a', // Dark background
//       // backgroundColor: '#D3DEFF',  // Light backgrond
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     main_image: {
//       // flex: 0.4,
      
//     },
//     main_buttons:{
//       // flex: 0.6,
//       marginTop: 44,
//       width: '85%',
//     },
//     img:{
//       width: '50%',
//       height: undefined,
//       aspectRatio: 1,
//       alignSelf: 'center',
//     },
//     core: {
//       width:'100%', 
//       height:'12%', 
//       borderWidth: 1,
//       borderRadius: 10,
//       borderColor:'#386AFF',
//       backgroundColor: '#0833B5',
//       justifyContent: 'center',
//       alignItems: 'center', 
//       marginBottom: 15,
//     },
//     text: {
//       color: '#D3DEFF',
//       fontSize: 22,
//     },
//   });  