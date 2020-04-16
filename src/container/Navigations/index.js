import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../auth/login';

import HomeScreen from '../home';

const Stack = createStackNavigator();

const Navigation = (user) => {
  return (
    <Stack.Navigator>
      {isEmpty(user)  ? (
        <Stack.Screen name="LogIn" component={LoginScreen} options={{
          headerStyle: {
            backgroundColor: '#1B8BE0',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStatusBarHeight: 6,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>

  );
};

export default Navigation;
