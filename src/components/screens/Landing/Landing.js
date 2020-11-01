import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
// import {Text} from '@components/common';

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
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.colors.mainBackground},
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Image
        resizeMode="contain"
        source={require('@assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}
