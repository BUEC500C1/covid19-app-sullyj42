import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri: result.image_url }} 
            />
            <Text style={styles.name}>
                {result.name}
            </Text>
            <Text style={styles.rating}>
                {result.rating} {String.fromCharCode(9733)}, ({result.review_count})
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    image: {
        width: 250,
        height:120,
        borderRadius: 8,
        marginLeft: 10

    },
    name: {
        padding: 1,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    rating: {
        marginLeft: 10
    }
});

export default ResultsDetail;
