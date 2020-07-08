import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieDetailsSearch} from "../../API/MovieSearch";
import {StyleSheet, Text, View, Image} from 'react-native';
import FavouriteButton from "../_Shared/FavouriteButton";
import {getAccessToken} from "../../API/SessionInfo";

export default function MovieDetails({route, navigation}) {

  const dispatch = useDispatch();

  const {id} = route.params;

  useEffect(() => {
    movieDetailsSearch(id, dispatch);
  }, []);

  const movieInfo = useSelector(state => state.moviesListReducer);

  return(
    <View style={styles.cardContainer}>
      <Image
        source={{uri:`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}} style={styles.image}/>
      <Text>{movieInfo.title}</Text>
      <Text>{movieInfo.release_date}</Text>
      {(getAccessToken !== undefined) ? <FavouriteButton movieTitle={movieInfo.title} movieDate={movieInfo.release_date} movieId={movieInfo.id} movieOverview={movieInfo.overview} movieImagePath={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}/>  : ""}
      <Text>{movieInfo.overview}</Text>
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


