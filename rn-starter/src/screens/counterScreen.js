import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
    // state: value (number)
    // -- countvalue: integer
    // action: How should we change our state object
    // -- + 1, -1
    // console.log(action.type)
    // console.log(action.amount)
    switch (action.type) {
        case "Increase":
            // console.log('Trying to increase')
            return { ...state, countValue: state.countValue + action.amount };
        case "Decrease":
            return { ...state, countValue: state.countValue - action.amount };
        default:
            return state;
    }
};
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { countValue:0 });
    return (
        <View>
        <Button 
            title="Increase"
            onPress={() => {
                dispatch({ type: "Increase", amount: 1 });
            }}
        />
        <Button 
            title="Decrease"
            onPress={() => {
                dispatch({ type: "Decrease", amount: 1 });
            }}
        />
        <Text></Text>
        <Text style={styles.headline}>Current Count: {state.countValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        fontSize: 10
    }, 
    headline: {
        textAlign: 'center', // <-- the magic
        // fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5,
        //width: 200,
        backgroundColor: 'white',
        textAlign: 'center'
  }
});

export default CounterScreen;