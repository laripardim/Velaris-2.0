import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({ navigation }) {
    const [perfil, setPerfil] = useState("");
    const [email, setEmail] = useState("");
    const [imgPerfil, setImgPerfil] = useState(require('../../assets/perfil.png'));
    const [capa, setCapa] = useState("");

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                if(data != undefined) {
                    let obj = JSON.parse(data);
                    setPerfil(obj);
                    setEmail(obj);
                    setImgPerfil({uri:obj.foto});
                    setCapa({uri:obj.capa});
                }
            } catch (error) {
            }
        };
        _retrieveData();
    }, []);

    const [lista, setLista] = useState([]);
    const [livros, setLivros] = useState([])
    useEffect(() => {
        async function loadCapas() {
            const response = await fetch("http://192.168.0.4:7000/livro/")
            const data = await response.json();
            return data;
        }

        loadCapas().then(e=>{
            setLivros(e)
        })
    }, [])

    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                <Image style={style.ceu} source={require("../../assets/fundobonito.png")}></Image>
                        <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                            <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                        </TouchableOpacity>
                        <Text style={style.texto}>Seu Perfil</Text>
                        <Text style={style.texto2}>Veja suas Informações aqui, os livros que você leu e livros que ouviu!</Text>
                    <View style={style.card}>
                        <Image style={style.perfil} source={imgPerfil} ></Image>
                    </View>
                    <Text style={style.textin}>Nome: {perfil.nome}</Text>
                    <Text style={style.textin}>Email: {email.email}</Text>
                    <Text style={style.textin1}>LIVROS LIDOS POR VOCÊ</Text>
                    <View style={style.org}>
                        <ScrollView style={style.lados} horizontal={true}>
                            {

                                livros.map((e, index)=>{
                                    return (
                                        <View key={index} style={style.card1}>
                                            <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro", e) }} style={style.card1}>
                                                <Image style={style.harry} source={{uri: e.capa}}></Image>
                                            </TouchableOpacity> 
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>
                    {
                        lista.map((item, index) => {
                            console.log(item);
                        })
                    }
                    <Text style={style.textin1}>LIVROS OUVIDOS POR VOCÊ</Text>
                    <View style={style.org}>
                        <ScrollView style={style.lados} horizontal={true}>
                            {

                                livros.map((e, index)=>{
                                    return (
                                        <View key={index} style={style.card1}>
                                            <TouchableOpacity onPress={() => { navigation.navigate("DadosLivro", e) }} style={style.card1}>
                                                <Image style={style.harry} source={{uri: e.capa}}></Image>
                                            </TouchableOpacity> 
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>
                    {
                        lista.map((item, index) => {
                            console.log(item);
                        })
                    }
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