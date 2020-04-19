import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    // How to handle text inputs with States in react
    return (
        <View>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none" // characters, sentances, word
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            /> 
            {/* There is no styling applied to text input by default */}
            <Text>My name is: "{name}"</Text>
            {name.length < 4 ? <Text>Name must be at least 4 characters ({name.length} entered)</Text> : null}

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15, 
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;