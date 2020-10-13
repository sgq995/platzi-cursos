import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

class CoinScreen extends Component {
  handlePress = () => {
    console.log('Go to detail', this.props);

    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coin Screen</Text>

        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Ir a detail</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  titleText: {
    color: 'white',
    textAlign: 'center',
  },

  btn: {
    padding: 0,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CoinScreen;
