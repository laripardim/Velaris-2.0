import React, { useState } from 'react';
import { View, Image, TextInput, Text, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import style from './style.js'

export default function Escreva({ navigation }) {

  const [imagem, setImagem] = useState();

  const selecionarImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
    });

    if (!result.cancelled) {
      setImagem({
          uri: 'data:image/jpeg;base64,' + result.base64,
      })
      console.log(result.base64);
    }else if(!result.cancelled) {
      ToastAndroid.show('Selecione uma imagem menor', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={style.body}>
            <View style={style.scroll}>
                <ScrollView>
                  <Image style={style.ceu} source={require("../../assets/fundobonito.png")}></Image>
                      <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
                          <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                          <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                      </TouchableOpacity>
                      {/* <View style={style.pesq}>
                        <TextInput value={buscar} onChangeText={setBuscar} style={style.buscar} placeholder='Pesquise'>
                        </TextInput>
                      </View> */}
                      <Text style={style.texto}>Escreva Seu Livro</Text>
                      <Text style={style.texto2}>Aqui é onde a magia acontece! Escreva seu livro abaixo, e faça a imaginação de alguem! Seja Feliz.</Text>
                      <View style={style.card2}>
                        <TextInput multiline
                          placeholder='Nome do Livro'
                          placeholderTextColor = "silver"
                          numberOfLines={10}
                          maxLength={300}
                          style={style.input}>
                        </TextInput>
                      </View>
                      <View style={style.card1}>
                        <TextInput multiline
                          placeholder='Capitulo do Livro'
                          placeholderTextColor = "silver"
                          numberOfLines={10}
                          maxLength={300}
                          style={style.input}>
                        </TextInput>
                      </View>
                      
                      <View style={style.card1}>
                        <TextInput multiline
                          placeholder='Genero'
                          placeholderTextColor = "silver"
                          numberOfLines={10}
                          maxLength={300}
                          style={style.input}>
                        </TextInput>
                      </View>
                      <View style={style.card1}>
                        <TextInput multiline
                          placeholder='Sinopse do Livro'
                          placeholderTextColor = "silver"
                          numberOfLines={10}
                          maxLength={300}
                          style={style.input}>
                        </TextInput>
                      </View>
                      <TouchableOpacity source={imagem} onPress={() => { selecionarImagem() }}>
                        <Image source={require('../../assets/marca-paginas.png')} style={{width: 32, height: 32, marginLeft: 175, marginTop: 25}} />
                      </TouchableOpacity>
                      <Image source={imagem} style={{width: 90, height: 90, alignSelf: 'center', marginTop: 20}}></Image>
                      <View style={style.card}>
                        <TextInput 
                          multiline
                          numberOfLines={10}
                          maxLength={300}
                          editable
                          style={style.input}>
                        </TextInput>
                      </View>
                      <TouchableOpacity style={style.button} onPress={() => { navigation.navigate('Home') }}>
                        <Text style={style.env}>Publicar seu Livro</Text>
                      </TouchableOpacity>
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