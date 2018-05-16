

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,

} from 'react-native';



export default class Header extends Component {
  render() {
    let {navigate}= this.props.navigation;
    return (
        <View><Text onPress={()=>navigate('Home')}>More page</Text></View>
    );
  }
}

const styles = StyleSheet.create({


});
