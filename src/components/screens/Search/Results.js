import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
  const filterRef = React.useRef(null);
  const filter = 'all';

  React.useEffect(() => {
    filterRef.current.scrollToEnd();
  }, []);

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
            ref={filterRef}
            bounces={false}
            decelerationRate="fast"
            contentContainerStyle={styles.filterList}
            pagingEnabled={false}
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

const FilterItem = ({id, label, selected, onPress = () => null}) => {
  return (
    <TouchableOpacity onPress={() => console.log(id)}>
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
