// import * as React from 'react';
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import {
  customStyles,
  buttons,
  pickerStyle,
  textStyle,
  touchableOpacityStyle,
  imgStyle,
} from "../assets/AppStyles";
import DropDownPicker from "react-native-dropdown-picker";
import { get_all_birds_types } from "../requests/BirdsRequest";
import { BirdInfo } from "../assets/utils/MyObjs";
import { BirdCard } from "../assets/utils/BirdCard";

export default function BirdInfoScreen({ navigation }) {
  // const [selectedBird, setSelectedBird] = useState("Bird1");
  // const birdInfo = new BirdInfo();

  const name = "The Bird Name";
  const img_path = "../../assets/sqlogo_white";
  const info = "";

  const [open, setOpen] = useState(false);
  const [bird, setBird] = useState(null);
  const [items, setItems] = useState([
    { label: "Bird1", value: "Bird1" },
    { label: "Bird2", value: "Bird2" },
    { label: "Bird3", value: "Bird3" },
    { label: "Bird4", value: "Bird4" },
    { label: "TheBird1", value: "TheBird1" },
    { label: "TheBird2", value: "TheBird2" },
  ]);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await get_all_birds_types();
      console.log(`Status = ${res.status}`);

      if (res.status === 200) {
        const body = await res.json();
        console.log(await body);

        for (const type in await body.birds_types.values()) {
          console.log(`type = ${await type}`);
        }
        return await body;
      } else {
        return [];
      }
      return null;
    };
    const res = fetchDate();
    // console.log(res);
    
  });

  return (
    <SafeAreaView style={customStyles.container}>
      <View>
        <Image
          style={imgStyle.long_logo}
          source={require("../assets/logo_white.png")}
        />
      </View>

      <View>
        <Text style={textStyle.h1}>Find bird</Text>
        <DropDownPicker
          open={open}
          value={bird}
          items={items}
          setOpen={setOpen}
          setValue={setBird}
          setItems={setItems}
          searchable={true}
          placeholder="Select your bird"
        />
      </View>
      <View style={customStyles.container}>
        <View style={customStyles.bird_container}>
          <View>
            <Text style={textStyle.id_header1}>{name}</Text>
          </View>
          <View>
            <Image
              style={[imgStyle.small, {}]}
              source={require("../assets/sqlogo_white.png")}
            />
          </View>
        </View>
        <Text style={textStyle.id_text}>{info}</Text>
        <TouchableOpacity style={touchableOpacityStyle.default}>
          <Text style={buttons.text}>Find bird on map</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
