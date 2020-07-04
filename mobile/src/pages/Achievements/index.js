import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import logoImg from '../../assets/logo-arvore.png';

export default function Achievements() {
    const navigation = useNavigation();

    function goBack () {
        navigation.goBack();
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-left" size={28} color="#fff" />    
        </TouchableOpacity>
        <Image source={logoImg} />
        <Text style={styles.welcomeText}>Tela de Conquistas</Text>
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
