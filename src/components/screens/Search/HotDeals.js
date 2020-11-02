import React from 'react';
import {useTheme} from '@shopify/restyle';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Icon} from '@components/common';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSpacing: {
    paddingHorizontal: 4,
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
      <View>
        <View>
          <View
            style={[
              styles.itemHeader,
              {
                paddingVertical: theme.spacing.xs,
              },
            ]}>
            <Text variant="hotDealsTitle">{item.name}</Text>
            <Text variant="hotDealsTitle">{item.price}</Text>
          </View>
          <Text variant="hotDealsItemSubtitle">{item.model}</Text>
          <View
            style={[
              styles.itemFooter,
              {
                paddingVertical: theme.spacing.xs,
              },
            ]}>
            <Text variant="hotDealsRating">{item.rating}</Text>
            <Text style={styles.textSpacing} variant="hotDealsReviewCount">
              ({item.reviewCount})
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
    />
  );
}
