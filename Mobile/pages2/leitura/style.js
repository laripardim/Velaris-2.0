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

    texto: {
        fontSize: 24,
        marginRight: 150,
        marginTop: -140,
        color: 'white',
    },

    texto2: {
        fontSize: 16,
        marginRight: 150,
        marginTop: 2,
        color: 'white',
    },

    card : {
        marginBottom: 10,
        width: "95%",
        height: 250,
        marginTop: 10,
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center"
    },

    footer: {
        width: "100%",
        marginTop: 110,
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

    // env : {
    //     color: "silver",
    //     marginTop: 40,
    //     marginBottom: -40,
    //     width: 150,
    //     height: 30,
    //     borderRadius: 5,
    //     borderColor: 'darkmagenta',
    //     borderWidth: 3,
    //     fontSize: 18,
    //     textAlign: 'center',
    //     marginRight: 5,
    //     justifyContent: "center",
    //     alignSelf: 'center'
    // },
})