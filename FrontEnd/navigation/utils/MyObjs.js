import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";

export const User = (props) => {
  username: props.username;
  first_name: props.firstName;
  last_name: props.lastName;
  password: props.password;
  email: props.email;
  type: props.role;
};

export const BirdInfo = (props) => {
  id: props.bird_id;
  name: props.name;
  family: props.family;
  img_path: props.img_path;
  info: props.info;
};