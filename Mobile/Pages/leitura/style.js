import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#0a0c0d'
    },

    ceu: {
        width: "100%",
        height: 330   
    },

    menu: {
        width: 45,
        height: 30,
        marginLeft: 10,
        marginTop: -280
    },

    logo: {
        marginTop: -50,
        marginLeft: 320,
        padding: 0,
        width: 70,
        height: 80,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 25,
    },

    card : {
        marginBottom: 10,
        width: "95%",
        height: 500,
        marginTop: 30,
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center"
    },

    footer: {
        width: "100%",
        marginTop: 20,
        height: 150,
        backgroundColor: "black",
    },

    text: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
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
})