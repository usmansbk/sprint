import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Text} from '@components/common';
import Button from './Button';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 161,
    width: 234,
  },
  main: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'flex-end',
  },
  page: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPage: {
    textAlign: 'left',
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
      <ScrollView
        contentContainerStyle={styles.main}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}>
        <View style={styles.page}>
          <Image
            resizeMode="contain"
            source={require('@assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.page}>
          <View style={styles.textPage}>
            <Text variant="landingScreen">I’M LOOKING</Text>
            <Text variant="landingScreen">TO</Text>
          </View>
        </View>
      </ScrollView>
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
