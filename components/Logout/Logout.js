import React, {useEffect} from "react";
import {removeAccessToken, removeUsername, clearAsyncStorage} from "../../API/SessionInfo";

export default function Logout({navigation}) {

  useEffect(() => {
    clearAsyncStorage()
    navigation.navigate("Home");
  }, []);

  return(
    null
  )
}
