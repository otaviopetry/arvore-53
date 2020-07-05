import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

import illustration from '../../../assets/quiz-finalscreen-illustration.png';
import logoPomar from '../../../assets/logo-pomar-escuro.png';


export default function QuizWelcome({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <Image source={logoPomar} style={styles.logoPomar} />
            

            <View style={styles.welcome}>
                <Text style={styles.title}>Tudo pronto para você!</Text>
                <Text style={styles.titleDescription}>Venha ver alguma das sementinhas que separamos pra você cultivar seu próprio pomar de boas leituras.</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('Library') }>
                    <Text style={styles.startButton}>Começar</Text>
                </TouchableOpacity>
            </View>

            <Image source={illustration} style={styles.illustration} />
                        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1efef',
    alignItems: 'center',
    padding: 16,
    paddingTop: Constants.statusBarHeight + 60
  },
  logoPomar: {
      width: 120,
      height: 30
  },
  welcome: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      marginTop: 80
  },  
  title: {
      fontWeight: 'bold',
      color: '#3c2a68',
      textAlign: 'center',
      fontSize: 40,
      textAlign: 'left',
      marginBottom: 16
  },
  startButton: {
      textAlign: 'left',
      marginTop: 16,
      fontSize: 20,
      backgroundColor: '#3c2a68',
      color: '#fff',
      borderRadius: 32,
      padding: 24,
      marginTop: 80
  },
  illustration: {
      position: 'absolute',
      bottom: 0
  }
});
