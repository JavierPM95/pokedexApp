import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITES_POKEMON } from '../utils/constants'


export const getFavoritesPokemon = async () => {
    try {
        const favorites = await AsyncStorage.getItem(FAVORITES_POKEMON)
        return JSON.parse(favorites) || [];
    } catch (error) {
        console.error(error)
    }
}

export const addFavoritesPokemon = async (id) => {
    try {
        const favorites = await getFavoritesPokemon();
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITES_POKEMON, JSON.stringify(favorites))
    } catch (error) {
        console.error(error)
    }
}

export const removeFavoritePokemon = async (id) => {
    try {
        const favorites = await getFavoritesPokemon();
        const newFavorites = favorites.filter(actualId => actualId != id)
        await AsyncStorage.setItem(FAVORITES_POKEMON, JSON.stringify(newFavorites))
        return newFavorites
    } catch (error) {
        console.error(error)
    }
}

export const isFavoritePokemon = async (id) => {
    try {
        const favorites = await getFavoritesPokemon();
        return favorites.includes(id)
    } catch (error) {
        console.error(error)
    }
}