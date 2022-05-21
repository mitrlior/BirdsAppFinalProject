import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Picker, Image} from 'react-native';

export default function SignInScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("hobby");
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_image}>
        <Text style={styles.header_txt}>Sign In</Text>
      </View>
      <View>
        <View style={styles.view_input}>
          <Text style={styles.text}> Username: </Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.view_input}>
          <Text style={styles.text}> Email: </Text>
          <TextInput style={styles.textInput}/>
          </View>        
        <View style={styles.view_input}>
          <Text style={styles.text}> Password: </Text>
          <TextInput style={styles.textInput}/>
        </View>      
        <View style={styles.view_input}>
          <Text style={styles.text}> Role: </Text>
          <Picker
            selectedValue={selectedValue}
            style={{color:'#D3DEFF', fontSize:'24', height: 50, width: 150 }}
            itemStyle={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Hobby" value="hobby" />
            <Picker.Item label="Birdwatcher" value="birdwatcher" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>
        </View>
      </View>

      <View style={[styles.main_buttons, {marginTop: 30}]}>
        <TouchableOpacity style={styles.core}>
        <Text style={styles.text}>Sign Me In!</Text>
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
    textInput: {
      backgroundColor: 'white',
      paddingVertical: 5,
      borderRadius:10,
      borderColor:'black',
      borderWidth: 1,
      fontSize: 16,
      textAlign: 'center',
      width: '200%',
    },
    view_input:{
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom:20,
    },
    header_txt:{
      fontSize: 38,
      fontWeight: 'bold',
      color: '#D3DEFF',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 20,
    },
    main_buttons:{
      // flex: 0.6,
      marginTop: 40,
      alignItems: 'center',
      width: '65%',
    },
    img:{
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      alignSelf: 'center',
    },
    core: {
      width:'80%', 
      height:'25%', 
      borderWidth: 1,
      borderRadius: 10,
      borderColor:'#386AFF',
      backgroundColor: '#0833B5',
      justifyContent: 'center',
      alignItems: 'center', 
      // marginBottom: 15,
    },
    text: {
      color: '#D3DEFF',
      fontSize: 22,
    },
    picker: {
      marginVertical: 30,
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: "#666",
      backgroundColor: '#D3DEFF',
      paddingVertical: 5,
      borderRadius:10,
      borderColor:'black',
      borderWidth: 1,
      fontSize: 16,
    },
  });  