import axios from "axios";
import {storeAccessToken, storeUsername} from "../SessionInfo";

export const login = (email, password) => {
  axios.post("http://localhost:8000/users/login", {email: email, password: password})
  .then((res) => {
    storeAccessToken(res.data.accessToken);
    storeUsername(res.data.username);
    console.log("login done")
  })
  .catch((e) => console.log("ERREUR LOGIN POST", e))
};
