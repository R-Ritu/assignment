import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthStackNavigator } from './navigator/StackNavigator';
import BottomTabNavigator from './navigator/TabNavigator';


const Router: React.FC = () => {
  const { isLoggedIn } = useSelector((state: { user: { isLoggedIn: boolean } }) => state.user);
  return (
    <NavigationContainer>
      {!isLoggedIn ?
        <AuthStackNavigator />
      :
        <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default Router;
