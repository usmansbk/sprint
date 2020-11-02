import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, Icon} from '@components/common';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSpacing: {
    paddingLeft: 4,
  },
  image: {
    width: 140,
    height: 60,
  },
  itemBody: {
    flex: 1,
  },
  name: {
    flex: 1,
  },
  itemBackground: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 111,
    height: '100%',
    // backgroundColor: 'red',
    borderRadius: 8,
  },
});

export default function HotDeals({data = []}) {
  const theme = useTheme();
  const renderHeader = () => (
    <View
      style={[
        styles.header,
        {
          paddingVertical: theme.spacing.l,
        },
      ]}>
      <Text variant="hotDealsTitle">Hot deals</Text>
      <TouchableOpacity onPress={() => console.log('View all')}>
        <Text variant="textButton">View all</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <FlatList
      stickyHeaderIndices={[0]}
      data={data}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const Item = ({item}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={() => console.log('onPress')}>
      <View
        style={[
          styles.itemContainer,
          {
            paddingVertical: theme.spacing.m,
          },
        ]}>
        <View>
          <View
            style={[
              styles.itemBackground,
              {
                backgroundColor: item.backgroundColor,
              },
            ]}
          />
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View
          style={[
            styles.itemBody,
            {
              paddingLeft: theme.spacing.s,
            },
          ]}>
          <View
            style={[
              styles.itemHeader,
              {
                paddingVertical: theme.spacing.xs,
              },
            ]}>
            <Text
              ellipsizeMode="tail"
              variant="hotDealsTitle"
              style={styles.name}>
              {item.name}
            </Text>
            <Text variant="hotDealsTitle">{item.price}</Text>
          </View>
          <Text variant="hotDealsItemSubtitle">{item.model}</Text>
          <View
            style={[
              styles.itemFooter,
              {
                marginVertical: theme.spacing.xs,
              },
            ]}>
            <Icon name="star" size={12} />
            <Text style={styles.textSpacing} variant="hotDealsRating">
              {item.rating}
            </Text>
            <Text style={styles.textSpacing} variant="hotDealsReviewCount">
              ({item.reviewCount})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};