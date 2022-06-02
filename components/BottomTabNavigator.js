import React,{Component} from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {RFValue} from "react-native-responsive-fontsize"
import Ionicons from "react-native-vector-icons/Ionicons";
import{StyleSheet} from "react-native"

import DisadvantagesScreen from '../screens/Disadvantages'
import HomeScreen from '../screens/HomeScreen'
import QuitTobaccoScreen from '../screens/QuitTobaccoScreen'

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigatot extends Component{
  render(){
    return(
      <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
      activeColor="yellow"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Disadvantages") {
              iconName = focused ? "skull" : "skull-outline";
            }
            else {
              iconName = focused ? "close-circle":"close-circle-outline"
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(20)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
      >
      <Tab.Screen name ="Home" component = {HomeScreen} />
      <Tab.Screen name = "Disadvantages" component = {DisadvantagesScreen} />
      <Tab.Screen name = "Quit Tobacco" component = {QuitTobaccoScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
 
  icons: {
    width: RFValue(20)
    
  }
});
