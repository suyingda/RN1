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
  Image
} from 'react-native';


export default class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
  let {soruce,content,time} =this.props;
    return (
      <View style={[styles.box]}>
        <View style={styles.avatarWrap}>
        <Image
             source={{url:'https://study.miaov.com/img/pc/study/code2.png'}}

            style ={styles.avatar}
            />
        </View>
        <View style={styles.content}>
          <Text style={styles.summary} numberOfLines={3}  ellipsizeMode="tail">
       {content} 
     </Text>
          <Text style={styles.time}>
        {time}
          </Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    marginBottom:18,
       flexDirection:'row',
       // alignItems:'flex-start',
       backgroundColor:'#fff',
       marginHorizontal:20,
       paddingHorizontal:16,
       paddingVertical:16,
       shadowColor:'#4f51a3',
       shadowOpacity:0.14,
       shadowOffset:{width:0,height:4},
       shadowRadius:8,
       borderRadius:8,
       elevation:3,   //   Compatible shadow
  },
  avatarWrap:{
    marginRight:18
  },
  avatar:{
    width:45,
    height:45,
    borderRadius:45/2
  },
  content:{
     flex:1,
  },
  summary:{
    fontSize:16,
    lineHeight:22,
    fontWeight:'600',
    color:'#384337'
  },
  time:{
      marginTop:10,
      color:'#a3adb4'
  }
});
