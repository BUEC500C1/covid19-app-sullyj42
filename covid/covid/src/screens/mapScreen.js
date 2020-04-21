import React, { useState } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
  Button,
  Image,
} from "react-native";
// import { PROVIDER_GOOGLE, PROVIDER_DEFAULT, MapView } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import DatePicker from "react-native-date-ranges";

const IMAGE_SIZE = 64


const styles = StyleSheet.create({
  mapContainer: {
    //...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    height: IMAGE_SIZE, 
    width: IMAGE_SIZE,
    padding:20,
    margin:10,
    borderRadius: 8,
    },
});

const myButton = (onConfirm) => {
  return (
    <View style={{ alignItems: "flex-start" }}>
      <Button title="Submit: " onPress={onConfirm} />
    </View>
  );
};

var markers = [
  {
    coordinate: {
      latitude: 37.0902,
      longitude: -95.7129
    },
    title: "United States",
    subtitle: "Subtitle data",
    abb: "US",
  }, 
  {
    coordinate: {
      latitude: 60.0902,
      longitude: -95.7129
    },
    title: "Canada",
    subtitle: "Subtitle data",
    abb: "CA",
  }
]

const MapScreen = () => {
  return (
    <View style={{}}>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 42,
            longitude: 40,
            latitudeDelta: 90, // Pretty good swath to see a few countries
            longitudeDelta: 180,
          }}
        >
        {markers[0] != null && markers.map((marker, index) => (
              <Marker
                  key = {index}
                  coordinate = {marker.coordinate}
                  title = { marker.title }
                  description={marker.subtitle}
                  anchor={{ x: 0.5, y: 0.5 }}
              >
              <Image
                style={styles.image}
                source={{ uri: `https://www.countryflags.io/${marker.abb}/shiny/${IMAGE_SIZE}.png`}} 
              />
              </Marker>
          ))

         }
            
        </MapView>
      </View>
      <DatePicker
        markText="Select date range:"
        buttonText="Submit"
        style={{ width: 350, height: 45, margin: 10 }}
        // customStyles = { {
        //     placeholderText:{ fontSize:20 } // placeHolder style
        //     headerStyle : {  },     // title container style
        //     headerMarkTitle : { }, // title mark style
        //     headerDateTitle: { }, // title Date style
        //     contentInput: {}, //content text container style
        //     contentText: {}, //after selected text Style
        // } } // optional
        centerAlign={false} // optional text will align center or not
        allowFontScaling={false} // optional
        placeholder={"Select a date-range"}
        mode={"range"}
        customButton={myButton}
        // onConfirm  Function  Optional. call function after click button
        //    return a date object {startDate:'', endDate:''} e.g( value=>console.log(value))
      />
    </View>
  );
};
export default MapScreen;
