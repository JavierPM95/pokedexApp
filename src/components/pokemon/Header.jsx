import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { capitalize } from 'lodash';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

export default function Header({ id, name, order, type, image }) {
    const bgColorType = getColorByPokemonType(type[0]);
    const bgStyles = { ...style.bgCard, backgroundColor: bgColorType }

    return (
        <>
            <View style={bgStyles} />
            <SafeAreaView style={style.content}>
                <View style={style.header}>
                    <Text style={style.name} >{capitalize(name)}</Text>
                    <Text style={style.id} >#{id}</Text>
                </View>
                <View style={style.contentImage}>
                    <Image style={style.image} source={{ uri: image }} />
                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    bgCard: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 100
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 36,
    },
    id: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300
    }
})