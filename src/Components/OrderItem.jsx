import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  return (
    <View style={styles.card}>
      {order.items.map((cartItem) => (
        <View key={cartItem.id}>
          <Text>Name: {cartItem.title}</Text>
          <Text>Quantity: {cartItem.quantity}</Text>
          <Text>Price: ${cartItem.price}</Text>
        </View>
      ))}
      <Text>Total: ${total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#696969",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
