import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease, colval }) => {
    return (
        <View>
            <Text> {color}: {colval} </Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
            <Text> </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
