import { colors } from "../Global/Colors";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice";

const ItemDetail = ({ 
  navigation,
  route
}) => {

  const {productId: idSelected} = route.params

  const dispatch = useDispatch()

  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
      if (width > height) setOrientation("landscape");
      else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
      //Encontrar el producto por su id
      const productSelected = allProducts.find(
          (product) => product.id === idSelected
          );
      setProduct(productSelected);
  }, [idSelected]);

  const onAddCart = () => {
      dispatch(addCartItem({
          ...product,
          quantity: 1
      }))
  }
        

  return (
      <View>
          {product ? (
              <View
                  style={
                      orientation === "portrait"
                          ? styles.mainContainer
                          : styles.mainContainerLandscape
                  }
              >
                  <Image
                      source={{ uri: product.images[0] }}
                      style={styles.image}
                      resizeMode="cover"
                  />
                  <View style={styles.textContainer}>
                      <Text style = {styles.text1}>{product.title}</Text>
                      <Text style = {styles.text2}>{product.description}</Text>
                      <Text style = {styles.text3}>${product.price}</Text>
                      <Button title="Add cart"
                          onPress={onAddCart}
                      ></Button>
                  </View>
              </View>
          ) : null}
      </View>
  );
};



const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainContainer: {
    width:'auto',
    height:'auto',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
    elevation: 5,
    backgroundColor: colors.indigo
  },
    mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: 398,
    height: 390,
    borderRadius: 10,
  },
  textContainer: {
    padding:12,
    display: 'flex', 
  },
  buttonATC: {
    backgroundColor: colors.blue,
  },
  text1: {
    color: colors.white,
    fontSize: 17,
  },
  text2: {
    color: colors.white,
    padding: 5
  },
  text3: {
    color: colors.white,
    padding: 2
  }
});
export default ItemDetail;
