import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon, Text} from '@components/common';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: 'Regular',
    fontSize: 20,
    lineHeight: 21,
    height: 56,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function SearchBar({
  value,
  results = [],
  showMap,
  openMap = () => null,
  onChangeText = () => null,
  onSubmitEditing = () => null,
  onSelectItem = () => null,
}) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.searchBarInput,
          borderRadius: theme.spacing.m,
        },
      ]}>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: theme.spacing.s,
          },
        ]}>
        <Icon name="location_outline" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="web-search"
          returnKeyType="search"
          returnKeyLabel="search"
          autoFocus
          style={[
            styles.input,
            {
              paddingHorizontal: theme.spacing.m,
            },
          ]}
          onSubmitEditing={onSubmitEditing}
        />
        {showMap && (
          <TouchableOpacity onPress={openMap}>
            <Text variant="textButton">View on map</Text>
          </TouchableOpacity>
        )}
      </View>
      {!!results.length && (
        <View
          style={{
            marginHorizontal: theme.spacing.xl,
            paddingBottom: theme.spacing.m,
          }}>
          {results.map((item) => (
            <Item
              key={item.id}
              label={item.name}
              onPress={() => onSelectItem(item.name)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const Item = ({label, onPress}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: theme.spacing.s,
      }}>
      <Text variant="searchMatch">{label}</Text>
    </TouchableOpacity>
  );
};
