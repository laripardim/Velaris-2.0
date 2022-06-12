import React from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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

    card1 : {
        width: "60%",
        height: 40,
        marginTop: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center",
        backgroundColor: 'black'
    },

    card2 : {
        width: "60%",
        height: 40,
        marginTop: 50,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        alignSelf: "center",
        backgroundColor: 'black',
    },

    card: {
        width: "95%",
        height: 800,
        marginBottom: 10,
        marginTop: 50,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        backgroundColor: 'white',
        alignSelf: "center",
        padding: 5,
    },

    input: {
        width: "100%",
        padding: 0,
        textAlignVertical: 'top',
        justifyContent: 'flex-start',
        color: 'white'
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

    env : {
        color: "silver",
        marginTop: 40,
        marginBottom: -40,
        width: 150,
        height: 30,
        borderRadius: 5,
        borderColor: 'darkmagenta',
        borderWidth: 3,
        fontSize: 18,
        textAlign: 'center',
        marginRight: 5,
        justifyContent: "center",
        alignSelf: 'center'
    },

    // texto: {
    //     fontSize: 20,
    //     marginTop: 15,
    //     color: 'white',
    //     textAlign: 'center'
    // },

    texto: {
        fontSize: 30,
        marginRight: 150,
        marginTop: -140,
        color: 'white',
    },

    texto2: {
        fontSize: 15,
        marginRight: 150,
        marginTop: 2,
        color: 'white',
    },
});