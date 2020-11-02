import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {IconButton} from '@components/common';
import Filters from './Filters';
import HotDeals from './HotDeals';
import Cards from './Cards';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 0.4 * height,
    flexDirection: 'row',
    width,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default function Results({data: {filters = [], deals = [], cars = []}}) {
  const theme = useTheme();
  const [showFilters, toggleFilter] = React.useState(true);
  const [filter, setFilter] = React.useState('all');

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
        },
      ]}>
      <View
        style={[
          styles.filterButton,
          {
            paddingVertical: theme.spacing.s,
          },
        ]}>
        <IconButton
          name="filter"
          size={20}
          onPress={() => toggleFilter(!showFilters)}
        />
      </View>
      <View style={styles.header}>
        {showFilters && (
          <Filters
            data={filters}
            filter={filter}
            onSelectFilter={(val) => setFilter(val)}
          />
        )}
        <Cards data={cars} />
      </View>
      <HotDeals data={deals} />
    </View>
  );
}
