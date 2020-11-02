import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Empty from './Empty';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
});

export default function Search() {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
          padding: theme.spacing.l,
        },
      ]}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <Empty />
    </View>
  );
}
