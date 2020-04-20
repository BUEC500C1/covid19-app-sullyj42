import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp'
const ResultsShowScreen = ( { navigation } ) => {
    const [result, setResult] = useState(null); // Expect a single object
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }
    console.log(result);

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) { // If result was not assigned, punt
        return null;
    }
    return (
        <View style={{flex: 1}}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image 
                        style={styles.image}
                        source={{ uri: item}} 
                    />
                }}
            />
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
