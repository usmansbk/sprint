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

  const renderItem = ({item}) => {
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
