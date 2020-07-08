import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./redux/store";
import MoviesContainer from "./components/Movies/MoviesContainer";
import MovieDetails from "./components/Movies/MovieDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MoviesContainer" component={MoviesContainer}/>
            <Stack.Screen name="MovieDetails" component={MovieDetails}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
