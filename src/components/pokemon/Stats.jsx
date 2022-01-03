import { capitalize } from 'lodash';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stats = ({ stats }) => {

const barStyles = (baseStat) => {
    let barColor = '#ffff00';
    if (baseStat > 99) barColor = '#00ac17'
    else if (baseStat < 49) barColor = '#ff3e3e'
    return {
        backgroundColor: barColor,
        width: `${baseStat}%`
    }
}

    return (
        <View style={styles.content}>
            <Text style={styles.title} >Base Stats</Text>
            {
                stats.map((stat, i) =>
                    <View key={i} style={styles.block}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statName} >{capitalize(stat.stat.name)}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.statNumber}>{stat.base_stat}</Text>
                            <View style={styles.bgBar}>
                                <View style={[styles.bar, barStyles(stat.base_stat)]}></View>
                            </View>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginVertical: 40
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    blockTitle: {
        width: '30%'
    },
    statName: {
        fontSize: 12,
        color: '#6b6b6b'
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    statNumber: {
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        height: 5,
        borderRadius: 20
    }
})

export default Stats