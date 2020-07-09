import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Provider} from "react-redux";
import store from "./redux/store";
import MoviesContainer from "./components/Movies/MoviesContainer";
import MovieDetails from "./components/Movies/MovieDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Signup" component={Signup}/>
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="MoviesContainer" component={MoviesContainer}/>
            <Tab.Screen name="MovieDetails" component={MovieDetails}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
