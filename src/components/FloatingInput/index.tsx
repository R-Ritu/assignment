import React, { Component } from 'react';
import {
  Animated, StyleSheet, TextInput, TextInputProps, View
} from 'react-native';
import constants from '../../constants';

interface Props extends TextInputProps{
  label?: string,
  value?:string
}

interface State{
  isFocused?:boolean
}
class FloatingInput extends Component<Props,State> {
  state = {
    isFocused: false,
  };
  private _animatedIsFocused: Animated.Value =  new Animated.Value(0);

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      ...constants.Fonts.regular,
      fontWeight:'300',
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 3],
        outputRange: [28, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#1E1E1E', '#1E1E1E'],
      }),
    };
    return (
      <View style={{ paddingTop: 32 }}>
        <Animated.Text
          style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={styles.inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 46,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    ...constants.Fonts.regular,
  },
});

export default FloatingInput;

//https://goshakkk.name/floating-label-input-rn-animated/
