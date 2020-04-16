import React, { useState } from 'react';
import {
  Text,
} from 'react-native';

// import {Button} from 'react-native-elements';
import {Container, InputBox, ButtonType, ButtonText, Button, ForgetButton} from './LoginStyles';

const login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    console.log('login', email, password);
  };
  return (
    // <View>
      <Container>
        {errorMessage ?
          <Text>{errorMessage}</Text> : null
        }
        <InputBox
          // style={styles.inputBox}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          autoCapitalize="none"
        />
        <InputBox
          // style={styles.inputBox}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <ButtonType onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </ButtonType>
        <ForgetButton>
          <Text>Forget Password?</Text>
        </ForgetButton>

        <Button onPress={handleLogin}>
          <ButtonText>Signup</ButtonText>
        </Button>
    </Container>
  );
};

export default login;
