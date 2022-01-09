import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

import Pokedex from '../screens/Pokedex'
import Favorites from '../screens/Favorites'
import Account from '../screens/Account'
// import PokemonSummaryNav from './src/navigation/PokemonSummaryNav';

const Tab = createBottomTabNavigator();

export default NavigationTab = () => {
    return (
        <Tab.Navigator initialRouteName='Pokedex' >
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarLabel: 'Favoritos',
                title: 'Favoritos',
                tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />
            }} />
            <Tab.Screen name="Pokedex" component={Pokedex} options={{
                tabBarLabel: '',
                title: '👾 Pokédex',
                tabBarIcon: () => renderPokeball(),
                // headerTransparent: true
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarLabel: 'Mi Cuenta',
                title: 'Mi Cuenta',
                tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />
            }} />
        </Tab.Navigator>
    )
}


const renderPokeball = () =>
    <Image
        source={require('../assets/pokeball.png')}
        style={{
            width: 75,
            height: 75,
            top: -15,
        }}
    />