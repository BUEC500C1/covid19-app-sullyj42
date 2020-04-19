import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
    // state: value (number)
    // -- countvalue: integer
    // action: How should we change our state object
    // -- + 1, -1
    switch (action.type) {
        case "increase":
            return { ...state, countvalue: state.countvalue + 1 };
        case "decrease":
            return { ...state, countvalue: state.countvalue - 1 };
        default:
            return state;
    }
};
const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
        <Button 
            title="Increase"
            onPress={() => {
                setCounter(counter + 1);
            }}
        />
        <Button 
            title="Decrease"
            onPress={() => {
                setCounter(counter - 1);
            }}
        />
        <Text></Text>
        <Text style={styles.textStyle}>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        fontSize: 10
    }
});

export default CounterScreen;