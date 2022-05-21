import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Picker, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { customStyles, touchableOpacityStyle, buttons, textStyle, imgStyle, textInputStyle, pickerStyle } from '../../assets/AppStyles';

export default function AreaScreen({ navigation }) {
  const [selectedRadius, setSelectedRadius] = useState("5km");
  const [selectedTime, setSelectedTime] = useState("1Day");
    return (
    <SafeAreaView style={customStyles.container}>
      <View style={{marginBottom: 30,}}>
      <View style={pickerStyle.view}>
          <Text style={textStyle.default}>Radius: (KM) </Text>
          <Picker
            selectedValue={selectedRadius}
            style={pickerStyle.default}
            itemStyle={pickerStyle.item}
            onValueChange={(itemValue, itemIndex) => setSelectedRadius(itemValue)}
          >
            <Picker.Item label="1 km" value="1km" />
            <Picker.Item label="5 km" value="5km" />
            <Picker.Item label="10 km" value="10km" />
            <Picker.Item label="15 km" value="15km" />
          </Picker>
      </View>
      <View style={pickerStyle.view}>
        <Text style={textStyle.default}>Last time: </Text>
        <Picker
          selectedValue={selectedTime}
          style={pickerStyle.default}
          itemStyle={pickerStyle.item}
          onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
        >
          <Picker.Item label="1 Day" value="1Day" />
          <Picker.Item label="1 Week" value="1Week" />
          <Picker.Item label="1 Month" value="1Month" />
          <Picker.Item label="1 Year" value="1Year" />
        </Picker>
      </View>
      </View>
      <View>
      <Image style={{width: '80%', height: undefined, aspectRatio: 1, alignSelf: 'center',}}
          source={require('../../../Client/assets/mapimg.png')}/>
        {/* <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}></div> */}
      </View>
      <View style={[{marginTop: 30, alignItems: 'center'}]}>
        <Text style={[textStyle.default, {alignSelf: 'center', marginTop: 10,}]}>Chosen bird from map:</Text>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>See more</Text>    
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}