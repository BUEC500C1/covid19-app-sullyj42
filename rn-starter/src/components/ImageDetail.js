import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props)
    return ( 
        <View>
            <Image source={props.imagefile}/>
            <Text>Title: {props.title}</Text>
            <Text>Image Score: {props.imagescore}</Text>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;