import React, {useState} from "react";
import {View} from "react-native";
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {saveFavouriteMovie} from "../../API/FavouriteMovie";
import {destroyFavouriteMovie} from "../../API/FavouriteMovie";

library.add(fasStar, farStar);

export default function FavouriteButton({movieTitle, movieDate, movieId, movieOverview, movieImagePath}) {

  const [fav, setFav] = useState(false);

  const toggleFavStatus = () => {
    setFav(!fav);
    if(!fav) {
      saveFavouriteMovie(movieTitle, movieDate, movieId, movieOverview, movieImagePath);
    } else {
      destroyFavouriteMovie(movieId);
    }
  };

  return(
    <View>
    {fav ? <FontAwesomeIcon icon={fasStar} onClick={toggleFavStatus}/> : <FontAwesomeIcon icon={farStar} onClick={toggleFavStatus}/>}
    </View>
  )
}
