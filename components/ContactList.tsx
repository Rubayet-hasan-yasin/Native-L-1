import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: "Hitesh Choudhary",
            status: "Just an extra ordinary teacher",
            imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
        },
        {
            uid: 2,
            name: "Anurg Tiwari",
            status: "I love to Code and Teach!",
            imageUrl: "https://avatars.githubusercontent.com/u/94738352?=4",
        },
        {
            uid: 3,
            name: "Sanket Singh",
            status: "Making your GPay smooth",
            imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
        },
        {
            uid: 4,
            name: "Anirudh Jwala",
            status: "Building secure Digital banks",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
        },
    ]

    return (
        <View>
            <Text style={style.headingText}>Contact Lists</Text>

            <ScrollView
                style={style.container}
                scrollEnabled={false}
            >
                {
                    contacts.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={style.userCard}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={style.userImage}
                            />

                            <View>
                                <Text style={style.userName}>{name}</Text>
                                <Text style={style.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};


const style = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        paddingHorizontal: 16,
        marginVertical: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        marginVertical: 6,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: "#000"
    },
    userStatus: {
        fontSize: 14,
    },

})


export default ContactList;