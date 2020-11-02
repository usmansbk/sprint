import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Text} from '@components/common';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
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

export default function Filters({data = [], filter = 'all'}) {
  return (
    <View style={styles.left}>
      <FlatList
        inverted
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <FilterItem {...item} selected={filter === item.id} />
        )}
      />
    </View>
  );
}

const FilterItem = ({id, label, selected, onPress = () => console.log(id)}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.filterItemContainer}>
        <Text
          style={styles.filterItem}
          variant={selected ? 'selectedSearchFilter' : 'searchFilter'}
          selected={selected}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
