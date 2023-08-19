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

const ItemDetail = ({ navigation, route }) => {
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
                // Handle add to cart logic
              }}
            >
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable>
            <Counter />
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
    alignItems: "center",
  },
  mainContainer: {
    width:'90%',
    height:'80%',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: 400,
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 15,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 15,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default ItemDetail;
