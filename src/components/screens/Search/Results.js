import React from 'react';
import {ScrollView, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Text} from '@components/common';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 0.4 * height,
  },
  left: {
    width: 0.1 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterItem: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  filterItemContainer: {
    height: 85,
    width: 90,
    transform: [
      {
        rotate: '-90deg',
      },
      {
        translateY: 0,
      },
    ],
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
        <View style={styles.left}>
          <ScrollView
            bounces={false}
            invertStickyHeaders
            contentContainerStyle={styles.filterList}
            showsVerticalScrollIndicator={false}>
            {filters.map((item) => (
              <FilterItem
                key={item.id}
                {...item}
                selected={filter === item.id}
              />
            ))}
          </ScrollView>
        </View>
        <FlatList />
      </View>
    </View>
  );
}

const FilterItem = ({label, selected}) => {
  return (
    <View style={styles.filterItemContainer}>
      <Text
        style={styles.filterItem}
        variant={selected ? 'selectedSearchFilter' : 'searchFilter'}
        selected={selected}>
        {label}
      </Text>
    </View>
  );
};
