/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
 import Card from './card';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={[styles.container]}>
      <View style={styles.header}>
      <Text >
        Home
      </Text>
      </View>
      <View style={styles.scrollView}>
      <ScrollView  >
      // contentContainerStyle={styles.scrollView}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </ScrollView>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     display:'flex',
     flex:1,
     // justifyContent:'center',

  },
  header:{
    paddingTop:20,
    height:64,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',

  },
  title:{
    fontSize:17,
    fontWeight:'600'
  },
  scrollView:{
    height:300,
 

  }




});
