import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setGenreSelected } from '../Features/Shop/shopSlice'

const GenreItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelectGenre = () => {
    dispatch(setGenreSelected(item))
    navigation.navigate('ItemListGenre', {genre: item})
  }
  return (
    <View style = {{width: width, alignItems: 'center'}}>
      <Pressable
        onPress={onSelectGenre}
      >
        <Card
          additionalStyle={styles.additionalStyle}
        >
            <Text style={styles.textGenre}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default GenreItem

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
    },
    textGenre: {
        fontSize: 18
    },
    additionalStyle: {
      borderRadius: 15
    }
})