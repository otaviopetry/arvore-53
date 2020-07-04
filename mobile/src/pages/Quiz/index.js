import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function Achievements({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-left" size={28} color="#fff" />
            <Text>Voltar para o início</Text>   
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Library')}>
            <Icon name="arrow-right" size={28} color="#fff" />
            <Text>Ir para Biblioteca</Text>
        </TouchableOpacity>

        <Image source={logoImg} />
        <Text style={styles.welcomeText}>Tela inicial do Quiz</Text>
        <StatusBar style="auto" />
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
  }
});
