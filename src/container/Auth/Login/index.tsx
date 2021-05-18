/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import FloatingInput from '../../../components/FloatingInput';
import { login } from '../../../redux/actions';

interface Props {
  navigation:any
}

const Login :React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = useCallback(() => {
    dispatch(login());
  },[]);
  return (
    <View>
      <Text onPress={handleLogin}>Login</Text>
      <FloatingInput  label="Email"
        value={email}
        onChangeText={(val)=>setEmail(val)}
      />
        <FloatingInput  label="Password"
        value={password}
        secureTextEntry
        onChangeText={(val)=>setPassword(val)}
      />

<Text onPress={()=>props.navigation.navigate('SignUp')}>Signup</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
