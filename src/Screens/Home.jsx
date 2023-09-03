import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import GenreItem from '../Components/GenreItem'
import { colors } from '../Global/Colors'
import { useGetGenresQuery } from '../Services/shopServices'

const Home = ({
  navigation
}) => {
  const {data: genres, isLoading, isError} = useGetGenresQuery()

  console.log(isLoading)
  console.log(isError);
  console.log(genres);
  
  return (
    <View style={styles.container}>
        <FlatList
            data = {genres}
            keyExtractor={genre => genre}
            renderItem={({item}) => <GenreItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000080',
    paddingTop: 40,
    alignItems: 'center',   
  },
});
