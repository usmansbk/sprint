import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text, Icon} from '@components/common';

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
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.buttonPrimaryBackground,
          },
        ]}
        onPress={onPress}>
        <Icon name="chevron-right" size={24} />
      </TouchableOpacity>
      <Text variant="body2">Go</Text>
    </View>
  );
}
