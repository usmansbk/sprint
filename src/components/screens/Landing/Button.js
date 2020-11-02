import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {Text, Icon} from '@components/common';

const SIZE = 60;
const EXPANDED_WIDTH = 151;
const EXPANDED_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
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
          <Icon name="chevron-right" size={24} />
        </Animated.View>
      </TouchableOpacity>
      <Text variant="body2">Go</Text>
    </View>
  );
}
