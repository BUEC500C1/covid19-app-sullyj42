import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import jhcovid from '../api/jhcovid'
const popData = require('../../country-json/src/country-by-population.json');


const ResultsShowScreen = ( { navigation } ) => {
    // const [result, setResult] = useState(null); // Expect a single object (from yelp)
    const id = navigation.getParam('id');
    const result = navigation.getParam('result');

    // const getResult = async (id) => {
    //     const response = await jhcovid.get('/summary') //(`/${id}`)
    //     setResult(response.data);
    // }
    // console.log(result);

    // useEffect(() => {
    //     getResult(id);
    // }, []);

    if (!result) { // If result was not assigned, punt
        console.log('Result empty')
        return null;
    }
    // console.log(result)
    return (
        <View style={{flex: 1}}>
            <Text style={styles.text}>Test: {result.Country}</Text>
            {/*
            // <FlatList
            //     data={result.Country}
            //     keyExtractor={(Country) => Country}
            //     // renderItem={({ item }) => {
            //     //     return <Image 
            //     //         style={styles.image}
            //     //         source={{ uri: item}} 
            //     //     />
            //     // }}
            // />
            */}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200, 
        width: 200,
        padding:20,
        margin:10,
        borderRadius: 8,

    },
    text: {
        margin:10
    }
});

export default ResultsShowScreen;
