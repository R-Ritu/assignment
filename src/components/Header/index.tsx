import { StackHeaderTitleProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import constants from '../../constants';

interface HeaderProps extends StackHeaderTitleProps {
  title?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View>
      <Text style={Styles.title}>
        {props.title}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    // fontFamily: Lato;
    fontSize: 20,
    letterSpacing:2,
    textAlign: 'center',
    color: constants.Colors.darkGreen,
    ...constants.Fonts.regular,
  },
});
export default Header;
