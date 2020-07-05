import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export default function QuizWelcome({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Pronto! Agora a Árvore terá a sua cara :D</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('Library') }>
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
