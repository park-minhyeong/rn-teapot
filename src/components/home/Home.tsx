import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '~/design/Button';

export default function Home({navigation}: {navigation: any}) {
  return (
    <>
      <View className="flex h-1/2 w-full flex-col items-center justify-center bg-blue-500">
        <Text className="text-5xl text-white">Home</Text>
      </View>
      <View className="mt-auto flex h-full w-full flex-col items-center justify-end">
        <Button
          title="Go to Main"
          color="red-500"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </>
  );
}
