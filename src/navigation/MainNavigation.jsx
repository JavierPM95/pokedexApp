import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonSummary from '../screens/PokemonSummary';
import NavigationTab from './NavigationTab';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='NavigationTab' component={NavigationTab} options={{ headerShown: false }} />
            <Stack.Screen name='PokemonSummary' component={PokemonSummary} options={{ title: '', headerTransparent: true }} />
        </Stack.Navigator>
    )
}
