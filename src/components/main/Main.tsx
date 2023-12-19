import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '~/design/Button';

export default function Main({navigation}: {navigation: any}) {
  return (
    <>
      <View className="flex h-1/2 w-full flex-col items-center justify-center bg-red-500">
        <Text className="text-5xl text-white">Main</Text>
      </View>
      <View className="mt-auto flex h-full w-full flex-col items-center justify-end">
        <Button
          title="Go to Home"
          color="blue-500"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
}
