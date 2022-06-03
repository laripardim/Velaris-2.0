import React, { useEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style.js'
import * as Speech from 'expo-speech';

export default function Leitura({ navigation, route }) {
    const {texto} = route.params
    const speak = () => {
        const thingToSay = texto;
        Speech.speak(thingToSay);
      };

    useEffect(() => {
        console.log("TEXTO do TEXTO ", texto);
        fetch('http://10.87.207.23:7000/leitura', {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
    },[]);

    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <Image style={style.ceu} source={require("../../assets/leituralivro.png")}></Image>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </TouchableOpacity>
                    <View >
                    </View>
                    <TouchableOpacity onPress={speak} >
                        <Text style={{color: 'white'}}>Ouça o Livro:</Text>
                        <Image source={require('../../assets/volume.png')} style={{width: 32, height: 32, marginLeft: 175, marginTop: 25}} />
                    </TouchableOpacity>
                    <View style={style.card}>
                        <Text style={{color: 'white', fontSize:20}}>{texto}</Text>
                    </View>
                    <View style={style.footer}>
                        <Text style={style.text}>Nos siga nas redes sociais !</Text>
                        <View style={style.imagefooter}>
                            <Image style={style.face} source={require('../../assets/facebook.png')}></Image>
                            <Image style={style.twitter} source={require('../../assets/twitter.png')}></Image>
                            <Image style={style.insta} source={require('../../assets/insta.png')}></Image>
                        </View>
                        <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}