import React, {useState} from "react";
import {signup} from "../../API/Signup";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";

export default function Login() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (value) => {
    setUsername(value);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const createUser = () => {
    signup(username, email, password);
  };

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeUsername}
        value={username}
        placeholder={'Username'}
      />
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
        onPress={createUser}
        title="Signup"
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

