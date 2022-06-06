import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../home';
import Perfil from '../perfil';
import Escreva from '../escreva';
import Leitura from '../leitura';
import DadosLivro from '../dadoslivro';
import Perfis from '../perfis';
import container from "../container/style";

const Drawer = createDrawerNavigator();

export default function Container() {

    const[foto, setFoto] = useState(null);
    const[nome, setNome] = useState(null); 

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                if(data != undefined) {
                    let obj = JSON.parse(data);
                    setFoto({uri:obj.foto});
                    setNome(obj.nome)
                    console.log(foto)
                }
            } catch (error) {
            }
        };
        _retrieveData();
    }, []);
    
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false , 
            drawerStyle: {
            backgroundColor: '#2f414d',
            width: 200,
            },}} 
            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <View style={{alignItems: "center", width: "80%", height: 180}}>
                            <Image source={(foto !== null) ? (foto) : require("../../assets/perfil.png")} style={{width: 100, height: 100, borderRadius: 100}}/>
                            <Text style={{ width: "80%", color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 20}}>Olá, {nome}</Text>
                        </View>
                        <DrawerItemList {...props} />
                        <DrawerItem labelStyle={{color: "white", fontWeight: "bold"}} label="Sair" onPress={async () => {     
                            await AsyncStorage.removeItem('userdata');
                            props.navigation.navigate("Login");
                        }} />
                    </DrawerContentScrollView>
                )
            }}
        >
            <Drawer.Screen name="Home" component={Home} 
                options={{
                    drawerLabel: "Home",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Perfil" component={Perfil}
                options={{
                    drawerLabel: "Perfil",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Escreva" component={Escreva} 
                options={{
                    drawerLabel: "Escreva",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />
            <Drawer.Screen name="Leitura" component={Leitura}
                options={{
                    drawerLabel: "Leitura",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold'}
                }}
            />

            <Drawer.Screen name="DadosLivro" component={DadosLivro}
                options={{
                    drawerLabel: "Dados Livro",
                    drawerLabelStyle: {color:'white', fontWeight: 'bold', height: 0},
                    drawerItemStyle: { height: 0 }
                }}
            />

        </Drawer.Navigator>
    );
}

