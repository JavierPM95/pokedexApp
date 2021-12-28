import { POKEMON_TYPE_COLORS } from './constants';

export const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];