import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon, Text} from '@components/common';

const matches = [
  {
    id: 'nice_fr',
    name: 'Nice, FR',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: 'Regular',
    fontSize: 20,
    lineHeight: 21,
    height: 56,
  },
  row: {
    flexDirection: 'row',
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
      <View style={styles.row}>
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
            },
          ]}
        />
      </View>
      <View
        style={{
          marginHorizontal: theme.spacing.xl,
          paddingBottom: theme.spacing.m,
        }}>
        <Text variant="searchMatch">Hello</Text>
      </View>
    </View>
  );
}
