import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>OH!</Text>
      <TouchableOpacity style={styles.core}>
        <Text>Sign-In</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    width:100, 
    height:50, 
    borderWidth:1,
    borderColor:'blue',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {

  },
  textInput: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius:10,
    borderColor:'black',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  view_input:{
    marginHorizontal: 40,
    marginBottom:30,
  },
});
