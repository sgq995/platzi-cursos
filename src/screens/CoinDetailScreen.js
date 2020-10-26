import React, { Component } from 'react';
import { FlatList, Image, Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import CoinMarketItem from '../components/CoinMarketItem';
import Http from '../libs/https';
import Storage from '../libs/storage';
import colors from '../res/colors';

class CoinDetailScreen extends Component {
  state = {
    markets: [],
    isFavorite: false,
  }

  getSymbolIcon(name) {
    if (name) {
      // const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }
  }

  getSections(coin) {
    const data = [
      { title: 'Market cap', data: [coin.market_cap_usd] },
      { title: 'Volume', data: [coin.volume24] },
      { title: 'Change', data: [coin.percent_change_24h] },
    ];

    return data;
  }

  async getMarkets(coinId) {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

    const markets = await Http.instance.get(url);

    this.setState({ markets });
  }

  async getIsFavorite() {
    const key = this.getKey();

    try {
      const value = await Storage.instance.get(key);

      if (value && value !== '') {
        this.setState({ isFavorite: true });
      }
    } catch {
    }
  }

  componentDidMount() {
    const { coin } = this.props.route.params;

    this.props.navigation.setOptions({ title: coin.symbol });

    this.getMarkets(coin.id);

    this.getIsFavorite();
  }

  getKey = () => {
    const { coin } = this.props.route.params;
    return `favorite-${coin.id}`;
  }

  async addFavorite() {
    const { coin } = this.props.route.params;
    const value = JSON.stringify(coin);
    const key = this.getKey();

    const stored = await Storage.instance.store(key, value);
    if (stored) {
      this.setState({ isFavorite: true });
    }
  }

  async removeFavorite() {
    const key = this.getKey();

    const removed = await Storage.instance.remove(key);
    if (removed) {
      this.setState({ isFavorite: false });
    }
  }

  handleToggleFavorite = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  }

  render() {
    const { coin } = this.props.route.params;
    const { markets, isFavorite } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.row}>
            <Image style={styles.iconImg} source={{ uri: this.getSymbolIcon(coin.nameid) }} />
            <Text style={styles.titleText}>{coin.name}</Text>
          </View>

          <Pressable
            onPress={this.handleToggleFavorite}
            style={[
              styles.btnFavorites,
              isFavorite ?
                styles.btnFavoritesRemove :
                styles.btnFavoritesAdd,
            ]}
          >
            <Text style={styles.btnFavoriteText}>{isFavorite ? 'Remove favorite' : 'Add favorite'}</Text>
          </Pressable>
        </View>

        <SectionList
          style={styles.sectionList}
          sections={this.getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({ item }) =>
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          }
          renderSectionHeader={({ section }) =>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          }
        />

        <Text style={styles.marketTitle}>Markets</Text>

        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={markets}
          keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
          renderItem={({ item }) => <CoinMarketItem item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },

  row: {
    flexDirection: 'row',
  },

  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnFavorites: {
    padding: 8,
    borderRadius: 8,
  },

  btnFavoritesAdd: {
    backgroundColor: colors.picton,
  },

  btnFavoritesRemove: {
    backgroundColor: colors.carmine,
  },

  btnFavoriteText: {
    color: colors.white,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 8,
  },

  iconImg: {
    width: 25,
    height: 25,
  },

  sectionList: {
    maxHeight: 220,
  },

  sectionHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },

  sectionItem: {
    padding: 8,
  },

  itemText: {
    color: colors.white,
    fontSize: 14,
  },

  sectionText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },

  marketTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },

  flatList: {
    maxHeight: 100,
    paddingHorizontal: 16,
  },
});

export default CoinDetailScreen;
