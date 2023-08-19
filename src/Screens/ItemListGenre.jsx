import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByGenreQuery } from '../Services/shopServices'

const ItemListGenre = ({
  navigation,
  route
}) => {

  const {genre} = route.params
  const genreSelected = useSelector (state => state.shopReducer.value.genreSelected)
  const {data: productsSelected, isError, isLoading} = useGetProductsByGenreQuery(genreSelected)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    if (productsSelected) {
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }
  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
              item={item}
              navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListGenre

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'#006400',
        alignItems: 'center'
    }
})



