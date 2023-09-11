import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActionCard = () => {
    function openWebsite(webLink: string) {
        Linking.openURL(webLink)
    }

    return (
        <View>
            <Text style={style.headingText}>Blog Card</Text>

            <View style={[style.card, style.elevatedCard]}>
                <View style={style.headingContainer}>

                    <Text style={style.headerText}>
                        What's new in javaScript 21 - ES12
                    </Text>
                </View>

                <Image
                source={{
                    uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1694191503030/0a8a9249-37ae-4ccd-9b63-940319655dfd.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                }}
                style={style.cardImage}
                />

                <View style={style.cardBodyContainer}>
                    <Text numberOfLines={3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, dolorum dolore dicta suscipit beatae officia assumenda vel quia, tempore libero dignissimos hic explicabo quaerat porro aliquid maiores sed. Officiis, repellat?</Text>

                </View>

                <View style={style.cardFooterContainer}>
                    <TouchableOpacity 
                    onPress={()=> openWebsite('https://reactnative.dev/')}
                    >
                        <Text style={style.socileLinks}>Read More</Text>
                    </TouchableOpacity>

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
        height: 340,
        marginHorizontal: 10,
        marginVertical: 16,
        borderRadius: 6,
    },
    elevatedCard: {
        backgroundColor: '#57375D',
        elevation: 6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '040D12',
        shadowOpacity: 0.7,
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage:{
        height: 180,
    },
    cardBodyContainer: {
        padding: 10,
    },
    cardFooterContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socileLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
    }
})

export default ActionCard;