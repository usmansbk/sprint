import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Avatar} from '@components/common';
import Empty from './Empty';
import Results from './Results';
import SearchBar from './SearchBar';

const results = {
  filters: [
    {
      id: 'all',
      label: 'All results',
    },
    {
      id: 'tesla',
      label: 'Tesla',
    },
    {
      id: 'porshe',
      label: 'Porshe',
    },
    {
      id: 'aston',
      label: 'Aston Martin',
    },
  ],
  all: [],
  deals: [],
};

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

const locs = [
  {
    id: 'nice_fr',
    name: 'Nice, FR',
  },
];

export default function Search() {
  const theme = useTheme();
  const [value, setValue] = React.useState('');
  const [locations, setLocation] = React.useState([]);
  const [showMap, setViewMap] = React.useState();

  const onChangeText = (text) => {
    setValue(text);
    setLocation(text.length ? locs : []);
  };
  const onSelectItem = (item) => {
    onChangeText(item);
    setLocation([]);
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
          results={locations}
          showMap={showMap}
          onChangeText={onChangeText}
          onSelectItem={onSelectItem}
          onSubmitEditing={() => setViewMap(!!value.length)}
        />
      </View>
      <View
        style={[
          styles.container,
          {
            marginTop: theme.spacing.xl * 2,
            padding: theme.spacing.l,
          },
        ]}>
        {true ? <Results data={results} /> : <Empty />}
      </View>
    </View>
  );
}
