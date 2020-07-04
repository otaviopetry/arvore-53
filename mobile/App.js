import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import logoImg from './src/assets/logo-arvore.png';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={logoImg} style={styles.logoImg} />
      <Text style={styles.welcomeText}>Primeira tela do desafio Árvore - Time 53!</Text>
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
