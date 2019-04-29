import React, { Component } from 'react';

import {View, StyleSheet, Button, Alert, } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    render() {
      return (
        <View style={buttonStyles.container}>
          <View style={buttonStyles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={buttonStyles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={buttonStyles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />
          </View>
        </View>
      );
    }
  }
  
  const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
  