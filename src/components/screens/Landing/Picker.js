import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet} from 'react-native';
import {Text} from '@components/common';

const options = ['BUY', 'RENT'];

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  divider: {
    height: 1,
    marginRight: 6,
    marginLeft: 4,
  },
});

export default function BigDropDownPicker() {
  const theme = useTheme();
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <View style={styles.container}>
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
  );
}
