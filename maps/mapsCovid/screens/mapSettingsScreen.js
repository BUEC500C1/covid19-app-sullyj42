import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
} from 'react-native';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>Test Map Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default MapScreen;