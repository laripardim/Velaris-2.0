import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import Container from './pages2/container';
import Login from './pages2/login';
import Home from './pages2/home';
import Perfis from './pages2/perfis';
import Escreva from './pages2/escreva';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Escreva" component={Escreva} />
        <Stack.Screen name="Container" component={Container} />
        <Stack.Screen name="Perfis" component={Perfis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}