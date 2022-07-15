import React, { useState, useCallback } from "react";
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

import DropDownPicker from "react-native-dropdown-picker";

export default function AreaScreen({ navigation }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [openDistance, setOpenDistance] = useState(false);
  const [openPeriod, setOpenPeriod] = useState(false);

  const [distances, setDistances] = useState([
    { label: "1 km", value: "1km" },
    { label: "5 km", value: "5km" },
    { label: "10 km", value: "10km" },
    { label: "15 km", value: "15km" },
  ]);
  const [periods, setPeriods] = useState([
    { label: "1 Day", value: "1Day" },
    { label: "1 Week", value: "1Week" },
    { label: "1 Month", value: "1Month" },
    { label: "1 Year", value: "1Year" },
  ]);

  const onDistanceOpen = useCallback(() => {
    setOpenPeriod(false);
  }, []);
  const onPeriodOpen = useCallback(() => {
    setOpenDistance(false);
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
          initialRegion={{
            // TLV
            latitude: 32.046,
            longitude: 34.47599,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 32.046, longitude: 34.47599 }}
            title="Bird Name"
            description="BirdWatcher Name"
            // image={require('../../assets/mapPin.png')}
            centerOffset={{ x: 0, y: 0 }}
          />
        </MapView>
      </View>
  );
}
