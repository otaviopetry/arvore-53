import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

export default function Library({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-left" size={28} color="#fff" />
            <Text>Voltar para o Quiz</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Profile')}>
            <Icon name="arrow-right" size={28} color="#fff" />
            <Text>Ir para o perfil do aluno</Text> 
        </TouchableOpacity>

        <Text style={styles.mainText}>Tela da biblioteca</Text>
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
  mainText: {
      marginTop: 8,
      fontWeight: 'bold',
      color: '#fff'
  }
});
