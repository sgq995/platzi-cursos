import React, { Component } from 'react';
import { FlatList, Image, SectionList, StyleSheet, Text, View } from 'react-native';
import CoinMarketItem from '../components/CoinMarketItem';
import Http from '../libs/https';
import colors from '../res/colors';

class CoinDetailScreen extends Component {
  state = {
    markets: [],
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

  componentDidMount() {
    const { coin } = this.props.route.params;

    this.props.navigation.setOptions({ title: coin.symbol });

    this.getMarkets(coin.id);
  }

  render() {
    const { coin } = this.props.route.params;
    const { markets } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image style={styles.iconImg} source={{ uri: this.getSymbolIcon(coin.nameid) }} />
          <Text style={styles.titleText}>{coin.name}</Text>
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

  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
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
