import React,{Component} from "react";

import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {TabNavigator,TabBarTop} from 'react-navigation';

import Hotest from './component/Addm';
 function Newest(){
   return(
     <View>
      <Text>
      Newest page</Text>
     </View>
   )
 }

export default TabNavigator({
  Hotest:{
    screen:Hotest
  },
  Newest:{
      screen:Newest
  }
},{
  tabBarComponent:TabBarTop,
  tabBarPosition:'top',
  animationEnabled:true,
  swipeEnabled:true,
  tabBarOptions:{
    activeTintColor:'#EC4d3d',
    inactiveTintColor:'#EC4d3d',
    labelStyle:{
        fontWeight:'800'
    },
    indicatorStyle:{
      height:4,
      backgroundColor:'#ec4d3d'
    },
    style:{
      backgroundColor:'#fff'
    }
  }
})
