import React from 'react';
import {Text, Pressable} from 'react-native';

export function Button({
  title,
  color,
  onPress,
}: {
  title: string;
  color: string;
  onPress: any;
}) {
  return (
    <Pressable
      className={
        `bg-${color} ` +
        'mb-4 flex h-12 w-4/5 items-center justify-center rounded-md '
      }
      onPress={onPress}>
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
}
