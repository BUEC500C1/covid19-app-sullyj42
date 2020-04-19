import React, { useReducer } from "react";
// Use Reducer or a State, not both

import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/colorCounter";

const COLOR_INCREMENT = 10;

const rgbClipp = (testVal) => {
    if (testVal > 255) {
        outval = 255;
        return outval;
    } else if (testVal < 0) {
        outval = 0;
        return outval;
    } else {
        return testVal;
    }
};

const reducer = (state, action) => {
    // state: red, green, blue
    // -- , {red: (int), green: (int), blue: (int)})
    // action: How should we change our state object
    switch (action.colorToChange) {
        case "red":
            return { ...state, red: rgbClipp(state.red + action.amount) };
        case "green":
            return { ...state, green: rgbClipp(state.green + action.amount) };
        case "blue":
            return { ...state, blue: rgbClipp(state.blue + action.amount) };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                colval={red}
                onIncrease={() =>
                    dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "red",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="Red"
            />
            <ColorCounter
                colval={green}
                onIncrease={() =>
                    dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "green",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="Green"
            />
            <ColorCounter
                colval={blue}
                onIncrease={() =>
                    dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
                } // setColor('blue',    COLOR_INCREMENT)}
                onDecrease={() =>
                    dispatch({
                        colorToChange: "blue",
                        amount: -1 * COLOR_INCREMENT,
                    })
                } // setColor('blue', -1*COLOR_INCREMENT)}
                color="Blue"
            />
            <Text> Color: {`rgb(${red}, ${green}, ${blue})`}</Text>
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
