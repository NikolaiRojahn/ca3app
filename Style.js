import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    bigGreen: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 40,
    }
  });
  
  export default class LotsOfStyles extends Component {
    render() {
      return (
        <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigGreen]}>bigGreen only</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
      );
    }
  }