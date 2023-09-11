
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={style.headingText}>Elevated Cards</Text>


            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={style.continer}>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[style.card, style.cardElevated]}>
                    <Text>tap</Text>
                </View>
            </ScrollView>

        </View>
    );
};

const style = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    continer: {
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 4,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset:{
            height: 1,
            width: 1,
        },
        shadowColor: '#000000'
    },
})

export default ElevatedCards;