import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import SplashScreen from 'react-native-splash-screen';
import Screens from '@components/screens';
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
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </ThemeProvider>
  );
}
