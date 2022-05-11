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
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        </TouchableOpacity>
                        <Text style={style.text}>Informações do Livro</Text>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </View>
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
                        <Text>Titulo: {nome_livro}</Text>
                        <Text>Autor(a): {escritor}</Text>
                        <Text>Gênero: {genero}</Text>
                    </View>
                    <View style={style.card}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>1 – A casa dos Riddle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>    
                            <Text>2 – A cicatriz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>     
                            <Text>3 – O convite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}> 
                            <Text>4 - De Volta à Toca</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>5 - As Gemialidades Weasley</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>6 – A chave do portal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>    
                            <Text>7 – Bagman e Crouch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>8 – A Copa Mundial de Quadribol</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>9 – A Marca Negra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>10 – Caos no Ministério</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>11 – A Bordo do Expresso de Hogwarts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>12 – O Torneio Tribruxo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>13 – Olho-Tonto Moody</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>14 – As Maldições Imperdoáveis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>15 – Beauxbatons e Durmstrang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>    
                            <Text>16 – O Cálice de Fogo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>17 – Os quatro campeões</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>18 – A pesagem das varinhas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>19 – O Rabo-Córneo Húngaro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>20 – A Primeira tarefa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>21 – A Frente de Liberação dos Elfos Domésticos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>22 – A tarefa inesperada</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>23 – O Baile de Inverno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>24 – O furo jornalístico de Rita Skeeter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>25 – O ovo e o olho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>26 – A segunda tarefa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>27 - A volta de Almofadinhas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>28 - A loucura do Sr. Crouch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>29 - O sonho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>30 - A Penseira</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>31 - A terceira tarefa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>32 - Osso, carne e sangue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>33 - Os Comensais da Morte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>34 - Priori Incantatem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>35 - Veritaserum</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>36 - Os caminhos se separam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("Leitura") }}>
                            <Text>37 - O Recomeço</Text>
                        </TouchableOpacity>    
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