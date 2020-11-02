import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './Landing';
import Search from './Search';

const Stack = createStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
