import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./navigation/screens/HomeScreen";
import SignUpScreen from "./navigation/screens/SignUpScreen";
import SignInScreen from "./navigation/screens/SignUpScreen";
import AreaScreen from "./navigation/screens/AreaScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "SignUp" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "SignIn" }}
        />
        <Stack.Screen
          name="Area"
          component={AreaScreen}
          options={{ title: "Area" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
