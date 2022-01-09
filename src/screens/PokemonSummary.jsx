import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { getPokemonById } from '../api/pokemonApi';
import Header from '../components/Pokemon/Header';
import Stats from '../components/Pokemon/Stats';
import Types from '../components/Pokemon/Types';
import Favorites from '../components/Pokemon/Favorites';

export default function PokemonSummary({ route: { params }, navigation }) {
    const { id } = params;

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Favorites id={id} />,
            // headerLeft: () => (
            //     <Icon
            //     name='arrow-left'
            //     color='#fff'
            //     size={20}
            //     onPress={navigation.goBack}
            //     />
            // )
        })
    }, [])

    useEffect(() => {
        (async () => {
            const data = await getPokemonById(id);
            setPokemon(data);
        })()
    }, [params])

    return (
        !pokemon
            ? <ActivityIndicator size='large' style={style.spinner} color='#AEAEAE' />
            : <ScrollView>
                <Header
                    id={pokemon.id}
                    name={pokemon.name}
                    order={pokemon.order}
                    type={pokemon.types.map(type => type.type.name)}
                    image={pokemon.sprites.other.home.front_default}
                />
                <Types
                    types={pokemon.types.map(type => type.type.name)}
                />
                <Stats
                    stats={pokemon.stats}
                />
            </ScrollView>
    )
}


const style = StyleSheet.create({
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})