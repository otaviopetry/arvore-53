import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function QuizWelcome({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Oi, Bianca! Este é o início do Pomar, sua jornada pela plataforma da Árvore. Vamos responder umas perguntinhas para começar seu perfil?</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('QuizQuestion01') }>
                    <Icon name="arrow-right" style={styles.startButton} />
                </TouchableOpacity>
            </View>
                        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45cbcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
      alignItems: 'center'
  },  
  welcomeText: {
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
  },
  startButton: {
      marginTop: 16,
      fontSize: 24,
      color: '#fff'
  }
});
