import React from 'react';
import {Image} from 'react-native';

const SIZE = 24;

export default function Icon({name, size = SIZE}) {
  let source = null;
  switch (name) {
    case 'arrow-right':
      source = require('@assets/icons/arrow_right.png');
      break;
    default:
      source = require('@assets/icons/arrow_right.png');
      break;
  }
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={{width: size, height: size}}
    />
  );
}
