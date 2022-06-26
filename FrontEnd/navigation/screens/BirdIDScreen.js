// import * as React from 'react';
import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, FlatList} from 'react-native';
import {customStyles, buttons, pickerStyle, textStyle, touchableOpacityStyle, imgStyle} from '../../assets/AppStyles';
import { BirdInfo } from "../utils/MyObjs";
import { BirdCard } from "../utils/BirdCard";


export default function BirdIDScreen({ navigation }) {

  const name = 'The Bird Name';
  const family = 'Family';
  const img_path ='../../assets/sqlogo_white';
  const info = 'info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info ';
  const birdInfo = new BirdInfo(name, family, img_path, info);
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={customStyles.container}>
        <View style={customStyles.bird_container}>
          <View>
            <Text style={textStyle.id_header1}>{name}</Text>
            <Text style={textStyle.id_header2}>{family}</Text>
          </View>
          <View>
            <Image style={[imgStyle.small, {}]} source={require('../../assets/sqlogo_white.png')}/>
          </View>
        </View>        
        <Text style={textStyle.id_text}>{info}</Text>
        <TouchableOpacity
        style={touchableOpacityStyle.default}
        >
          <Text style={buttons.text}>Find bird on map</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
}
