import React from 'react';
import { Text, View } from 'react-native';

const Coin = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.symbol}</Text>
    </View>
  );
};

export default Coin;
