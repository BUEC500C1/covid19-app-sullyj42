import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = 'Jeremiah Sullivan' //'Bye there'
    return (
    <View>
        <Text style={styles.headerTextStyle}>Getting started with React Native</Text>
        <Text style={styles.subHeaderTextStyle}>Here is my name {greeting} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize: 45,
    },
    subHeaderTextStyle: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
