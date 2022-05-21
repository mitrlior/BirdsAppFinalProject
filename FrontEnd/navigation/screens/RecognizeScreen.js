import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export default function RecognizeScreen({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_image}>
        <Image style={styles.img}
          source={require('../../assets/sqlogo_white.png')}/>
      </View>
      <View style={[styles.main_buttons, {marginTop: 30}]}>
        <TouchableOpacity style={styles.core}>
        <Text style={styles.text}>Recognize Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
        <Text style={styles.text}>Birds in my Area</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
        <Text style={styles.text}>Search Bird</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
          <Text style={styles.text}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
          <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00236a', // Dark background
      // backgroundColor: '#D3DEFF',  // Light backgrond
      alignItems: 'center',
      justifyContent: 'center',
    },
    main_image: {
      // flex: 0.4,
      
    },
    main_buttons:{
      // flex: 0.6,
      marginTop: 44,
      width: '85%',
    },
    img:{
      width: '50%',
      height: undefined,
      aspectRatio: 1,
      alignSelf: 'center',
    },
    core: {
      width:'100%', 
      height:'12%', 
      borderWidth: 1,
      borderRadius: 10,
      borderColor:'#386AFF',
      backgroundColor: '#0833B5',
      justifyContent: 'center',
      alignItems: 'center', 
      marginBottom: 15,
    },
    text: {
      color: '#D3DEFF',
      fontSize: 22,
    },
  });  