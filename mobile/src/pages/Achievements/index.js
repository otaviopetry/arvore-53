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
import badge1 from '../../assets/badge1.png';
import badge2 from '../../assets/badge2.png';

const IMAGE_PLACEHOLDER = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível";

export default function Achievements({listaInsignias}) {

    listaInsignias = [{titulo:"Vira-páginas", imagem:badge1}, 
                      {titulo: "Multi-cultural", imagem:badge2}];

    const navigation = useNavigation();

    function goBack () {
        navigation.goBack();
    }

    function Insignia({titulo, imagem}) {
        return (
          <View style={styles.insignia}>
            <Image style={styles.insignia_image} source={imagem}/>
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
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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

});
