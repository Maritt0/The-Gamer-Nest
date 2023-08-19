import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/Colors";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount} from "../Features/Counter/counterSlice";

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0);

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width:'40%',
        backgroundColor: colors.skyBlue,
        padding: 15,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    button: {
        padding: 10,
        backgroundColor: colors.red,
    },
    span: {
        backgroundColor: colors.red,
        width: "50%",
        padding: 10,
        textAlign: "center",
        fontSize: 14,
    },
    buttonText: {
        fontSize: 19,
        fontFamily: "Josefin",
    },
});