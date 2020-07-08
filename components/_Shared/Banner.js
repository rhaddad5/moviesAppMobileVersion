import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import SearchInput from "./SearchInput";

export default function Banner() {
  return(
    <View>
      <ImageBackground source={require("../../assets/images/movieBanner.jpg")} style={styles.image}>
        <Text style={styles.bannerTitle}>Your own movie database</Text>
        <Text style={styles.bannerText}>Find all your favourite movies and save them not to forget them ever again</Text>
        <SearchInput/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 450,
    height: 350,
    paddingVertical: 100,
    paddingHorizontal: 40,
    },
  bannerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    margin: 0,
  },
  bannerText: {
    color: "#ececec",
    opacity: 0.7,
    fontSize: 15,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
})
