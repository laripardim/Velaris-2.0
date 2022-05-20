import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const [pesquisados, setPesquisados] = useState([]);
    const [timer, setTimer] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [open, setOpen] = useState(style.notOpen);
    const [edit, setEdit] = useState(true);
    const [buscar, setBuscar] = useState('');
    const [perfil, setPerfil] = useState("");
    const [email, setEmail] = useState("");
    const [imgPerfil, setImgPerfil] = useState(require('../../assets/perfil.png'));
    const [capa, setCapa] = useState("");

    useEffect(() => {
        fetch('http://10.87.207.3:7000/livros')
        .then((response) => response.json())
        .then((responseJson) => {
            setFilteredData(responseJson);
            setMasterData(responseJson);
        })
        .catch((error) => {
            console.error(error);
            });
    }, []);

    useEffect(()=> {
        setTimer((buscar+'').length)
        if ((buscar+'').length > 2) {
            setEdit(false)
            setOpen(style.Open)
            async function get() {
                let item = await fetch(`http://10.87.207.3:7000/livro/${buscar}`)
                let resp = await item.json()
                return resp
            }
            get().then(resp =>{
                setPesquisados(resp)
              })
            }else{
              setEdit(true)
              setOpen(style.notOpen)
            }
          }, [buscar])

    const buscarFilter = (text) => {
        if (text) {
          console.log("tchau")
          const newData = masterData.filter(
            function (item) {
              if (item.title) {
                const itemData = item.title.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
              }
          });
          setFilteredData(newData);
          // setSearch(text);
          console.log(filteredData)
        } else {
          setFilteredData(masterData);
          console.log(buscar)
          navigation.navigate('dadoslivro');
          // setSearch(text);
        }
      };

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
            const response = await fetch("http://10.87.207.3:7000/livro/")
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
                        <View style={style.pesq}>
                            <TextInput value={buscar} onChangeText={setBuscar} style={style.buscar} placeholder='Pesquise'>
                            </TextInput>
                        </View>
                        <ScrollView style={open} >
                            <TouchableOpacity style={{flex:1,borderBottomColor:"#000", borderBottomWidth:3, padding: 10, backgroundColor:"#FFF",width: "100%",justifyContent: 'space-around', alignItems:"center", flexDirection:"row"}} onPress={()=>{setEdit(true); setOpen({opacity: 0,width: "100%",maxHeight: 250,backgroundColor: '#f00',position: 'absolute',top: "45%"})}}>
                                <Text style={{width: "100%",textAlign:"center"}} >Cancelar Pesquisa</Text>
                            </TouchableOpacity>
                            
                            {
                                pesquisados.map((e,index)=>{
                                    return (
                                        <TouchableOpacity onPress={()=>{navigation.navigate("Dadoslivro", e)}} key={index} style={{borderBottomColor:"#000", borderBottomWidth:3, padding: 5, backgroundColor:"#FFF",width: "100%",justifyContent: 'space-around', alignItems:"center", flexDirection:"row"}}>
                                            <Image style={{width: 50, height: 50}} source={{uri: e.capa}}></Image>
                                            <Text style={{width: 90}} numberOfLines={1}>{e.livro}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </ScrollView>
                        <Text style={style.texto}>Bem vindo, Leitor!</Text>
                        <Text style={style.texto2}>Velaris Books, onde você encontra todo tipo de conteúdo para todas as idades</Text>
                        <Text style={style.textin}>Romance</Text>
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

                        <Text style={style.textin}>Romance</Text>
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

                        <Text style={style.textin}>Romance</Text>
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
