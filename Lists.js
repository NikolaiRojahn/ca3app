import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, SectionList, } from 'react-native';

class FlatListBasics extends Component {
    render() {
      return (
        <View style={flatListStyle.container}>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <Text style={flatListStyle.item}>{item.key}</Text>}
          />
        </View>
      );
    }
  }
  
  const flatListStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
  class SectionListBasics extends Component {
    render() {
      return (
        <View style={sectionListStyles.container}>
          <SectionList
            sections={[
              { title: 'D', data: ['Devin'] },
              { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
              { title: 'N', data: ['Nikolai', 'Nikoline'] },
            ]}
            renderItem={({ item }) => <Text style={sectionListStyles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={sectionListStyles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  }
  
  const sectionListStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

  export {
      FlatListBasics,
      SectionListBasics,
  }