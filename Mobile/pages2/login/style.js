import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'black',
    },
    
    header: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        marginTop: "50%"
    },

    logo: {
        width: "50%",
        height: "60%",
        marginTop: -135
    },

    image: {
        width: 500,
        height: 500,
        top: 150,
        marginLeft: 80,
    },

    texto: {
        fontSize: 20,
        marginTop: -200,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    input: {
        width: 250,
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: 'darkmagenta',
        color: 'white',
        padding: 10
     },

    input1: {
       width: 250,
       height: 40,
       marginTop: -70,
       borderRadius: 10,
       backgroundColor: "black",
       borderWidth: 2,
       borderColor: 'darkmagenta',
       color: 'white',
       padding: 10
    },

    input2: {
        width: 250,
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: 'darkmagenta',
        color: 'white',
        padding: 10
     },

    login: {
        width: 60,
        borderRadius: 5,
        height: 30,
        marginTop: 2,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 17,
        color: 'white',
    },

    cad: {
        justifyContent: "center",
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    view: {
        padding: 10,
        alignItems: 'center',
        margin: 5
    }
})