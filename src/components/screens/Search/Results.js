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
  },
});

export default function Results({data: {filters = []}}) {
  const theme = useTheme();
  const [filter, setFilter] = React.useState('all');

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
              paddingVertical: theme.spacing.s,
            },
          ]}>
          <IconButton
            name="filter"
            size={20}
            onPress={() => console.log('Toggle filter')}
          />
        </View>
        <Filters
          data={filters}
          filter={filter}
          onSelectFilter={(val) => setFilter(val)}
        />
        <FlatList />
      </View>
    </View>
  );
}
