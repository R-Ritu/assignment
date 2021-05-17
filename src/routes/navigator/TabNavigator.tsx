// ./navigation/TabNavigator.js

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GarmentStackNavigator, HomeStackNavigator, ProfileStackNavigator } from './StackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#011F30',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#36d1dc',
      },
    }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name="Garments" component={GarmentStackNavigator} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="read-more" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="description" color={color} size={30} />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
