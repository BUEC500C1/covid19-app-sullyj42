import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    // console.log(colors);
    return (
        <View>
            <Button 
                title="Add a Color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />

            <FlatList
                data={colors}
                keyExtractor={item => item} // Probably unique
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item}} />
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.round(Math.random() * 255); // Random number from 0-1
    const green = Math.round(Math.random() * 255); // Random number from 0-1
    const blue = Math.round(Math.random() * 255); // Random number from 0-1

    return `rgb(${red}, ${green}, ${blue})`; // Template string
};
const styles = StyleSheet.create({});

export default ColorScreen;
