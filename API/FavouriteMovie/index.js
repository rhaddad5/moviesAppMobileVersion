import axios from "axios";
import {fetchFavouriteMovies, fetchFavouriteMovie} from "../../redux/actions";
import {getAccessToken} from "../SessionInfo";

export const saveFavouriteMovie = async (title, releaseDate, id, overview, imagePath) => {
  const token = await getAccessToken();
  const headers = {"Authorization": `Bearer ${token}`};
  let alreadyFav = [];
  axios.get("http://localhost:8000/movies", {headers: headers})
  .then((res) => {
    res.data.forEach((movie) => {
      if(movie.tmdbId === id) {
        alreadyFav.push(true);
      }
    });
    if(alreadyFav[0]) {
      console.log("Movie already in favourites");
    } else {
      axios.post("http://localhost:8000/movies", {title: title, releaseDate: releaseDate, tmdbId: id, overview: overview, imagePath: imagePath}, {headers: headers})
      .then((res) => console.log("REPONSE POST", res))
      .catch((e) => console.log("ERREUR POST", e))
    }
  })
  .catch((e) => console.log("ERREUR GET FAV", e))
};

export const destroyFavouriteMovie = (id) => {
  axios.delete(`http://localhost:8000/movies/${id}`)
  .then((res) => console.log("REPONSE DELETE", res))
  .catch((e) => console.log("ERREUR DELETE", e))
};

export const getFavouriteMovies = async (dispatch) => {
  const token = await getAccessToken();
  const headers = {"Authorization": `Bearer ${token}`};
  axios.get("http://localhost:8000/movies", {headers: headers})
  .then((res) => {
    dispatch(fetchFavouriteMovies(res.data))
  })
  .catch((e) => console.log("ERREUR GET FAV", e))
};

// export const getFavouriteMovie = async (id, dispatch) => {
//   const token = await getAccessToken();
//   const headers = {"Authorization": `Bearer ${token}`};
//   axios.get(`http://localhost:8000/movies/${id}`, {headers: headers})
//   .then((res) => {
//     console.log("REPONSE GET MOVIE", res);
//   })
//   .catch((e) => console.log("ERREUR GET FAV", e))
// };
