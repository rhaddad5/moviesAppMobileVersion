import React from "react";
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from "react-native";
import MovieDetails from "./MovieDetails";

export default function MoviesList({movies, navigation}) {

  const _renderMovie = ({item}) => {

    return(
      <TouchableOpacity
        onPress={() => {navigation.navigate("MovieDetails", {
              id: item.id
            })}}
      >
      <View style={styles.cardContainer}>
        <Image
          source={{uri:`https://image.tmdb.org/t/p/original/${item.poster_path}`}} style={styles.image}/>
        <Text>{item.title}</Text>
        <Text>{item.release_date}</Text>
        <Text>{item.overview}</Text>
      </View>
      </TouchableOpacity>
    )
  };

  return(
    <View>
      <FlatList
        data={movies}
        renderItem={_renderMovie}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
  }
})
