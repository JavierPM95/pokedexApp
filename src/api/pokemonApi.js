import axios from 'axios'
import { POKEAPI_URL } from '../utils/config'

export const getPokemon = async (nextUrl) => {
    try {
        const url = `${POKEAPI_URL}/pokemon?limit=20&offset=0`;
        const { data } = await axios.get(nextUrl || url)
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getPokemonDetails = async (pokemonUrl) => {
    try {
        const { data } = await axios.get(pokemonUrl);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getPokemonById = async (id) => {
    try {
        const { data } = await axios.get(`${POKEAPI_URL}/pokemon/${id}`);
        return data;
    } catch (error) {
        console.error(error)
    }
}