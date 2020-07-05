import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function Book({ navigation, bookInfo}) {

    bookInfo = {
        titulo: "Pequeno Manual Antirracista",
        imagem: "https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/books/images/pequeno-manual-antirracista/intermediaria_9788554515997.jpg",
        autor: "Djamila Ribeiro",
        editora: "Companhia das Letras",
        descricao: "Dez lições breves para entender as origens do racismo e como combatê-lo. Neste pequeno manual, a filósofa e ativista Djamila Ribeiro trata de temas como atualidade do racismo, negritude, branquitude, violência racial, cultura, desejos e afetos.",
        tags: ["história","sociedade"],
        idioma: "Português",
        tematica: ["Negritude","Preconceito"]
    };

    function goBack () {
        navigation.goBack();
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={goBack}>
                <Icon name="arrow-left" size={28} color="#fff" />  
                <Image source={logoImg} />  
        </TouchableOpacity>
        <StatusBar style="auto" />

        <View style={styles.book}>
            <Text style={styles.titulo}>{bookInfo.titulo}</Text>
            <Image source={{uri: bookInfo.imagem}}/>
            <Text style={styles.autor}>{bookInfo.autor}</Text>
            <Text >{bookInfo.descricao}</Text>

            <View style={styles.compartilhar}>
                <SocialIcon
                    title='Compartilhar com Instagram'
                    button
                    light
                    type='instagram'
                />
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45cbcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
      marginBottom: 16
  },
  mainText: {
      marginTop: 8,
      fontWeight: 'bold',
      color: '#fff'
  },
  book: {
    backgroundColor: '#fafafa',
    width: '100%'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  autor: {
    fontWeight: 'bold'
  },
  compartilhar: {
    backgroundColor: '#faf0',
    width: '50%' 
  }
});
