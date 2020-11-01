import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import {Text} from '@components/common';
import theme from '@config/theme';

export default function App() {
  React.useEffect(() => {
    const delay = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text variant="body">Welcome</Text>
      </View>
    </ThemeProvider>
  );
}
