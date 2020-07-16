import React, {useState} from "react";
import {moviesListSearch} from "../../API/MovieSearch";
import {useDispatch} from "react-redux";
import {View, TextInput, StyleSheet, Button} from "react-native";

export default function SearchInput() {

  const [query, setQuery] = useState("");

  const handleChange = (value) => {
    setQuery(value);
  };

  const dispatch = useDispatch();

  const searchMovies = () => {
    moviesListSearch(query, dispatch);
  };

  return(
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={query}
          onChangeText={handleChange}
          color="white"
        />
      </View>
      <Button
        onPress={searchMovies}
        title="Search"
        color="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    paddingLeft: 7
  },
})
