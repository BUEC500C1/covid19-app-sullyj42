import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(navigation);
  return (
    <View>
        <Text style={styles.text}>Hi there! Homescreen</Text>
        <Button 
            title="Go to Components Demo"
            onPress={() => navigation.navigate('Components')}
        />
        <Text></Text>
        <Button 
            title="Go to Image Demo"
            onPress={() => navigation.navigate('Images')}
        />
        <Button 
            title="Go to Counter Demo"
            onPress={() => navigation.navigate('Counter')}
        />
         <Button 
            title="Go to Color Demo"
            onPress={() => navigation.navigate('Color')}
        />
         <Button 
            title="Go to Square Demo"
            onPress={() => navigation.navigate('Square')}
        />
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
            <Text style={styles.text}>Go to ListScreen Demo</Text>
            <Text>Go to ListScreen Demo</Text>

        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
