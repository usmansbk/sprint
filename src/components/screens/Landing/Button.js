import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text, Icon} from '@components/common';

const {width} = Dimensions.get('window');

const SIZE = 60;
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

export default function AnimatedButton({onPress = () => null, x}) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.buttonPrimaryBackground,
              //   transform: [
              //     {
              //       //   scale: x.interpolate({
              //       //     inputRange: [0, width],
              //       //     outputRange: [SIZE, 150],
              //       //     extrapolate: 'clamp',
              //       //   }),
              //     },
              //   ],
            },
          ]}>
          <Icon name="chevron-right" size={24} />
        </Animated.View>
      </TouchableOpacity>
      <Text variant="body2">Go</Text>
    </View>
  );
}
