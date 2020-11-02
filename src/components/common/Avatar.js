import React from 'react';
import {Image} from 'react-native';

export default function Avatar({size = 45, uri}) {
  const url = uri || `https://i.pravatar.cc/${size}`;
  const style = {
    height: size,
    width: size,
    borderRadius: size / 2,
  };
  return <Image style={style} resizeMode="contain" source={{uri: url}} />;
}
