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
  slider: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'flex-end',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPage: {
    justifyContent: 'flex-end',
    height: 161,
    textAlign: 'left',
  },
  textRow: {
    flexDirection: 'row',
  },
  textSpacing: {
    marginLeft: 10,
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
        contentContainerStyle={styles.slider}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        bounces={false}
        snapToInterval={width}>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            source={require('@assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.slide}>
          <View style={styles.textPage}>
            <Text variant="landingScreenGray">I’M LOOKING</Text>
            <View style={styles.textRow}>
              <Text variant="landingScreenGray">TO</Text>
              <Text style={styles.textSpacing} variant="landingScreenPrimary">
                BUY
              </Text>
            </View>
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
