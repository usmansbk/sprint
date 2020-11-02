import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, StatusBar, Dimensions, Animated} from 'react-native';
import {Text} from '@components/common';
import Button from './Button';
import TogglePicker from './TogglePicker';

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
    // justifyContent: 'flex-end',
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

export default function Landing({navigation}) {
  const theme = useTheme();
  const [index, setSlideIndex] = React.useState(0);
  const scrollRef = React.useRef(null);
  const x = React.useRef(new Animated.Value(0)).current;

  const next = React.useCallback(() => {
    if (index) {
      navigation.navigate('Search');
    } else {
      scrollRef.current.scrollToEnd();
      setSlideIndex(index + 1);
    }
  }, [index, navigation]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
        },
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        contentContainerStyle={styles.slider}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        bounces={false}
        snapToInterval={width}>
        <View style={styles.slide}>
          <Animated.Image
            resizeMode="contain"
            source={require('@assets/images/logo.png')}
            style={[
              styles.logo,
              {
                opacity: x.interpolate({
                  inputRange: [0, width / 2],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        </View>
        <View style={styles.slide}>
          <View style={styles.textPage}>
            <Text variant="landingScreenGray">I’M LOOKING</Text>
            <View style={styles.textRow}>
              <Text variant="landingScreenGray">TO</Text>
              <TogglePicker />
            </View>
          </View>
        </View>
      </Animated.ScrollView>
      <View
        style={[
          styles.footer,
          {
            padding: theme.spacing.xl,
            marginHorizontal: theme.spacing.l,
          },
        ]}>
        <Button onPress={next} x={Animated.divide(x, width)} index={index} />
      </View>
    </View>
  );
}
