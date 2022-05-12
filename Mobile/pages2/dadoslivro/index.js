import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js'

export default function DadosLivro({ navigation, route }) {
    const {nome_livro, capa, escritor, genero} = route.params
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaultRating, setDefaultRating] = useState(0);
    // Filled Star. You can also give the path from local
    const starImageFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    
    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                if(data != undefined) {
                    let obj = JSON.parse(data);
                    capa({uri:obj.capa});
                }
            } catch (error) {
            }
        };
        _retrieveData();
    }, []);

    useEffect(() => {
        fetch('http://10.87.207.3:7000/dados', {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
    }) 

    return (
        <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                    <Image style={style.ceu} source={require("../../assets/livro.png")}></Image>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                            <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                        </TouchableOpacity>
                        <Text style={style.texto}>Informações do Livro</Text>
                      <Text style={style.texto2}>Conheça as informações do livro que você quer ler, como a sinópse, escolhe o capitulo que quer ler e veja alguns comentarios sobre ele. </Text>
                        <View style={style.org}>
                        <View style={style.card1}>
                            <Image style={style.harry} source={{uri: capa}}></Image>
                        </View>
                        <View style={style.customRatingBarStyle}>
                            {
                                maxRating.map((item, key) => {
                                    return (
                                        <TouchableOpacity 
                                            activeOpacity={0.7}
                                            key={item}
                                            onPress={() => setDefaultRating(item)} >
                                            <Image style={style.starImageStyle} source={ item <= defaultRating ? { uri: starImageFilled } : { uri: starImageCorner } }/>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                        <Text style={{color: 'purple', fontSize:20}}>Titulo: {nome_livro}</Text>
                        <Text style={{color: 'purple', fontSize: 20}}>Gênero: {genero}</Text>
                    </View>
                    <View style={style.card}>
                        
                    </View>
                    <View style={style.card5}>

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