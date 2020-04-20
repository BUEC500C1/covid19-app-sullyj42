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

const DataSettingsScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>This screen will be used to select the Geospatial covid data for display</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default DataSettingsScreen;