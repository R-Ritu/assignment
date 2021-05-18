import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import constants from '../constants';
import AppIntro from '../container/OnBoarding/Intro';
import { AuthStackNavigator } from './navigator/StackNavigator';
import BottomTabNavigator from './navigator/TabNavigator';
const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background:constants.Colors.white,
  },
};

const Router: React.FC = () => {
  const scheme = useColorScheme();
  const {user:{isLoggedIn} , app:{showRealApp} } = useSelector((state: { user: { isLoggedIn: boolean }, app:{showRealApp:boolean} }) => state);
  return (<>
    {showRealApp ?
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
        {!isLoggedIn ?
          <AuthStackNavigator />
          :
          <BottomTabNavigator />}
      </NavigationContainer> :
      <AppIntro />}
    </>
  );
};

export default Router;
