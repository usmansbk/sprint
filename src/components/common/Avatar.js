import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Avatar({size = 45, uri}) {
  const url = uri || `https://i.pravatar.cc/${size}`;
  const style = {
    height: size,
    width: size,
    borderRadius: size / 2,
  };
  return (
    <View style={[styles.container, style]}>
      <Image style={style} resizeMode="contain" source={{uri: url}} />
    </View>
  );
}
