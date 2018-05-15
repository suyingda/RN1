

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View  >
          <StatusBar barStyle="light-content"  />
        <View style={styles.header}>
      <View style={styles.titleWrap}>
      <Text  >
        home
      </Text>
      </View>
      <Icon name="search" size={22} color="#ccc"/>
        <TextInput
        placeholder="search"
          style={styles.input}
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{

...Platform.select({
  ios:{
    height:94,
    paddingTop:20
  },
  android:{
    height:98,
    paddingTop:24
  }
}),
      // justifyContent:'center',
backgroundColor:'#E83A59'

    },
    titleWrap:{
        alignItems:'center',
    },
    input:{
      padding:0,
        height:30,
        backgroundColor:'rgba(255,255,255,0.6)',
        marginHorizontal:8,
        borderRadius:6,
        marginTop:8,
        // fontSize:17,
        // fontWeight:'600',
        paddingHorizontal:10,


    }

});
