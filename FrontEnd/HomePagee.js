import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_image}>
        <Image style={styles.img}
          source={require('./assets/sqlogo_blue.png')}/>
      </View>
      <View style={[styles.main_buttons, {marginTop: 30}]}>
        <TouchableOpacity style={styles.core}>
        <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.core}>
          <Text style={styles.text}>Remind me later</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
      </SafeAreaView>  );
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
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  core: {
    width:'100%', 
    height:'15%', 
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
