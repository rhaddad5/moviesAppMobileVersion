import React, {useState} from "react";
import {login} from "../../API/Login";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import {getAccessToken, getUsername} from "../../API/SessionInfo";

export default function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const loginUser = () => {
    login(email, password);
    if((getAccessToken() !== undefined) && (getUsername() !== undefined)) {
      navigation.navigate("LoggedIn");
    }
  };

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeEmail}
        value={email}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangePassword}
        value={password}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <Button
        onPress={loginUser}
        title="Login"
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

