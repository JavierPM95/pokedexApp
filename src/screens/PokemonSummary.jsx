import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { getPokemonById } from '../api/pokemonApi';
import Header from '../components/pokemon/Header';

export default function PokemonSummary({ route: { params }, navigation }) {
    const { id } = params;

    const [pokemon, setPokemon] = useState(null);

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
            </ScrollView>
    )
}


const style = StyleSheet.create({
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})