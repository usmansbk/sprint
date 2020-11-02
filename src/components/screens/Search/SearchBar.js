import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 56,
    minHeight: 56,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: 'Regular',
    fontSize: 20,
    lineHeight: 21,
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
      <TextInput
        underlineColorAndroid="transparent"
        autoCorrect={false}
        keyboardType="web-search"
        returnKeyType="search"
        returnKeyLabel="search"
        autoFocus
        style={[
          styles.input,
          {
            paddingHorizontal: theme.spacing.m,
            color: theme.colors.textPrimary,
          },
        ]}
      />
    </View>
  );
}
