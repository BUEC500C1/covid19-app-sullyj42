import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start', // Always added to parent, default stretch
        flexDirection: 'row', // Horizontal vs. vertical
        height: 100,
        //alignItems: 'center'
    },
    textOneStyle: {
        borderWidth: 2,
        padding: 2,
        borderColor: 'red',
        margin: 1,
        textAlign: 'center',
        flex: 4,
        alignSelf: 'center'
    },
    textTwoStyle: {
        borderWidth: 2,
        padding: 2,
        borderColor: 'red',
        margin: 2,
        textAlign: 'center',
        flex: 5
    },
    textThreeStyle: {
        borderWidth: 2,
        padding: 2,
        borderColor: 'red',
        margin: 2,
        textAlign: 'center',
        flex: 10
    }
});

export default BoxScreen;
