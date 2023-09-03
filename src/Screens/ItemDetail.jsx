import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import allProducts from "../Data/products.json";
import { colors } from "../Global/Colors";
import Counter from "../Components/Counter";

const ItemDetail = ({route}) => {
  const { productId: idSelected } = route.params;

  const [product, setProduct] = useState(null);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  return (
    <View style={styles.pageContainer}>
      {product && (
        <View
          style={[
            styles.mainContainer,
            isLandscape && styles.mainContainerLandscape,
          ]}
        >
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.priceText}>${product.price}</Text>
            <Pressable
              style={styles.addButton}
              onPress={() => {
              
              }}
            >
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable>
            <Counter style={styles.Counter} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.indigo,
    justifyContent: "center",
    alignItems: "center"
  },
  mainContainer: {
    width:'auto',
    height:'auto',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.indigo,
    elevation: 5
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  image: {
    width: 398,
    height: 390,
    borderRadius: 10,
  },
  textContainer: {
    padding: 8
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8
  },
  descriptionText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 15
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 15
  },
  addButton: {
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginBottom: 15
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    border: '5px solid #000',
    borderRadius:5,
    backgroundColor: colors.black
  },
});

export default ItemDetail;
