import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';

export default function App() {
  React.useEffect(() => {
    const delay = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
