// In App.js in a new project

import * as React from "react";
import { View, Text, StatusBar, Settings, StyleSheet } from "react-native";
import Navigations from "./screens/Navigations";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "./screens/Dashboard";
import Leaderboard from "./screens/Leaderboard";
import { NavigationContainer } from "@react-navigation/native";
import Social from "./screens/Social";
import Setting from "./screens/Setting";

export default function TopNavigation() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarLabelStyle: { color: "black", fontSize: 12 },
          tabBarIndicatorStyle: { color: "green" },
        }}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Social" component={Social} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
