import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="beach" 
                imagefile={require("../../assets/beach.jpg")}
                imagescore={7}
            />
            <ImageDetail 
                title="forest" 
                imagefile={require("../../assets/forest.jpg")}
                imagescore={5}
            />
            <ImageDetail 
                title="mountain" 
                imagefile={require("../../assets/mountain.jpg")}
                imagescore={4}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
