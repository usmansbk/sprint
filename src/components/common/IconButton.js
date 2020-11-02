import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native';
import Icon from './Icon';

export default function IconButton({name, size, onPress}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: theme.spacing.m,
      }}>
      <Icon name={name} size={size} />
    </TouchableOpacity>
  );
}
