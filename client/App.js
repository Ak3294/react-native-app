import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/authScreens/LoginScreen";
import SignupScreen from "./screens/authScreens/SignupScreen";
import SplashScreen from "./screens/appScreens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtpVerificationScreen from "./screens/authScreens/OtpVarificationScreen";
import HomeScreen from "./screens/appScreens/HomeScreen";
import AppScreen from "./screens/appScreens/AppScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="OtpVarification"
          component={OtpVerificationScreen}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
