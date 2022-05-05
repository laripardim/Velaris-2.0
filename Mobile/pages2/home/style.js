 import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white',
    },

    perfil: {
        width: 50,
        marginTop: 20,
        marginRight: 20,
        height: 50,
        borderRadius: 50
    },

    card: {
        zIndex: -1,
        marginBottom: 30,
        width: "95%",
        height: 150,
        marginTop: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 2,
        alignSelf: "center",
        flexDirection: "column"
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },

    pesq: {
        position:"relative",
        flexDirection: "column",
        maxWidth: 235,
        height:"auto",
        alignItems: "center"
    },

    input: {
        width: "100%",
        height: "100%",
    },

    header: {
        width: "100%",
        height: 100,
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'purple'
    },

    footer: {
       width: "100%",
       height: 150,
       alignItems: 'center',
       justifyContent: 'space-around',
       backgroundColor: "purple",
       bottom: 0,
       position: "absolute"
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

    enviar: {
        width: 30,
        height: 30,
        marginLeft: 10
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
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    like: {
        width: 30,
        height: 30,
    },

    deslike: {
        width: 30,
        height: 30,
    },

    scroll: {
        width: "100%",
        height: 650
    },

    menu: {
        marginLeft: 10,
        width: 40,
        height: 40,
        marginTop: 20
    },

    buscar: {
        backgroundColor: 'white',
        width: 235,
        padding: 5,
        top: 10
    },

    procurar: {
        width: 25,
        height: 25,
        marginTop: 18
    },

    Open:{
        flex:1,
        width: "100%",
        maxHeight: 250,
    },

    notOpen: {
        display: 'none',
        flex:1,
        width: "100%",
        maxHeight: 250,
    }
    
});