import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './pages/routes';
//import { Amplify } from 'aws-amplify'
//import awsconfig from './src/aws-exports'

const Stack = createStackNavigator();

//Amplify.configure(awsconfig)
const App = () => {
    return (
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}

export default App;


