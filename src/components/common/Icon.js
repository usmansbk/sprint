import React from 'react';
import {Image} from 'react-native';

const SIZE = 24;

export default function Icon({name, size = SIZE}) {
  let source = null;
  switch (name) {
    case 'arrow-right':
      source = require('@assets/icons/arrow_right.png');
      break;
    case 'chevron-right':
      source = require('@assets/icons/chevron_right.png');
      break;
    case 'location_outline':
      source = require('@assets/icons/location_outline.png');
      break;
    case 'filter':
      source = require('@assets/icons/filter.png');
      break;
    case 'star':
      source = require('@assets/icons/star.png');
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
