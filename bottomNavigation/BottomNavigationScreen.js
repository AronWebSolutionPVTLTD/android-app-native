import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import BookScreen from '../shopping/BookScreen';

const Tab = createBottomTabNavigator();
export default function BottomNavigationScreen(){
  return (
    <Tab.Navigator>
      <Tab.Screen
       options={{headerShown:false,
       tabBarIcon:()=>(<Ionicons name="home" size={25}  color="black"/>)
      }}  name="Home" component={HomeScreen}/>
      <Tab.Screen
      options={{headerShown:false,
        tabBarIcon:()=>(<Ionicons name="cart" size={25}  color="black"/>)
       }}
      name="Explore" component={BookScreen}/>
    </Tab.Navigator>
  );
}