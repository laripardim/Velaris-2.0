import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        // width: 100,
        // backgroundColor: 'red',
        // height: 100
    },
    
    org: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },

    card: {
        marginBottom: 10,
        width: "90%",
        height: 800,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 1,
        alignSelf: 'center'
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
        height: 240,
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

    texto: {
        fontSize: 20,
        marginTop: 15,
        color: 'white',
        textAlign: 'center'
    },
    
    scroll:{
        width: "100%",
        height: '100%'
    },

    proximo: {
        color: "black",
        marginTop: 10,
        fontSize: 20,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end"
    }
    
})