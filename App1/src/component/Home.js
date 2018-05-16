

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  ActivityIndicator,


ScrollView,
RefreshControl
} from 'react-native';

  import Card from './../card';
  import cardData from './../card/mockData';

export default class Home extends Component {
  constructor(arg){
    super(arg);
    this.state={
        listRefreshing:false,
        scrollRefreshing:false,
        horizontal:false,
      }
  }

 //  _onEndReached = () => {
 //   this.setState((state) => ({
 //     data: state.data.concat(genItemData(100, state.data.length)),
 //   }));
 // };
 _footer = () => {
      // return <Text style={[styles.txt,{backgroundColor:'#ccc'}]}>这是尾部</Text>;
      return (
        <ActivityIndicator
    animating={true}
    color='red'
    size="large"
/>
      )
  }
  _onload(){
    let timer =  setTimeout(()=>{
        clearTimeout(timer)
        alert('加载成功')
    },1500)
}
 componentWillUnmount(){

 }
  render() {
    let {navigate } =this.props.navigation;
    return (
      <View style={styles.scrollView}>
        <Text onPress={()=> navigate('More',{name:'More'})}>jump more page</Text>
        <ScrollView
refreshControl={
  <RefreshControl refreshing={this.state.scrollRefreshing} onRefresh={()=>{
    this.setState({
      scrollRefreshing:true
    });
    setTimeout(()=>{
      this.setState({
        scrollRefreshing:false
      })
    },1500)
  }}/>
}
>
            <Text>ScrollView</Text>
            <Text>ScrollView</Text>
            <Text>ScrollView</Text>
            <Text>ScrollView</Text>
            <Text>ScrollView</Text>
            <Text>ScrollView</Text>
        </ScrollView>
        <FlatList style={styles.H}
          data={cardData}
          // refreshing={this.state.listRefreshing}
          refreshing={false}
           legacyImplementation={false}
 ListFooterComponent={this._footer}
 onEndReached={()=>this._onload()}
 
       onEndReachedThreshold={0}
          onRefresh={()=>{
            this.setState({
              listRefreshing:true
            });
            setTimeout(()=>{
              this.setState({
                listRefreshing:false
              })
            },1500)
          }}
         keyExtractor={(item)=>item.content}
          renderItem={({item})=>{
          return (
            <Card
             {...{
               // soruce:item.soruce,
               content:item.content,
               time:item.time
             }}
            />
          )
        }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  H:{
    height:300
  }
});
