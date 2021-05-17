/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {dispatch(logout());},[]);
  return (
    <View>
      <Text>Profile</Text>
      <Text onPress={handleLogout}>Logout</Text>
    </View>
  );
};

export default Profile;
