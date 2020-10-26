import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static instance = new Storage();

  async store(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async get(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }

  async multiGet(keys) {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }

  async getAllKeys () {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  }

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default Storage;
