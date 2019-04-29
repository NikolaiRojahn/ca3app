import React, { Component } from 'react';
import { Text, View,} from 'react-native';


class CountDemo extends Component {
    constructor() {
      super();
      this.state = { count: 1 }
      setInterval(() => {
        let count = this.state.count;
        count++;
        this.setState({ count })
      }, 1000);
    }
    render() {
      return (
        <View>
          <Text style={{ fontSize: 40 }} > {this.state.count}</Text>
        </View>
      )
    }
  };
  
  class StateDemo extends Component {
  
    static navigationOptions = { title: "Learn about State" }
  
    render() {
  
      return (
        <CountDemo />
      )
  
    }
  
  }

  class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = { isShowingText: true };
  
      // Toggle the state every second
      setInterval(() => (
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      ), 1000);
    }
  
    render() {
      if (!this.state.isShowingText) {
        return null;
      }
  
      return (
        <Text>{this.props.text}</Text>
      );
    }
  }

  class BlinkApp extends Component {
    render() {
      return (
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
      );
    }
  }

  export {
      StateDemo,
      BlinkApp,
  }