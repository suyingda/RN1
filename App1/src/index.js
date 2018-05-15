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
  ScrollView,
  FlatList,

} from 'react-native';
 import Card from './card';
 import VH from './header'
 import cardData from './card/mockData';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    /* let cardsComp = cardData.map((card)=>{
       return (
         <Card
          key={card.key}
          {...{
            soruce:card.soruce,
            content:card.content,
            time:card.time
          }}
         />
       )
     })*/
    return (
      <View style={[styles.container]}>
<VH/>
      <View style={styles.scrollView}>
        <FlatList  data={cardData}
         keyExtractor={(item)=>item.content}
          renderItem={({item})=>{
          return (
            <Card
             {...{
               soruce:item.soruce,
               content:item.content,
               time:item.time
             }}
            />
          )
        }} />

      </View>
      </View>
    );
  }
}
/*  <ScrollView    >
// contentContainerStyle={styles.scrollView}
     {cardsComp}

  </ScrollView>*/
const styles = StyleSheet.create({
  container: {
     display:'flex',
     flex:1,
     // justifyContent:'center',

  },

  title:{
    fontSize:17,
    fontWeight:'600'
  },
  scrollView:{
   // height:300,


  }




});
