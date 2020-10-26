/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'CryptoTracker/src/components/CoinStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import colors from './src/res/colors';
import FavoritesStack from './src/components/FavoritesStack';

const Tabs = createBottomTabNavigator();

const TabIcon = ({ size, color, source }) => {
  return (
    <Image
      style={{
        tintColor: color,
        width: size,
        height: size,
      }}
      source={source}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: colors.blackPearl,
          },
        }}
      >
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => <TabIcon size={size} color={color} source={require('CryptoTracker/src/assets/bank.png')} />,
          }}
        />

        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => <TabIcon size={size} color={color} source={require('CryptoTracker/src/assets/star.png')} />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
