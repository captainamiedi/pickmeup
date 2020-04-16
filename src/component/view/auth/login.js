import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'react-native-elements';
import styles from './LoginStyles';

const login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    console.log('login', email, password);
  };
  return (
    // <View>
      <View style={styles.container}>
        {errorMessage ?
          <Text style={{color: 'red'}}>{errorMessage}</Text> : null
        }
        {/* <View style={styles.container}> */}
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
        />
        <Button
          title="Forgot Password?"
          titleStyle={{
            color: '#1B8BE0',
          }}
          type="clear"
        />
    </View>
  );
};

export default login;
