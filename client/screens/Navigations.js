// In App.js in a new project

import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Dashboard',
  screenOptions:{title:'Dashboard'},
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Dashboard: {
      screen: Dashboard,
      options: {
        title: 'Dashboard',
        // headerShown:false
        headerBackVisible:false

      },
    },
    Leaderboard: {
      screen: Leaderboard,
      options: {
        title: 'Leaderboard',
        // headerShown:false
        headerBackVisible:false
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Navigations(){
  return <Navigation/>
}
