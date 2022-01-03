import { capitalize } from 'lodash'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'

const Types = ({ types }) => {
    return (
        <View style={styles.content}>
            {
                types.map((type, i) =>
                    <View
                        key={i}
                        style={{ ...styles.pill, backgroundColor: getColorByPokemonType(type) }}
                    >
                        <Text style={styles.pillText} >{capitalize(type)}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Types

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    pillText: {
        color: '#fff'
    }
})
