import React from 'react';
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

export default function Search() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@assets/images/location_pin.png')}
      />
      <Text>No Location</Text>
      <Text>Please enter your location</Text>
    </View>
  );
}
