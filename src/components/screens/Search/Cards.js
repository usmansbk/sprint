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

const ITEM_WIDTH = 220;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  itemContainer: {
    width: ITEM_WIDTH,
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
    position: 'absolute',
    top: '50%',
    left: -15,
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
  button: {
    width: ITEM_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Cards({data = []}) {
  const theme = useTheme();
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <FlatList
      initialNumToRender={0}
      contentContainerStyle={[
        styles.container,
        {
          paddingHorizontal: theme.spacing.l,
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
    <TouchableOpacity style={[styles.itemContainer, {margin: theme.spacing.m}]}>
      <View style={[styles.content, {padding: theme.spacing.l}]}>
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
            resizeMode="contain"
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
        </View>
      </View>
      <View style={styles.itemFooter}>
        <Button>Details</Button>
        <Button primary right>
          Rent
        </Button>
      </View>
    </TouchableOpacity>
  );
};

const Button = ({children, primary, onPress = () => null, right}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            borderRadius: theme.shape.borderRadius,
            borderTopRightRadius: right
              ? theme.shape.noBorder
              : theme.shape.borderRadius,
            borderBottomLeftRadius: right
              ? theme.shape.noBorder
              : theme.shape.borderRadius,
            padding: theme.spacing.m,
            backgroundColor: primary
              ? theme.colors.buttonPrimaryBackground
              : theme.colors.transparent,
          },
        ]}>
        <Text variant={primary ? 'textButtonPrimaryText' : 'textButtonText'}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
