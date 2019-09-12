/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Barang from './Component/Barang';
import Header from './Component/Header';

class App extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Header/>
          <Barang data="SELAMAT DATANG" />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  Header:{
    flex: 1,
    //justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor:'blue'
  }
})

export default App