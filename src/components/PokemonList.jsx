import React from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonList, getPokemonList, isNext }) {

    const loadMore = () => getPokemonList()

    return (
        <FlatList
            data={pokemonList}
            keyExtractor={({ id }) => String(id)}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={style.flatListStyle}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator size='large' style={style.spinner} color='#AEAEAE' />
                )
            }
        />
    )
}


const style = StyleSheet.create({
    flatListStyle: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})