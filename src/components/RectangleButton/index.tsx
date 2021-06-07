import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props extends TextInputProps{
  label?: string,
  value?:string
}

const RectangleButton: React.FC<RectangleButtonProps> = (props) => {
  return (
    <TouchableOpacity style={{height: 50, width: 200, backgroundColor: "#00342E"}} onPress={props.onPress}>
      <Text>Get OTP</Text>
    </TouchableOpacity>
  );
};

export default RectangleButton;
