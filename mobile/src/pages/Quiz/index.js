import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import welcomeIllustration from '../../assets/pomar-welcome-illustration.png';

export default function QuizWelcome({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <View style={styles.welcome}>
                <Image source={welcomeIllustration} style={styles.illustration} />
                <Text style={styles.welcomeTitle}>Oi, Bianca!</Text>
                <Text style={styles.welcomeText}>Este é o início do Pomar, sua jornada aqui na Árvore. Tenho certeza que você vai aproveitar muito e plantar várias sementinhas por aí.</Text>
                <Text style={styles.welcomeDescription}>Tenho algumas perguntinhas para conhecer você melhor e poder te sugerir leituras.</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('QuizQuestion1') }>
                    <Text style={styles.startButton}>Vamos lá?</Text>
                </TouchableOpacity>
            </View>
                        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
      alignItems: 'center'
  },
  illustration: {
      marginBottom: 32
  },
  welcomeTitle: {
      marginBottom: 8,
      fontSize: 32,
      color: "#006266"
  },
  welcomeText: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#006266"
  },
  welcomeDescription: {
      textAlign: 'center',
      marginTop: 8
  },
  startButton: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: '#45cbcd',
      padding: 16,
      marginTop: 32,
      borderRadius: 16,
      color: '#fff'
}
});
