import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./screens/Dashboard";
import Leaderboard from "./screens/Leaderboard";
import { NavigationContainer } from "@react-navigation/native";
import Social from "./screens/Social";
import Setting from "./screens/Setting";



const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          options={{
            headerStyle: { backgroundColor: "red" },
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  style={{
                    height: 23,
                    width: 23,
                    resizeMode: "contain",
                    tintColor: focused ? "blue" : "black",
                  }}
                  source={require("./assets/dashboard.png")}
                />
              </View>
            ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          style={{ height: 23, width: 23 }}
          options={{
            headerStyle: { backgroundColor: "yellow" },
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  style={{
                    height: 28,
                    width: 28,
                    backgroundColor: "white",
                    tintColor: focused ? "blue" : "black",
                  }}
                  source={require("./assets/leaderboard.png")}
                />
              </View>
            ),
          }}
          name="Leaderboard"
          component={Leaderboard}
        />
        <Tab.Screen
          options={{
            headerStyle: { backgroundColor: "pink" },
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  style={{
                    height: 23,
                    width: 23,
                    resizeMode: "contain",
                    tintColor: focused ? "blue" : "black",
                  }}
                  source={require("./assets/social.png")}
                />
              </View>
            ),
          }}
          name="Social"
          component={Social}
        />
        <Tab.Screen
          options={{
            headerStyle: { backgroundColor: "blue" },
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  style={{
                    height: 23,
                    width: 23,
                    resizeMode: "contain",
                    tintColor: focused ? "blue" : "black",
                  }}
                  source={require("./assets/settings.png")}
                />
              </View>
            ),
          }}
          name="Settings"
          component={Setting}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
