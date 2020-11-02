import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {IconButton} from '@components/common';
import Filters from './Filters';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 0.4 * height,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default function Results({data: {filters = []}}) {
  const theme = useTheme();
  const filter = 'all';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
        },
      ]}>
      <View style={styles.header}>
        <View
          style={[
            styles.filterButton,
            {
              paddingVertical: theme.spacing.l,
            },
          ]}>
          <IconButton name="filter" size={20} />
        </View>
        <Filters data={filters} filter={filter} />
        <FlatList />
      </View>
    </View>
  );
}
