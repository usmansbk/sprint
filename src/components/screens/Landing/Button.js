import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {Icon} from '@components/common';

const SIZE = 60;
const EXPANDED_WIDTH = 151;
const EXPANDED_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Demi',
    fontSize: 18,
    lineHeight: 43,
  },
});

export default function AnimatedButton({onPress = () => null, x, index}) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.buttonPrimaryBackground,
              height: x.interpolate({
                inputRange: [0, index],
                outputRange: [SIZE, EXPANDED_HEIGHT],
                extrapolate: 'clamp',
              }),
              width: x.interpolate({
                inputRange: [0, index],
                outputRange: [SIZE, EXPANDED_WIDTH],
                extrapolate: 'clamp',
              }),
              borderRadius: x.interpolate({
                inputRange: [0, index],
                outputRange: [SIZE / 2, 20],
                extrapolate: 'clamp',
              }),
            },
          ]}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: x.interpolate({
                    inputRange: [0, index],
                    outputRange: [0, 50],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Icon
              name={index ? 'arrow-right' : 'chevron-right'}
              size={index ? 14 : 24}
            />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
      <Animated.Text
        disabled
        style={[
          styles.text,
          {
            color: x.interpolate({
              inputRange: [0, index],
              outputRange: [theme.colors.buttonPrimaryBackground, '#fff'],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: x.interpolate({
                  inputRange: [0, index],
                  outputRange: [0, -(EXPANDED_HEIGHT - 2)],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        Go
      </Animated.Text>
    </View>
  );
}
