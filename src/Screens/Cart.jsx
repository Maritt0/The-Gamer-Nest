import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem';

const Cart = () => {
    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
    
    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable >
                <Text style={styles.text}>
                    Confirm
                </Text>
            </Pressable>
            <Text style={styles.text}>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor:'#000080'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    },
    text:
    {
        color:'#FFFFFF'
    }
})
