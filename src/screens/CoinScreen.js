import React, { Component } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Coin from '../components/Coin';
import Http from '../libs/https';

class CoinScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });

    const response = await Http.instance.get('https://api.coinlore.net/api/tickers/');

    this.setState({ coins: response.data, loading: false });
  };

  handlePress = () => {
    console.log('Go to detail', this.props);

    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            style={styles.loader}
            color="white"
            size="large"
          />
        ) : (
            <FlatList
              data={coins}
              renderItem={({ item }) => <Coin item={item} />}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleText: {
    color: 'white',
    textAlign: 'center',
  },

  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
  },

  loader: {
    marginTop: 60,
  }
});

export default CoinScreen;
