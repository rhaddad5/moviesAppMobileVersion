import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Provider} from "react-redux";
import store from "./redux/store";
import MoviesContainer from "./components/Movies/MoviesContainer";
import MovieDetails from "./components/Movies/MovieDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import FavouriteMovies from "./components/Movies/FavouriteMovies";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getAccessToken, getUsername} from "./API/SessionInfo";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoggedIn() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MoviesContainer" component={MoviesContainer}/>
      <Tab.Screen name="FavouriteMovies" component={FavouriteMovies}/>
      <Tab.Screen name="Logout" component={Logout}/>
    </Tab.Navigator>
  );
}

export default function App() {
  if((getAccessToken() !== undefined) && (getUsername() !== undefined)) {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="LoggedIn" component={LoggedIn}/>
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="MovieDetails" component={MovieDetails}/>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="LoggedIn" component={LoggedIn}/>
              <Stack.Screen name="Signup" component={Signup}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="MovieDetails" component={MovieDetails}/>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
