// ./navigation/StackNavigator.js

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BackIcon from '../../components/BackIcon';
import Header from '../../components/Header';
import constants from '../../constants';
import Login from '../../container/Auth/Login';
import Signup from '../../container/Auth/Signup';
import Garments from '../../container/Garments';
import Home from '../../container/Home';
import Profile from '../../container/Profile';
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GarmentStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (<AuthStack.Navigator screenOptions={{
    headerLeft: (props) => <BackIcon {...props} />,

 }}>
    <AuthStack.Screen name="Login" component={Login} options={{
        headerTitle: (props) => <Header {...props} title="Login"/>,
    }} />
      <AuthStack.Screen name="SignUp" component={Signup} options={{
        headerTitle: (props) => <Header {...props} title="Sign Up"/>,
    }} />
    </AuthStack.Navigator>);
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#36d1dc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerBackImage:constants.Images.backIcon,
    }}>
      <HomeStack.Screen name="Dashboard" component={Home}  />

    </HomeStack.Navigator>
  );
};

const GarmentStackNavigator = () => {
  return (
    <GarmentStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#36d1dc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      // header: props => <Header {...props} />,
      // headerLeft: props => <BackIcon {...props} />,
    }}>
      <GarmentStack.Screen name="TrainingVideos" component={Garments} />
    </GarmentStack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#36d1dc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      // header: props => <Header {...props} />,
      // headerLeft: props => <BackIcon {...props} />,
    }}>
      <ProfileStack.Screen name="Settings" component={Profile}  />
      </ProfileStack.Navigator>
  );
};

export { HomeStackNavigator, GarmentStackNavigator, ProfileStackNavigator, AuthStackNavigator };

