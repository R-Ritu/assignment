/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import FloatingInput from '../../../components/FloatingInput';
import RectangleButton from "../../../components/RectangleButton";
import { login } from '../../../redux/actions';

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSignup = useCallback(() => {
    dispatch(login());
  },[]);
  return (
    <View style={styles.mainContainer}>
      <FloatingInput  label="Name"
        value={name}
        onChangeText={(val)=>setName(val)}
      />
      <FloatingInput  label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={(val)=>setEmail(val)}
      />
        <FloatingInput  label="Create Password"
        value={password}
        secureTextEntry
        onChangeText={(val) => setPassword(val)}

      />
        <FloatingInput  label="Re-enter Password"
        value={rePassword}
        secureTextEntry
        onChangeText={(val) => setRePassword(val)} />

       <FloatingInput  label="Enter Mobile Number"
        value={mobile}
        keyboardType="numeric"
        onChangeText={(val)=>setMobile(val)}/>
        <RectangleButton></RectangleButton>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  }
});
