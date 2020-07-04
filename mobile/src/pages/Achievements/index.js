import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {    StyleSheet, 
            Text, 
            View, 
            Image, 
            TouchableOpacity, 
            FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function Achievements({listaInsignias}) {

    listaInsignias = [{titulo:"Vira-páginas", imagem:"../../assets/badge1"}, 
                      {titulo: "Multi-cultural", imagem:"../../assets/badge2"}];

    const navigation = useNavigation();

    function goBack () {
        navigation.goBack();
    }

    function Insignia({titulo, imagem}) {
        return (
          <View style={styles.insignia}>
            <Text style={styles.insignia_title}>{titulo}</Text>
            <Image style={styles.insignia_image} source={imagem} />
          </View>
        );
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrow-left" size={28} color="#fff" />    
            </TouchableOpacity>
            <Image source={logoImg} />
            <Text style={styles.welcomeText}>Tela de Conquistas</Text>
            <StatusBar style="auto" />
            <FlatList
                    data={listaInsignias}
                    renderItem={({ item }) => 
                        <Insignia
                            titulo={item.titulo}
                            imagem={item.imagem}
                        />
                    }
                />
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
  welcomeText: {
      fontWeight: 'bold',
      color: '#fff'
  },
  insignia: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  insignia_title: {
    fontWeight: 'bold',
    color: 'black'
  },
  insignia_image: {
    borderRadius: '0.2em'
  },

});
