import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  customStyles,
  mapStyle,
  dropDownStyle,
  touchableOpacityStyle,
  buttons,
  textStyle,
  pickerStyle,
  imgStyle,
  textInputStyle,
  Style,
} from "../assets/AppStyles";

import * as Location from 'expo-location';
import DropDownPicker from "react-native-dropdown-picker";

export default function AreaScreen({ navigation }) {
  const [selectedTime, setSelectedTime] = useState(null);
  // const [openDistance, setOpenDistance] = useState(false);
  const [openPeriod, setOpenPeriod] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  var markers = [
    {
      latitude: 32.046, 
      longitude: 34.47599,
      title: "Bird Name",
      subtitle: "BirdWatcher Name",
      animateDrop: true,
    }
  ];
  
  const [periods, setPeriods] = useState([
    { label: "1 Day", value: "1Day" },
    { label: "1 Week", value: "1Week" },
    { label: "1 Month", value: "1Month" },
    { label: "1 Year", value: "1Year" },
  ]);

  const onPeriodOpen = useCallback(() => {
    setOpenDistance(false);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let region = { 
        latitude: location.coords.latitude,
        longitude: location.coords.longitude, 
        // longitude: location.longitude,
        // latitudeDelta: 0.045,
        // longitudeDelta: 0.045, 
      }
      // console.log(region);
      setLat(location.coords.latitude);
      setLng(location.coords.longitude);
      // setLocation(location);
      setLocation(region);
    })();
  }, []);

  return (
      <View style={ customStyles.container}>
        <View style={dropDownStyle.view}>
          <Text style={textStyle.default}>Time Period: </Text>
          <DropDownPicker
            open={openPeriod}
            onOpen={onPeriodOpen}
            value={selectedTime}
            items={periods}
            setOpen={setOpenPeriod}
            setValue={setSelectedTime}
            setItems={setPeriods}
            placeholder={"Select Period"}
            style={dropDownStyle.default}
            dropDownContainerStyle={dropDownStyle.item}
            // zIndex={3000}
            zIndexInverse={1000}
          />
        </View>
        <MapView
          style={mapStyle.map}
          region={
            {
            latitude: lat, //location.latitude,
            longitude: lng, // location.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          annotations={markers}
        >
          {/* <Marker
            coordinate={{ latitude: 32.046, longitude: 34.47599 }}
            title="Bird Name"
            description="BirdWatcher Name"
            centerOffset={{ x: 0, y: 0 }}
          /> */}
        </MapView>
      </View>
  );
}
