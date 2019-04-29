import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

let url = "https://www.joergoertel.com/Week-13-CA3/api/info/starwars-characters";

export default class starwars extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
            ;
    }

    async componentDidMount() {
        let res = await fetch(url)
        let data = await res.json()
        newData = data.map(e => JSON.parse(e));
        promiseList = newData.map(e => this.getHomeworld(e));
        Promise.all(promiseList).then(data => {
            this.setState({ data: data })
        })
    }

    getHomeworld = (starPerson) => {
        return new Promise(async (resolve, reject) => {
            let response = await fetch(starPerson.homeworld)
            let homeworldData = await response.json()
            starPerson.homeworldName = homeworldData.name
            resolve(starPerson)
        })
    }

    render() {
        if (!this.state.data) {
            return null
        }
        return (
            <View style={flatListStyle.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={flatListStyle.item}>{item.name}, {item.gender}, Planet: {item.homeworldName}</Text>}
                />
            </View>
        );
    }

}


var flatListStyle = StyleSheet.create({
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
