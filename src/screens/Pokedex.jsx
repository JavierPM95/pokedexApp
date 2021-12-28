import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemon, getPokemonDetails } from '../api/pokemonApi'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

    const [pokemonList, setPokemonList] = useState([])
    const [nextUrl, setNextUrl] = useState('')

    useEffect(() => {
        (async () => {
            await getPokemonList();
        })()

    }, [])

    const getPokemonList = async () => {
        const { results, next } = await getPokemon(nextUrl);
        setNextUrl(next)

        const pokemonArray = [];
        for await (const result of results) {
            const { url } = result;
            const { id, name, order, types, sprites } = await getPokemonDetails(url);
            pokemonArray.push({
                id,
                name,
                order,
                type: types.map(type => type.type.name),
                image: sprites.other.home.front_default,
            });
        }
        setPokemonList([...pokemonList, ...pokemonArray]);
    }

    return (
        <SafeAreaView>
            <PokemonList
                pokemonList={pokemonList}
                getPokemonList={getPokemonList}
                isNext={nextUrl}
            />
        </SafeAreaView>
    )
}
