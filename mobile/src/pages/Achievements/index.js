import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {    StyleSheet, 
            Text, 
            View, 
            Image, 
            TouchableOpacity
        } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default function Achievements({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    const badges = [
        {
            id: 1,
            name: 'Lê de tudo',
            description: 'Você não se contenta com um gênero apenas e lê qualquer assunto que apareça na sua frente.',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-le-de-tudo.png'
        },
        {
            id: 2,
            name: 'Multicultural',
            description: 'Você já leu livros de autores dos cinco continentes!',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-multicultural.png'
        },
        {
            id: 3,
            name: '100% fiel',
            description: 'Você leu todos os dias de uma semana.',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-100porcento-fiel.png'
        },
        {
            id: 4,
            name: 'Vira-páginas',
            description: 'Alguém se concentrou na história e leu por 2 horas seguidas!',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-vira-pagina.png'
        }
    ];

    

    return (
        <View style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <View style={styles.header}>
                <TouchableOpacity onPress={ goBack }>
                    <Icon name="arrow-left" size={20} />
                </TouchableOpacity>
    
                <Text style={styles.pageTitle}>Suas Conquistas</Text>
            </View>
            

            <View style={styles.badgesContainer}>
                { badges.map( badge => (
                    <View 
                        key={badge.id} 
                        style={[
                            styles.badgeSquare,
                            badge.id <= 3 ? styles.selectedBadge : {}
                        ]}
                    >
                        <Image source={{ uri: badge.image_uri }} style={styles.badge} />
                        <View style={styles.badgeInfo}>
                            <Text style={styles.badgeTitle}>{badge.name}</Text>
                            <Text style={styles.badgeDescription}>{badge.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    paddingTop: 32,
    marginBottom: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#c7ecee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    width:'100%'
  },
  badgesContainer: {
    flex: 1,
    margin: 10,
    height: '100%',
    width:'100%'
  },
  logoImg: {
      marginBottom: 16
  },
  pageTitle: {
      textAlign: 'center',
      width: '100%',
      marginLeft: -16,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#006266'
  },
  badgeSquare: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 24,
      marginBottom: 16,
      borderRadius: 8,
      flexShrink: 1
  },
  badge: {
    width: 96,
    height: 96
  },
  badgeInfo: {
      flexShrink: 1,
      marginLeft: 8
  },
  badgeTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#006266'
  },
  selectedBadge: {
      borderWidth: 1.25,
      borderColor: '#006266'
  }
});
