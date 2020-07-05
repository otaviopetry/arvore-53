import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {    StyleSheet, 
            Text, 
            View, 
            Image, 
            TouchableOpacity, 
            Button,
            FlatList} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

const IMAGE_PLACEHOLDER = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível";

export default function Achievements({listaInsignias}) {

    listaInsignias = [{titulo:"Vira-páginas", imagem:'http://192.168.0.102:3333/journey/badges/badge-le-de-tudo.png'}, 
                      {titulo: "Multi-cultural", imagem:'http://192.168.0.102:3333/journey/badges/badge-multicultural.png'},
                      {titulo: "100% Fiel", imagem:'http://192.168.0.102:3333/journey/badges/badge-100porcento-fiel.png'}];

    const navigation = useNavigation();

    function goBack () {
        navigation.goBack();
    }

    function Insignia({titulo, imagem}) {
        return (
          <View style={styles.insignia}>
            <Image style={styles.insignia_image} source={{ uri: imagem}}/>
            <Text style={styles.insignia_title}>{titulo}</Text>
          </View>
        );
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu} onPress={goBack}>
                <Icon name="arrow-left" size={28} color="#fff" />  
                <Image source={logoImg} />  
            </TouchableOpacity>
            
            <Text style={styles.welcomeText}>Suas Conquistas</Text>

            <StatusBar style="auto" />

            <View style={styles.badgesContainer}>
                <FlatList
                        data={listaInsignias}
                        keyExtractor={ item => item.titulo}
                        renderItem={({ item }) => 
                            <Insignia
                                titulo={item.titulo}
                                imagem={item.imagem}
                            />
                        }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  menu:{
    paddingTop: 30,
    flexDirection:'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#45cbcd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    width:'100%'
  },
  badgesContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: '100%',
    width:'100%'
  },
  logoImg: {
      marginBottom: 16
  },
  welcomeText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff'
  },
  insignia: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 5,
    marginBottom: 10,
    marginTop: 10
  },
  insignia_title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20
  },
  insignia_image: {
    borderRadius: 0.1,
    width: 'auto',
    height: 100
  },
  botoesCompartilhar: {
    margin: 10,
    padding: 5,
    color: '#fafafa',
    flexDirection: 'column',
    width: '90%'
  },
  compartilharArvore: {
    borderWidth: 5,
    borderRadius: 20,
    marginBottom: 10,
    color: '#5AB792',
    width: '100%'        
 },
  compartilhar: {
    padding: 2,
    margin: 0,
    borderRadius: 20,
    color: '#faf0',
    width: '100%'  
  }
});
