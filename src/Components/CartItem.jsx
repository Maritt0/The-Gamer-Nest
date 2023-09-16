import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/Colors";

const CartItem = ({ cartItem }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => {
            // Handle the tap event here
        }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: '#696969',
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: '#f0ffff',
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: '#f0ffff',
    },
});

export default CartItem;
