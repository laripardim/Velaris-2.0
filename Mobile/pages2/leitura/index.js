import * as React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Leitura({ navigation }) {
    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <Image style={style.ceu} source={require("../../assets/leituralivro.png")}></Image>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </TouchableOpacity>
                    <View style={style.card}>
                        <Text style={{color: 'white', fontSize:20}}></Text>
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