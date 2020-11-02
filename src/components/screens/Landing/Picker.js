import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from '@components/common';

const options = [
  {
    id: 'buy',
    label: 'BUY',
  },
  {
    id: 'rent',
    label: 'RENT',
  },
];

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  divider: {
    height: 2,
    marginRight: 8,
    marginLeft: 4,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 8,
  },
});

export default function BigDropDownPicker({value = 'buy'}) {
  const theme = useTheme();
  const [id, setValue] = React.useState(value);
  const [isOpen, setOpen] = React.useState(false);

  const selected = options.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text onPress={() => setOpen(!isOpen)} variant="landingScreenPrimary">
            {selected.label}
          </Text>
          <View
            style={[
              styles.divider,
              {
                backgroundColor: theme.colors.primaryBackground,
              },
            ]}
          />
        </View>
        <Image
          style={[
            styles.icon,
            {
              transform: [{rotateX: isOpen ? '0deg' : '180deg'}],
            },
          ]}
          resizeMode="contain"
          source={require('@assets/icons/chevron_up_primary.png')}
        />
      </View>
    </View>
  );
}
