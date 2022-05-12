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
        height: 340   
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

    card1: {
        marginBottom: 40,
        width: "35%",
        height: 200,
        marginTop: 50,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center"
    },
    
    org: {
        marginTop: 40,
        width: "95%",
        height: "20%",
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },

    card : {
        marginBottom: 10,
        width: "95%",
        height: 400,
        marginTop: 10,
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center"
    },

    card5 : {
        marginBottom: 10,
        width: "95%",
        height: 400,
        marginTop: 10,
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center"
    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: "7%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'purple'
    },

    footer: {
        width: "100%",
        marginTop: 100,
        height: 150,
        backgroundColor: "black",
    },   

    logo: {
        marginTop: -50,
        marginLeft: 320,
        padding: 0,
        width: 70,
        height: 80,
    },

    menu: {
        width: 45,
        height: 30,
        marginLeft: 10,
        marginTop: -280
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

    harry: {
        width: "100%",
        height: "100%"
    },

    estrela: {
        height: 40,
        marginBottom: 10,
    },
    
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },

    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
})