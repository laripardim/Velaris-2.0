// import React, { useState, useEffect } from 'react';
// import { View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
// import style from './style.js';
// import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
// import Perfis from '../perfis/index.js';
// import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Home({ navigation }) {
  
//   const [like, setLike] = useState("");
//   const [deslike, setDeslike] = useState("");

//   const [imgPerfil, setImgPerfil] = useState(require('../../assets/perfil.png'));
  
//   const [buscar, setBuscar] = useState('');
//   const [pesquisados, setPesquisados] = useState([])
//   const [filteredData, setFilteredData] = useState([]);
//   const [masterData, setMasterData] = useState([]);
//   const [open, setOpen] = useState(style.notOpen)
//   const [timer, setTimer] = useState(0);
//   const [edit, setEdit] = useState(true);

//   const [novoComentario, setNovoComentario] = useState("");
//   const [comentarios, setComentarios] = useState({comentarios:[]});

//   useEffect(() => {
//     const _retrieveData = async () => {
//         try {
//             const data = await AsyncStorage.getItem('userdata');
//             if(data != undefined) {
//                 let obj = JSON.parse(data);
//                 setImgPerfil({uri:obj.foto});
//               }
//             } catch (error) {
//             }
//         };
//         _retrieveData();
//     }, []);
    
//   useEffect(() => {
//     fetch('http://10.87.207.22:7000/usuario')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredData(responseJson);
//         setMasterData(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   useEffect(()=> {
//     setTimer((buscar+'').length)
//     if ((buscar+'').length > 2) {
//       setEdit(false)
//       setOpen(style.Open)
//       async function get() {
//         let item = await fetch(`http://10.87.207.22:7000/usuario/search/${buscar}`)
//         let resp = await item.json()
//         return resp
//       }
//       get().then(resp =>{
//         setPesquisados(resp)
//       })
//     }else{
//       setEdit(true)
//       setOpen(style.notOpen)
//     }
//   }, [buscar])

//   const buscarFilter = (text) => {
//     if (text) {
//       console.log("tchau")
//       const newData = masterData.filter(
//         function (item) {
//           if (item.title) {
//             const itemData = item.title.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//           }
//       });
//       setFilteredData(newData);
//       // setSearch(text);
//       console.log(filteredData)
//     } else {
//       setFilteredData(masterData);
//       console.log(buscar)
//       navigation.navigate('Perfis');
//       // setSearch(text);
//     }
//   };

//   const addComentario = () => {
//     let data = {
//       "comentario":novoComentario,
//       "like":0,
//     }

//     setComentarios({ comentarios: [...comentarios.comentarios, data] });
//   }

//   const CampoComentario = ({data, index}) => {
//     console.log(data, index)
//     const likear = (tipo) => {
//       let temp = comentarios.comentarios;
//       temp[index].like = tipo;
//       setComentarios({ comentarios: temp });
//     }

//     return(
//       <View style={style.card} key={index}>
//         <View style={{width: "100%",height: "80%", alignSelf: "center"}}>
//           <Text style={{paddingLeft: 5, paddingTop: 5}}>{data.comentario}</Text>
//         </View>
//         <View style={{width: "100%" ,flexDirection: "row", justifyContent: "space-evenly"}}>
//           <AntDesign name="like2" size={30} onPress={() => likear(1)} color={data.like == 1 ? "darkmagenta" : "black"} />
//           <AntDesign name="dislike2" size={30} onPress={() => likear(2)} color={data.like == 2 ? "red" : "black"} />
//         </View>
//       </View>
//     )
//   }

//   return (
//     <View style={style.body}>
//       <View style={style.scroll}>
//         <ScrollView>
//           <View style={style.header}>
//             <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
//               <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
//             </TouchableOpacity>
//             <View style={style.pesq}>
//               <TextInput value={buscar} onChangeText={setBuscar} style={style.buscar} placeholder='Pesquise'>
//               </TextInput>
//             </View>
//             <Image style={style.perfil} source={imgPerfil} ></Image>
//           </View>
//           <ScrollView style={open} >
//             <TouchableOpacity style={{flex:1,borderBottomColor:"#000", borderBottomWidth:3, padding: 10, backgroundColor:"#FFF",width: "100%",justifyContent: 'space-around', alignItems:"center", flexDirection:"row"}} onPress={()=>{setEdit(true); setOpen({opacity: 0,width: "100%",maxHeight: 250,backgroundColor: '#f00',position: 'absolute',top: "45%"})}}>
//               <Text style={{width: "100%",textAlign:"center"}} >Cancelar Pesquisa</Text>
//             </TouchableOpacity>

//             {
//               pesquisados.map((e,index)=>{
//                 return (
//                   <TouchableOpacity onPress={()=>{navigation.navigate("Perfis", e)}} key={index} style={{borderBottomColor:"#000", borderBottomWidth:3, padding: 5, backgroundColor:"#FFF",width: "100%",justifyContent: 'space-around', alignItems:"center", flexDirection:"row"}}>
//                     <Image style={{width: 50, height: 50}} source={{uri: e.foto}}></Image>
//                     <Text style={{width: 90}} numberOfLines={1}>{e.nome}</Text>
//                   </TouchableOpacity>
//                 );
//               })
//             }
//           </ScrollView>
//           <View style={style.card}>
//             <TextInput multiline
//               value={novoComentario}
//               onChangeText={setNovoComentario}
//               numberOfLines={10}
//               maxLength={300}
//               editable={edit}
//               style={style.input}>
//             </TextInput>
//           </View>
//           <TouchableOpacity onPress={addComentario}>
//             <Image style={style.enviar} source={require("../../assets/enviar.png")}></Image>
//           </TouchableOpacity>
//           {
//             comentarios.comentarios.map((item, index) => {
//               return(<CampoComentario key={index} data={item}/>)
//             })
//           }
//         </ScrollView>
//       </View>

import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
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
            const response = await fetch("http://10.87.207.9:7000/livro/")
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
                    {/* <View style={style.header}> */}
                      <Image style={style.ceu} source={require("../../assets/fundobonito.png")}></Image>
                        <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                            <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                        </TouchableOpacity>
                        <View style={style.pesq}>
                          <TextInput value={buscar} onChangeText={setBuscar} style={style.buscar} placeholder='Pesquise'>
                          </TextInput>
                        </View>
                        <Text style={style.texto}>Bem vindo, Leitor!</Text>
                        <Text style={style.texto2}>Velaris Books, onde você encontra todo tipo de conteúdo para todas as idades</Text>
                    {/* </View> */}
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
                        <Image style={style.insta} source={require('../../assets/instagram.png')}></Image>
                      </View>
                      <Text style={style.text}>Developed by Elian, Larissa e Lavínia</Text>
                    </View>
                </ScrollView>    
            </View>
          </View>
      );
}
    