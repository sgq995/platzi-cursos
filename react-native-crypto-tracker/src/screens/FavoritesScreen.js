import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FavoritesEmptyState from '../components/FavoritesEmptyState';
import Coin from '../components/Coin';
import Storage from '../libs/storage';
import colors from '../res/colors';

class FavoritesScreen extends Component {
  state = {
    favorites: [],
  }

  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map((fav) => JSON.parse(fav[1]));
      this.setState({ favorites });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getFavorites();

    this.props.navigation.addListener('focus', this.getFavorites);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavorites);
  }

  handlePress = (coin) => {
    this.props.navigation.navigate('CoinDetail', { coin });
  }

  render() {
    const { favorites } = this.state;

    return (
      <View style={styles.container}>
        {favorites.length === 0 ? (
          <FavoritesEmptyState />
        ) : (
            <FlatList
              data={favorites}
              renderItem={(({ item }) =>
                <Coin
                  item={item}
                  onPress={() => this.handlePress(item)}
                />)}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
