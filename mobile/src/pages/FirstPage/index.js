import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import logoArvore from '../../assets/logo-arvore.png';
import logoPomar from '../../assets/logo-projeto-pomar.png';

export default function FirstPage( { navigation }) {        

    return (
    <View style={styles.container}>
        <Image source={logoPomar} style={styles.logoPomar} />
        <TextInput
            style={styles.loginInput}
            placeholder={'Seu código de acesso'}
        />
        <StatusBar style="auto" />
        
        <TouchableOpacity onPress={ () => navigation.navigate('Quiz')} style={styles.loginButton}>
            <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <Image source={logoArvore} style={styles.logoArvore} />

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E6D67',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    logoPomar: {
        marginBottom: 16
    },
    welcomeText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    loginInput: {
        backgroundColor: '#fff',
        padding: 8,
        marginBottom: 32,
        marginHorizontal: 4,
        borderRadius: 5,
        width: 300,
        textAlign: 'center'
    },
    loginButton: {
        width: 100,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8
    },
    loginText: {
        textAlign: 'center',
        color: '#fff'
    },
    logoArvore: {
        position: 'absolute',
        bottom: 40,
        width: 130,
        height: 30
    }
});
