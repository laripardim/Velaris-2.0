import * as React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Leitura({ navigation }) {
    return (
        <View style={style.body}>
            {/* <Image source={require('../../assets/fundo.png')}></Image> */}
            <View style={style.scroll}>
                <ScrollView>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image style={style.menu} source={require("../../assets/menu.png")}></Image>
                        </TouchableOpacity>
                        <Text style={style.texto}>Leitura</Text>
                        <Image style={style.logo} source={require('../../assets/LOGO.png')}></Image>
                    </View>
                    <View style={style.org}>
                        <Text>Título: Harry Potter e o Cálice de Fogo</Text>
                        <Text>Autor: J.K Rowling</Text>
                    </View>
                    <View style={style.card}>
                        <Text>A história começa na pequena vila de Little Hangleton na "Casa dos Riddle." Muitos moradores do lugar ainda a chamam assim, embora muitos anos tenham se passado desde que a família Riddle viveu ali. No alto da colina acima do vilarejo, a antiga mansão é a maior construção do local. A casa tem má reputação. Meio século atrás, a família Riddle, incluindo seu filho, que tinha por volta de trinta anos, e seus pais, foram encontrados mortos na sala de estar. Frank Bryce, o jardineiro dos Riddle, foi preso por suspeita de homicídio mas depois foi libertado, quando foi determinado que as vítimas não foram assassinadas; eles simplesmente morreram, aparentemente de medo. Mas o povo do local permaneceu achando que Frank foi o responsável.

Bryce agora mora sozinho na propriedade dos Riddle, cuidando da casa e do terreno para os proprietários ausentes, ele faz o melhor que pode a despeito de sua idade avançada. Uma noite, já tarde, Bryce investiga uma luz numa das janelas da casa. Lá dentro, ele ouve Lord Voldemort e Peter Pettigrew (Rabicho) planejando alguma coisa para depois da Copa do Mundo de Quadribol, embora Bryce não tivesse a menor idéia do que seria isso. Lord Voldemort aparentemente não confia em Rabicho para agir sozinho, e fala sobre seu “fiel servidor”. Parece que eles já tinham matado alguém chamada Bertha Jorkins. Bryce é descoberto por Nagini, a serpente gigante de Voldemort, e Rabicho o empurra para dentro do quarto. Bryce os ameaça com a policia; Voldemort o chama de Trouxa, não dá a menor atenção às ameaças e o mata com a Maldição da Morte.

Há duzentas milhas de distância, Harry Potter acorda repentinamente com uma dor forte na cicatriz.</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={style.proximo}>Proximo Capitulo</Text>
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