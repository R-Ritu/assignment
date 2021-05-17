import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import AppIntro from '../container/OnBoarding/Intro';
import { AuthStackNavigator } from './navigator/StackNavigator';
import BottomTabNavigator from './navigator/TabNavigator';


const Router: React.FC = () => {
  const {user:{isLoggedIn} , app:{showRealApp} } = useSelector((state: { user: { isLoggedIn: boolean }, app:{showRealApp:boolean} }) => state);
  return (<>
    {showRealApp ?
      <NavigationContainer>
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
