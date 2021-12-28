import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import { getColorByPokemonType } from '../utils/getColorByPokemonType';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';
// import { capitalize } from '../utils/helperFunctions';


export default function PokemonCard({ pokemon }) {
    const { id, name, order, type, image } = pokemon;

    const navigation = useNavigation();

    const bgColorType = getColorByPokemonType(type[0])
    const bgStyles = { ...style.bgCard, backgroundColor: bgColorType }

    const goToPokemonSummary = () =>
        navigation.navigate('PokemonSummary', { id })

    return (
        <TouchableWithoutFeedback onPress={goToPokemonSummary}>
            <View style={style.card}>
                <View style={style.spacing}>
                    <View style={bgStyles}>
                        <Text style={style.number}>#{id}</Text>
                        <Text style={style.name}>{capitalize(name)}</Text>
                        <Image style={style.image} source={{ uri: image }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const style = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgCard: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    }
})