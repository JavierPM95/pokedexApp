import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addFavoritesPokemon, isFavoritePokemon, removeFavoritePokemon } from '../../api/favorite';

export default function Favorites({ id }) {
    const addFavorite = () => {
        addFavoritesPokemon(id);
        setIsFavorite(true)
    }

    const removeFavorite = () => {
        removeFavoritePokemon(id);
        setIsFavorite(false)
    }

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        (async () => {
            const isFavorite = await isFavoritePokemon(id);
            setIsFavorite(isFavorite);
        })()
    }, [])

    return (
        <Icon
            name='heart'
            color='white'
            size={20}
            solid={isFavorite}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{ marginRight: 20 }}
        />
    )
}
