import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';

const Button = ({ title, style, outlined }) => {
  return (
  <TouchableOpacity 
  style={[
    styles.core, 
    outlined? styles.outlined : styles.filled, 
    style
  ]}
    >
    {/* <Text>Click Me</Text> */}
    <Text style={{color: outlined? 'blue': 'black'}}>{title}</Text>
  </TouchableOpacity>
  );
}

export default Button;