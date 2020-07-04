import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo-arvore.png';

export default function FirstPage( { navigation }) {        

    return (
    <View style={styles.container}>
        <Image source={logoImg} style={styles.logoImg} />
        <Text style={styles.welcomeText}>Primeira tela do desafio Árvore - Time 53!</Text>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={ () => navigation.navigate('Quiz')}>
            <Text>Começar</Text>
        </TouchableOpacity>

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
