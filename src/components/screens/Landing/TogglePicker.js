import React from 'react';
import {useTheme} from '@shopify/restyle';
import {View, StyleSheet, Animated} from 'react-native';
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

const TEXT_HEIGHT = 43;

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
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 8,
  },
  text: {
    fontFamily: 'SansPro-Bold',
    fontSize: TEXT_HEIGHT,
    lineHeight: TEXT_HEIGHT,
  },
});

export default function TogglePicker({value = 'buy'}) {
  const theme = useTheme();
  const [id, setValue] = React.useState(value);
  const [isOpen, setOpen] = React.useState(false);
  const anim = React.useRef(new Animated.Value(0)).current;
  const transition = Animated.timing(anim, {
    toValue: !isOpen ? TEXT_HEIGHT : 0,
    useNativeDriver: false,
  });

  const selected = options.find((item) => item.id === id);
  const other = options.find((item) => item.id !== id);

  const toggle = () => {
    setOpen(!isOpen);
    transition.start();
  };

  const onSelectItem = () => {
    toggle();
    setValue(other.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text onPress={toggle} variant="landingScreenPrimary">
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
        <Animated.Image
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
      <Animated.Text
        style={[
          styles.text,
          {
            color: theme.colors.primaryBackground,
            height: anim,
          },
        ]}
        onPress={onSelectItem}>
        {other.label}
      </Animated.Text>
    </View>
  );
}
