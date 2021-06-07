import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { useColorScheme } from 'react-native';
import constants from '../constants';
import Home from "../container/Home";

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background:constants.Colors.white,
  },
};

const RouteStack = createStackNavigator()

const Router: React.FC = () => {
  const scheme = useColorScheme();
  return (<>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
        <RouteStack.Navigator>
          <RouteStack.Screen name="All Post" component={Home} />
        </RouteStack.Navigator>
      </NavigationContainer> 
    </>
  );
};

export default Router;
