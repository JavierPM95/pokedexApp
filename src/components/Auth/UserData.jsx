import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useCallback } from 'react/cjs/react.development';
import { getFavoritesPokemon } from '../../api/favorite';
import useAuth from '../../Hooks/useAuth';

export default function UserData() {
    const { auth, logout } = useAuth();
    const [totalFavorites, setTotalFavorites] = useState(0)


    useFocusEffect(
        useCallback(() => {
            (async () => {
                const favorites = await getFavoritesPokemon()
                setTotalFavorites(favorites.length)
            })()
        }, [],
        )
    )

    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido,</Text>
                <Text style={styles.title}>{`${auth.firstName} ${auth.lastName} 👋`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
                <ItemMenu title='Nombre de usuario' text={auth.userName} />
                <ItemMenu title='Email' text={auth.email} />
                <ItemMenu title='Total Favoritos' text={`${totalFavorites} Pokémon`} />
            </View>
            <Button
                title='Cerrar sesión'
                onPress={logout}
                style={styles.btnLogout}
            />
        </View>
    )
}

// Component
const ItemMenu = ({ title, text }) => (
    <View style={styles.itemMenu}>
        <Text style={styles.itemMenuTitle}>{title}:</Text>
        <Text>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleBlock: {
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    dataContent: {
        marginBottom: 20
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#cfcfcf'
    },
    itemMenuTitle: {
        fontWeight: 'bold',
        paddingRight: 10,
        width: 140
    },
    btnLogout: {
        paddingTop: 20
    }
})
