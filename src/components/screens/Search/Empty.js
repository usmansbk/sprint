import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Image, View, StyleSheet} from 'react-native';
import {Text} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 154,
    height: 154,
  },
});

export default function Empty() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
          marginVertical: theme.spacing.xl * 5,
        },
      ]}>
      <Image
        style={styles.image}
        source={require('@assets/images/location_pin.png')}
      />
      <Text variant="emptySearchTitle">No Location</Text>
      <Text variant="emptySearchSubtitle">Please enter your location</Text>
    </View>
  );
}
