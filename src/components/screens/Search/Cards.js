import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Text, Icon} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  itemContainer: {
    borderRadius: 20,
    backgroundColor: '#F4F5F6',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBody: {
    // backgroundColor: 'red',
  },
  image: {
    height: 90,
    width: 255,
  },
  rating: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textSpacing: {
    marginHorizontal: 2,
  },
});

export default function Cards({data = []}) {
  const theme = useTheme();
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <FlatList
      contentContainerStyle={[
        styles.container,
        {
          paddingRight: theme.spacing.l,
        },
      ]}
      horizontal
      data={data}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const Item = ({item}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {margin: theme.spacing.l, padding: theme.spacing.l},
      ]}>
      <View style={styles.content}>
        <View style={styles.itemHeader}>
          <View>
            <Text variant="cardTitle">{item.name}</Text>
            <Text variant="cardCaption">{item.model}</Text>
          </View>
          <View>
            <Text variant="cardTitle">{item.price}</Text>
            <Text variant="cardCaption">/{item.priceRate}</Text>
          </View>
        </View>
        <View style={styles.itemBody}>
          <Image
            source={item.image}
            // resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View>
          <View style={styles.rating}>
            <Icon name="star" size={14} />
            <Text style={styles.textSpacing} variant="hotDealsRating">
              {item.rating}
            </Text>
            <Text style={styles.textSpacing} variant="hotDealsReviewCount">
              ({item.reviewCount})
            </Text>
          </View>
          <View style={styles.itemFooter}>
            <Text>Details</Text>
            <Text>Rent</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
