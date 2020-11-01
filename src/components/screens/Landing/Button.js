import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '@components/common/Text';

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
  },
  text: {
    color: 'white',
  },
});

export default function AnimatedButton() {
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
        onPress={() => console.log('Hello')}></TouchableOpacity>
      <Text variant="body2">Go</Text>
    </View>
  );
}
