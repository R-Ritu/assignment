/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => {
    dispatch(login());
  },[]);
  return (
    <View>
      <Text onPress={handleLogin}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
