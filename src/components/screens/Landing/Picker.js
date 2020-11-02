import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from '@components/common';

const options = ['BUY', 'RENT'];

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    marginRight: 8,
    marginLeft: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});

export default function BigDropDownPicker() {
  const theme = useTheme();
  const [selected, setSelected] = React.useState(options[0]);
  const [isOpen, setState] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text
            onPress={() => setSelected(options[1])}
            variant="landingScreenPrimary">
            {selected}
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
          style={styles.icon}
          resizeMode="contain"
          source={
            isOpen
              ? require('@assets/icons/triangle_up.png')
              : require('@assets/icons/triangle_down.png')
          }
        />
      </View>
    </View>
  );
}
