import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card1 : {
        marginBottom: 30,
        width: "60%",
        height: 50,
        marginTop: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center"
    },

    card: {
        width: "95%",
        height: 800,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        padding: 5,
    },
    input: {
        width: "100%",
        padding: 0,
        textAlignVertical: 'top',
        justifyContent: 'flex-start'
    },
    header: {
        width: "100%",
        height: "8%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'purple'
    },


    footer: {
        width: "100%",
        height: 140,
        backgroundColor: "purple",
    },    

    logo: {
        marginTop: 18,
        padding: 0,
        width: 70,
        height: 70,
    },
    
    menu: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginTop: 20
    },

    text: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },

    face: {
        width: 50,
        height: 50
    },

    twitter: {
        width: 50,
        height: 50
    },

    insta: {
        width: 50,
        height: 50
    },

    imagefooter: {
        width: "100%",
        height: "15%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        marginTop: "8%",
        marginBottom: "8%"
    },

    env : {
        color: "black",
        marginTop: 10,
        width: 60,
        height: 40,
        fontSize: 16,
        marginRight: 10,
        justifyContent: "center",
        alignSelf: 'center'
    },

    texto: {
        fontSize: 20,
        marginTop: 15,
        color: 'white',
        textAlign: 'center'
    }
});