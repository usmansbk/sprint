import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 161,
    width: 234,
  },
});

export default function Landing() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('@assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}
