import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function Book({ navigation, bookInfo}) {

    bookInfo = {
        titulo: "Volta ao mundo em 80 dias",
        imagem: "'http://192.168.0.102:3333/uploads/book-cover-Julio-Verne-01.jpeg'",
        autor: "Júlio Verne",
        editora: "TodoLivro",
        descricao: "Esta coleção traz grandes clássicos da literatura mundial, adaptados em linguagem simples e adequada ao público infantojuvenil. É uma excelente ferramenta escolar e até de preparação para concursos, como o vestibular. Traz ainda um suplemento pedagógico ao final de cada livro, que visa testar o entendimento do leitor sobre os textos. Durante um jogo de cartas no Reform Club de Londres, Mr. Phileas Fogg, um gentleman inglês misterioso e muito rico, aposta com seus parceiros que conseguirá dar a volta completa ao mundo em 80 dias. Todos acham isso absurdo, irrealizável, mas um inglês nunca brinca quando se trata de algo tão importante como uma aposta, e ela é fechada. São 8:45 da noite, é quarta-feira, 2 de outubro; Mr. Fogg garante que estará de volta a Londres, naquela mesma sala, no sábado, 21 de dezembro, às 8:45 da noite; caso contrário, as 20 mil libras de sua conta bancária passarão a pertencer aos seus cinco parceiros de jogo.",
        idioma: "Português",
        categoria: ["Literatura - Ficção científica","Literatura infantojuvenil","Ficção científica"],
        tematica: ["Viagem","Jogos","Amizade","Aventura"],
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
            
            <Text style={styles.negrito}>{bookInfo.autor}</Text>
            
            <Text >{bookInfo.descricao}</Text>

            <Text style={styles.negrito}>Idioma:</Text>
            <Text>{bookInfo.idioma}</Text>
            
            <Text style={styles.negrito}>Categoria:</Text>
            <View style={styles.labels}>
                {bookInfo.categoria.map( item => (
                    <Text key={item} style={styles.label}>{item}</Text>
                ))}
            </View>

            <Text style={styles.negrito}>Tematica:</Text>
            <View style={styles.labels}>
                {bookInfo.tematica.map( item => (
                    <Text key={item} style={styles.label}>{item}</Text>
                ))}
            </View>

            <View style={styles.botoesCompartilhar}>
                <Button style={styles.compartilharArvore} title="Compartilhar na Árvore"/>
                <SocialIcon style={styles.compartilhar}
                    title='Compartilhar com Instagram'
                    button
                    light
                    type='instagram'
                />
            </View>

            <Button style={styles.lerAgora} title="Ler Agora"/>

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
    height: '100%'
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
  negrito: {
    marginTop: 5,
    fontWeight: 'bold'
  },
  botoesCompartilhar: {
    margin: 10,
    flexDirection: 'column'
  },
  compartilharArvore: {
    borderWidth: 5,
    borderRadius: 30,
    marginRight: 5,
    backgroundColor: '#5AB792',
    width: '80%'        
 },
  compartilhar: {
    marginRight: 5,
    borderRadius: 30,
    backgroundColor: '#faf0',
    width: '90%'  
  },
  labels: {
    flexDirection: 'row',
    margin: 5
  },
  label : {
    borderWidth: 1,
    marginRight: 5,
    borderColor: 'gray',
    width: 'auto',
    borderRadius: 2,
    padding: 4
  },
  lerAgora: {
    borderWidth: 5,
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: '#5AB792',
    width: '100%'        
 }
});
