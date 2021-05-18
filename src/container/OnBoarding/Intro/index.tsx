import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from '../../../constants';

const slides = [
  {
    key: 'one',
    image: constants.Images.intro.signup,
    imageContainer: constants.Images.intro.container,
    HeaderText: constants.Images.intro.Headertext,
    FooterText: constants.Images.intro.Footertext,
    leftAngle: '',
    rightAngle: constants.Images.intro.rightAngle,
  },
  {
    key: 'two',
    image: constants.Images.intro.pristeem,
    imageContainer: constants.Images.intro.container,
    HeaderText: constants.Images.intro.Headertext1,
    FooterText: constants.Images.intro.Footertext1,
    leftAngle: constants.Images.intro.leftAngle,
    rightAngle: constants.Images.intro.rightAngle,
  },
  {
    key: 'three',
    image: constants.Images.intro.pristeem1,
    imageContainer: constants.Images.intro.container,
    HeaderText: constants.Images.intro.Headertext2,
    FooterText: constants.Images.intro.Footertext2,
    leftAngle: constants.Images.intro.leftAngle,
    rightAngle: '',
  },
];

const AppIntro = () => {
  const _renderItem = ({ item, index }:any) => {
    return (
      <View style={styles.slide}>
        <Image source={item.leftAngle} />
          <ImageBackground
          resizeMode="center"
          style={styles.imageContainer}
          source={item.imageContainer}>
            <Image style={[styles.hraderTextStyle,{right: index === 0 ? 80 : index === 1 ? 30 : 15}]} 
            resizeMode="contain"
            source={item.HeaderText} />
            <Image style={{top: index === 2 ? 30 : null }} source={item.image} />
            <Image style={[styles.footerTextStyle,{bottom: index === 2 ? 6: 39}]} 
            resizeMode="contain"
            source={item.FooterText} />
            {index === 2 ?
            <TouchableOpacity
            style={styles.doneButton}>
              <Text style={styles.text}>Join Today</Text>
            </TouchableOpacity>
            : null }
        </ImageBackground>
        <Image source={item.rightAngle} />
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
  };
  return (
    <AppIntroSlider 
    renderItem={_renderItem} 
    data={slides} 
    onDone={_onDone}
    activeDotStyle = {{
      backgroundColor: constants.Colors.colors.peach
    }}
    showDoneButton = {false}
    showNextButton = {false}
    />
  );
};

export default AppIntro;

const styles = StyleSheet.create({ 
  slide: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: "row",
  backgroundColor: constants.Colors.colors.darkGreen,
},
imageContainer: {
  width: 330,
  height: 580,
  alignItems: 'center',
  justifyContent: 'space-between',
},
hraderTextStyle: {
  right: 20,
  top: 20,
},
footerTextStyle: {
  width: 222,
  height: 92,
  justifyContent: "center",
  bottom: 39,
},
doneButton: {
  width: 209,
  height: 44,
  backgroundColor: constants.Colors.colors.peach,
  bottom: 34,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center"
},
image: {
  width: 274,
  height: 246,
  marginVertical: 32,
},
text: {
  color: constants.Colors.colors.white,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: "center",
},
title: {
  fontSize: 22,
  color: 'white',
  textAlign: 'center',
},
});
