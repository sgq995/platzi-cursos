import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinScreen from '../screens/CoinScreen';
import CoinDetailScreen from '../screens/CoinDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinScreen} />

      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
