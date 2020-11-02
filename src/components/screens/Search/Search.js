import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Avatar} from '@components/common';
import Empty from './Empty';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    zIndex: 1000,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

const matches = [
  {
    id: 'nice_fr',
    name: 'Nice, FR',
  },
];

export default function Search() {
  const theme = useTheme();
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [showMap, setViewMap] = React.useState();

  const onChangeText = (text) => {
    setValue(text);
    setResults(text.length ? matches : []);
  };
  const onSelectItem = (item) => {
    onChangeText(item);
    setResults([]);
    setViewMap(!!item.length);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.mainBackground,
        },
      ]}>
      <View
        style={[
          styles.header,
          {
            padding: theme.spacing.l,
          },
        ]}>
        <View
          style={{
            marginRight: theme.spacing.l,
          }}>
          <Avatar />
        </View>
        <SearchBar
          value={value}
          results={results}
          showMap={showMap}
          onChangeText={onChangeText}
          onSelectItem={onSelectItem}
          onSubmitEditing={() => setViewMap(!!value.length)}
        />
      </View>
      <Empty />
    </View>
  );
}
