import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import style from './style.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const [cadastro, setCadastro] = useState(false);

    const autenticar = () => {
        let user = {
            email: email,
            senha: senha
        }
        // console.log(user)

        fetch('http://10.87.207.3:7000/login', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { 
            if(!(resp.status == 404)){
                return resp.json();
            }
        })
        .then(data => {
            console.log(data)
            if(data[0] != undefined){
                AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate("Container");
            }else{
                ToastAndroid.show('Email ou Senha Inválidos', ToastAndroid.SHORT);
            }
        })
    }

    const habilitarCadastro = () => {
        setCadastro(true);
    }

    const cadastrar = () => {
        let user = {
            nome: nome,
            email: email,
            senha: senha,
        }
        console.log(user)
        fetch("http://10.87.207.3:7000/usuario", {
            "method":"POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(user)
        })
        .then(resp => {
            return resp.json();
        })
        .then( data => {
            console.log(data)
            if(data == undefined) {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            } else {
                AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("Container");
            }
        });
    }

        return (
            <View style={style.body}>
                <ImageBackground source={require("../../assets/fundobonito.png")} style={{width: "100%", height: "100%", position: "absolute"}} ></ImageBackground>
                <View style={style.header}>
                    <Image style={style.logo} source={require('../../assets/LOGO.png')} />
                </View>
                <View>
                     <Text style={style.texto}>Um Lugar onde a emoção de ler um livro acontece de uma nova forma, venha se aventurar conosco, seja Velaris!</Text>
                </View>
                <TextInput style={style.input1} value={email} onChangeText={setEmail} placeholder={"Email"} placeholderTextColor={'silver'}/>
                <TextInput style={style.input2} value={senha} onChangeText={setSenha} placeholder={"Senha"} placeholderTextColor={'silver'} secureTextEntry={true}/>

                {
                    (cadastro) ?
                        <View>
                            <TextInput style={style.input} value={nome} onChangeText={setNome} placeholder={"Nome Completo"} placeholderTextColor={'silver'}/>
                            <TouchableOpacity onPress={() => cadastrar() } style={style.view}>
                                <Text style={style.text}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    :
                        <View style={style.view}>
                            <TouchableOpacity style={style.login} onPress={() => autenticar() }>
                                <Text style={style.text}>Login</Text>
                            </TouchableOpacity>

                        
                            <TouchableOpacity style={style.cad} onPress={() => habilitarCadastro() }>
                                <Text style={style.text}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        )
}