import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Route from './Route';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={Route.WELCOME_SCREEN} component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={Route.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Route.REGISTER}  component={RegisterScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;