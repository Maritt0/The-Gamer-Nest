import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { usePostCartMutation } from "../Services/shopServices";
import { Entypo } from "@expo/vector-icons";
import { removeCartItem, saveOrder } from "../Features/Cart/cartSlice";
import CartItem from "../Components/CartItem";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { items: CartData, total, updatedAt, user } = useSelector(
    (state) => state.cartReducer.value
  );
  const [triggerPostCart, result] = usePostCartMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onConfirm = () => {
    dispatch(saveOrder({ items: CartData, total, user, updatedAt }));
    triggerPostCart({ items: CartData, total, user, updatedAt });
    // Optionally, clear the cart or handle any other necessary logic
  };
  

  const onDeleteItem = (itemId) => {
    dispatch(removeCartItem({ id: itemId, quantity: 1 }));
  };

  const onClearCart = () => {
    CartData.forEach((item) => {
      dispatch(removeCartItem({ id: item.id, quantity: item.quantity }));
    });
  };

  console.log(result);

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return (
            <CartItem
              cartItem={item}
              onDelete={() => onDeleteItem(item.id)} // Pass itemId as payload
            />
          );
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirm}>
          <Text>Confirm</Text>
        </Pressable>
        <Pressable onPress={onClearCart}>
          <Entypo name="trash" size={30} color="black" />
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#000080',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  Text: {
    color: '#FFFFFF',
  },
  icon: {},
}); 
