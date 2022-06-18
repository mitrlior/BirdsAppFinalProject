import { StyleSheet } from 'react-native';

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00236a', // Dark background
    // backgroundColor: '#D3DEFF',  // Light background
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24,
  },
  middle_container: {
    flex: 1,
    backgroundColor: '#00236a', // Dark background
    // backgroundColor: '#D3DEFF',  // Light background
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#D3DEFF',
    fontSize: 22,
  },

})

const touchableOpacityStyle = StyleSheet.create({
  default:{
    width:'100%', 
    height:'auto', 
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#386AFF',
    backgroundColor: '#0833B5',
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 15,
    padding: 10
  }

})

const buttons = StyleSheet.create({
  view:{
    marginTop: 10,
    width: '85%',
  },
  wide: {
  }, 
  medium: {
    width: '60%',
  }, 
  narrow:{
    width: '40%'
  },
  text: {
    color: '#D3DEFF',
    fontSize: 22,
  },
})

const textStyle = StyleSheet.create({
  h1:{
    fontSize: 38,
    fontWeight: 'bold',
    color: '#D3DEFF',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  h2:{

  },
  h3:{

  },
  default: {
    color: '#D3DEFF',
    fontSize: 22,
  },
})

const imgStyle = StyleSheet.create({
  view:{
    width: '90%',
  },
  default: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  medium:{
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  }
})

const textInputStyle = StyleSheet.create({
  view:{
    alignItems: 'stretch',
    // marginHorizontal: 1,
    marginBottom:20,
  },
  default: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius:10,
    borderColor:'black',
    borderWidth: 1,
    fontSize: 16,
    textAlign: 'left',
    width: 'auto',
  },

})

const pickerStyle = StyleSheet.create({
  view: {
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    //justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },
  item:{
    color:'#D3DEFF',
    fontSize: 24, 
    height: 50, 
    width: 150,
  },
  default:{
    color:'#D3DEFF', 
    fontSize: 24, height: 50, 
    width: '40%',
  },
  pickerr:{
    // IDK
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
  }
})

export { customStyles, buttons , touchableOpacityStyle, imgStyle, textStyle, textInputStyle, pickerStyle}