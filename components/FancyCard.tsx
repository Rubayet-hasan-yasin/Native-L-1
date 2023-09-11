import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FancyCard = () => {
    return (
        <View>
            <Text style={style.headingText}>Tranding Places</Text>

            <View style={[style.card, style.cardElevated]}>
                <Image 
                source={{
                    uri: 'https://images.unsplash.com/photo-1693491012999-09a3764eab33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
                }}
                style={style.cardImage}
                />

                <View style={style.cardBody}>
                    <Text style={style.cardTitle}>Hill</Text>
                    <Text style={style.cardLabel}>Red city, bangladesh</Text>
                    <Text style={style.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora deserunt, facilis itaque nisi quasi in eum consectetur a.</Text>
                    <Text style={style.cardFooter}>39 mins away</Text>
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
    card: {
        width: 340,
        height: 360,
        borderRadius: 8,
        marginHorizontal: 12,
        marginVertical: 16,
    },
    cardElevated: {
        backgroundColor: "#000000",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle:{
        color: "#ffff",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: "#ffff",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription:{
        color: "#ffff",
        fontSize: 12,
        marginBottom: 12
    },
    cardFooter:{
        color: "#ffff",
    }
})

export default FancyCard;