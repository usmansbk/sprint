import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
// import {Text} from '@components/common';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 161,
    width: 234,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'flex-end',
  },
});

export default function Landing() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
        },
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.main}>
        <Image
          resizeMode="contain"
          source={require('@assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View
        style={[
          styles.footer,
          {
            padding: theme.spacing.xl,
            marginHorizontal: theme.spacing.l,
          },
        ]}>
        <Button />
      </View>
    </View>
  );
}
