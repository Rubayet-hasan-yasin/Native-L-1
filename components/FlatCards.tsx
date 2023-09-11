import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlatCards = () => {
    return (
        <View>
            <Text style={style.headingText}>Flat Cards</Text>

            <View style={style.container}>
                <View style={[style.card, style.cardOne]}>
                    <Text>red</Text>
                </View>
                <View style={[style.card, style.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[style.card, style.cardThree]}>
                    <Text>Blue</Text>
                </View>

            </View>
        </View>
    );
};


const style = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },
})

export default FlatCards;