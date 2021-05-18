import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import constants from '../../constants';

interface BackIconProps extends StackHeaderLeftButtonProps {

}

const BackIcon: React.FC<BackIconProps> = (props) => {
  if (props.canGoBack){
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
                resizeMode="contain"
                style={{width: 24,
                  height: 24,
                  left: 20,
                }}
                source={constants.Images.backIcon}
              />
    </TouchableOpacity>
  );} else {return null;}
};

export default BackIcon;
