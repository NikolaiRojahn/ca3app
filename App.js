import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ButtonBasics from './Touches';
import Basics from './Basics';
import Props from './Props';
import { StateDemo, BlinkApp } from './State';
import LotsOfStyles from './Style';
import PizzaTranslator from './TextInput';
import { FlatListBasics, SectionListBasics } from './Lists';
import starwars from './StarWars';

const Touchable = (props) => (

  <TouchableOpacity style={styling.button} onPress={props.onPress}>

    <Text style={styling.buttonText}>{props.title}</Text>

  </TouchableOpacity>)


class HomeScreen extends Component {

  static navigationOptions = { title: 'Day1 Tutorial'};

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styling.homePage}>
        <View style={styling.homePage}>

          <Text style={styling.homePage}>Demo's implemented by Nikolai</Text>
          <Touchable onPress={() => navigate('basics')} title="Very basic" />
          <Touchable onPress={() => navigate('props')} title="Props" />
          <Touchable onPress={() => navigate('state')} title="Second counter" />
          <Touchable onPress={() => navigate('textblink')} title="Blinking text" />
          <Touchable onPress={() => navigate('styles')} title="Multiple text stylings" />
          <Touchable onPress={() => navigate('pizzatranslator')} title="Pizza translator" />
          <Touchable onPress={() => navigate('buttonbasic')} title="Button basics" />
          <Touchable onPress={() => navigate('flatlist')} title="FlatList" />
          <Touchable onPress={() => navigate('sectionlist')} title="SectionList" />
          <Touchable onPress={() => navigate('starwars')} title="Search Star Wars actor" />

        </View>
      </ScrollView>
    )

  }

}

const RouteStack = createStackNavigator({

  Home: { screen: HomeScreen },

  basics: { screen: Basics },

  props: { screen: Props },

  state: { screen: StateDemo },

  textblink: { screen: BlinkApp },

  styles: { screen: LotsOfStyles },

  pizzatranslator: { screen: PizzaTranslator },

  buttonbasic: { screen: ButtonBasics },

  flatlist: { screen: FlatListBasics },

  sectionlist: { screen: SectionListBasics },

  starwars: { screen: starwars}
});



const Route = createAppContainer(RouteStack);


const styling = StyleSheet.create({

  button: {

    margin: 3,

    alignItems: 'center',

    backgroundColor: '#2196F3'

  },

  buttonText: {

    padding: 7,

    fontSize: 18,

    fontWeight: "bold",

    color: 'white'

  },
  
  homePage: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }

});

export default Route;



