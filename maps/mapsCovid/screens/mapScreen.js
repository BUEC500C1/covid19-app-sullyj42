import React, { useState } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
  Button
} from "react-native";
// import { PROVIDER_GOOGLE, PROVIDER_DEFAULT, MapView } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import DatePicker from 'react-native-date-ranges';


const styles = StyleSheet.create({
 mapContainer: {
   //...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
  ...StyleSheet.absoluteFillObject,
  },

});


const myButton = (onConfirm) => {
  return (
    <View style={{alignItems:'flex-start'}}>
        <Button 
            title="Submit: "
            onPress={onConfirm}
        />
        </View>
    )
  }



const MapScreen = () => {
  return (
    <View style={{}}>
   <View style={styles.mapContainer}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 42,
         longitude: -70,
         latitudeDelta: 50, // Pretty good swath to see a few countries
         longitudeDelta: 50,
         mapType:'roadmap' // Covid data appears political (defined by country)
       }}
     >
     </MapView>
   </View>
   <DatePicker
    markText='Select date range:'
    buttonText='Submit'
    style={ { width: 350, height: 45, margin: 10}}
    // customStyles = { {
    //     placeholderText:{ fontSize:20 } // placeHolder style
    //     headerStyle : {  },     // title container style
    //     headerMarkTitle : { }, // title mark style 
    //     headerDateTitle: { }, // title Date style
    //     contentInput: {}, //content text container style
    //     contentText: {}, //after selected text Style
    // } } // optional 
    centerAlign={false} // optional text will align center or not
    allowFontScaling = {false} // optional
    placeholder={'Select a date-range'}
    mode={'range'}
    customButton={myButton}
    // onConfirm  Function  Optional. call function after click button
    //    return a date object {startDate:'', endDate:''} e.g( value=>console.log(value))
    />
   </View>
)};
export default MapScreen;
