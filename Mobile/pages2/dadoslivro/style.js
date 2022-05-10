import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },

    card1: {
        marginBottom: 10,
        width: "35%",
        height: 200,
        marginTop: 20,
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
        height: "49%",
        marginTop: 30,
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 5,
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
        height: "30%",
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
        fontSize: 20,
        marginTop: 10,
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
        marginTop: 30,
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
})