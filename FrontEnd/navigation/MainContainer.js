import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignInScreen from './screens/SignInScreen';
import LogInScreen from './screens/LogInScreen';
import MainScreen from './screens/MainScreen';
import AreaScreen from './screens/AreaScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const signinName = "SignIn";
const mainName = "Main";
const loginName = "Login";
const areaName = "Area";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // style={{backgroundColor: '#0833B5'}}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            
            } else if (rn === loginName) {
              iconName = focused ? 'log-in' : 'log-in-outline';
            
            } else if (rn === signinName) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            
            } else if (rn === mainName) {
              iconName = focused ? 'home' : 'home-outline';
            
            }else if (rn === areaName) {
              iconName = focused ? 'map' : 'map-outline';
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Ionicons name={iconName} size={size} color={'#D3DEFF'}/>;
          },
        })}
        tabBarOptions={{
          // backgroundColor: '#0833B5',
          activeTintColor: '#D3DEFF',
          inactiveTintColor: '#D3DEFF',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={loginName} component={LogInScreen} />
        <Tab.Screen name={signinName} component={SignInScreen} />
        <Tab.Screen name={mainName} component={MainScreen} />
        <Tab.Screen name={areaName} component={AreaScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;