import * as React from 'react';
import { View, Image, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Escreva({ navigation }) {
  return (
    <View style={style.body}>
      <View style={style.scroll}>
        <ScrollView>
          <View style={style.header}>
            <TouchableOpacity  onPress={() => { navigation.openDrawer() }}>
              <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
            </TouchableOpacity>
            <Text style={style.texto}>Escreva Seu Livro Aqui</Text>
            <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
          </View>
          <View style={style.card1}>
            <TextInput multiline
              numberOfLines={10}
              maxLength={300}
            
              style={style.input}>
            </TextInput>
          </View>

          <View style={style.card1}>
            <TextInput multiline
              numberOfLines={10}
              maxLength={300}

              style={style.input}>
            </TextInput>
          </View>

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
            <Text style={style.env}>Publicar</Text>
          </TouchableOpacity>
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