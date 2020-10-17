import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import colors from '../res/colors';

class CoinSearch extends Component {
  state = {
    query: '',
  }

  handleChangeText = (query) => {
    this.setState({ query });

    if (this.props.onChange) {
      this.props.onChange(query);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS === 'ios' ?
              styles.textInputIOS :
              styles.textInputAndroid,
          ]}
          onChangeText={this.handleChangeText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.charade,
    paddingLeft: 16,
    color: colors.white,
  },

  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },

  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinSearch;
