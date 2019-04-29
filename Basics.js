import React, { Component } from 'react';

import { Text, View, } from 'react-native';




export default class Basics extends React.Component {

    static navigationOptions = { title: "Learn the Basics" }
  
    render() {
  
      return (<View><Text>Learn The Bacics</Text></View>)
  
    }
  
  }
  
  Greeting = (props) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
  }
  
  LotsOfGreetings = () => {
    return (
      <View style={{ alignItems: 'center', top: 50 }}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }