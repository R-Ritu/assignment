import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import constants from '../../../constants';
import { mainAppView } from '../../../redux/actions/app';

const slides = [
  {
    key: 'one',
    title: 'What is Pristeem?',
    text: 'Pristeem is a new on-demand, self-service clothing care amenity for residential & commercial properties. Plug into a faster, gentler and more eco-friendly alternative to laundry and dry cleaning.',
    image: constants.Images.intro.signup,
  },
  {
    key: 'two',
    title: 'Why do you need Pristeem?',
    text: 'Pristeem is a new on-demand, self-service clothing care amenity for residential & commercial properties. Plug into a faster, gentler and more eco-friendly alternative to laundry and dry cleaning.',
    image: constants.Images.intro.pristeem,
  },
  {
    key: 'three',
    title: 'Sign Up for the best services',
    text: 'Pristeem is a new on-demand, self-service clothing care amenity for residential & commercial properties. ',
    image: constants.Images.intro.pristeem1,
  },
];

const AppIntro = () => {
  const dispatch = useDispatch();
  const _renderItem = ({ item }:any) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    dispatch(mainAppView());
  };
  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>
  );
};

export default AppIntro;

const styles = StyleSheet.create({ slide: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'blue',
},
image: {
  width: 320,
  height: 320,
  marginVertical: 32,
},
text: {
  color: 'rgba(255, 255, 255, 0.8)',
  textAlign: 'center',
},
title: {
  fontSize: 22,
  color: 'white',
  textAlign: 'center',
},
});
