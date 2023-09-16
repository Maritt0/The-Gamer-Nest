import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../Components/OrderItem"; 

function OrderScreen() {
  
  const fulfilledCarts = useSelector(
    (state) => state.cartReducer.value.orders
  );

  return (
    <FlatList
      data={fulfilledCarts}
      keyExtractor={(order) => order.updatedAt.toString()}
      renderItem={({ item }) => <OrderItem order={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000080",
  },
});

export default OrderScreen;
