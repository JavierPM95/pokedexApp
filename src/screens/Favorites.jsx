import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { getFavoritesPokemon } from '../api/favorite'
import { getPokemonById } from '../api/pokemonApi';
import PokemonList from '../components/PokemonList';

export default function Favorites() {

    const [favorites, setFavorites] = useState([])

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const favoritesPokemon = await getFavoritesPokemon()
                const pokemonArray = [];
                for await (const favoriteId of favoritesPokemon) {
                    const { id, name, order, types, sprites } = await getPokemonById(favoriteId)
                    pokemonArray.push({
                        id,
                        name,
                        order,
                        type: types.map(type => type.type.name),
                        image: sprites.other.home.front_default,
                    });
                }
                setFavorites([...favorites, ...pokemonArray]);
            })()
        }, [])
    )

    return (
        <View>
            <PokemonList
                pokemonList={favorites}
            />
        </View>
    )
}
