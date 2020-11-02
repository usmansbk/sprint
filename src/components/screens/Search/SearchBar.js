import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
});

export default function SearchBar() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.searchBarInput,
          borderRadius: theme.spacing.m,
          paddingHorizontal: theme.spacing.s,
        },
      ]}>
      <Icon name="location_outline" />
      <TextInput />
    </View>
  );
}
