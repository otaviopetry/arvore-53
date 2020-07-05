import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../../services/api';

import logoImg from '../../../assets/logo-arvore.png';

export default function QuizWelcome({ navigation }) {

    // navigate back
    function goBack () {
        navigation.goBack();
    }

    // answers container
    const answers = [
        {   
            id: 1,
            text: 'Os dois homens se materializaram inesperedamente.',
            tags: [
                'fantasia'
            ]
        },
        {
            id: 2,
            text: 'Ela era a participante de estudo favorita dos cientistas.',
            tags: [
                'ciências'
            ]
        },
        {
            id: 3,
            text: 'Como estou contente de ter partido! Ah, meu amigo, o que é o coração humano!',
            tags: [
                'prosa'
            ]
        },
        {
            id: 4,
            text: 'Entra Ricardo, Duque de Gloucester, sozinho.',
            tags: [
                'arte',
                'drama'
            ]
        }
    ];

    const [selectedAnswer, setSelectedAnswer] = useState([]);

    function handleSelectAnswer (id) {

        if ( selectedAnswer === id) {
            setSelectedAnswer([]);
            console.log(selectedAnswer);
        } else {
            setSelectedAnswer([id]);
            console.log(selectedAnswer);
        }

    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" backgroundColor="#45cbcd" />

            <>
                <Text style={styles.question}>Qual destes inícios de livro te dão mais vontade de continuar?</Text>              
                
                <View style={styles.answerContainer}>
                    {answers.map ( answer => (
                        <TouchableOpacity 
                            key={answer.id} 
                            style={[
                                styles.answer,
                                selectedAnswer[0] === answer.id ? styles.selectedAnswer : {}
                            ]}
                            onPress={ () => handleSelectAnswer(answer.id) }
                            activeOpacity={0.9}
                        >
                            <Text 
                                style={[
                                    styles.answerText,
                                    selectedAnswer[0] === answer.id ? styles.selectedAnswerText : {}
                                ]}
                            >
                                {answer.text}
                            </Text>                            
                        </TouchableOpacity>                            
                    ))}
                </View>
    
                <TouchableOpacity onPress={ () => navigation.navigate('QuizQuestion2') }>
                    <Icon name="arrow-right" style={styles.nextQuestion} />
                </TouchableOpacity>
            </>
                        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45cbcd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  welcome: {
      alignItems: 'center'
  },  
  question: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 16
  },
  answerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
  },
  answer: {
      height: 80,
      width: '100%',
      padding: 16,
      marginVertical: 8,
      borderWidth: 2,
      borderColor: '#fff',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center'
  },
  selectedAnswer: {
      backgroundColor: '#fff'
  },
  answerText: {
      textAlign: 'center',
      color: '#fff'
  },
  selectedAnswerText: {
      color: '#45cbcd'
  },
  nextQuestion: {
      marginTop: 16,
      fontSize: 24,
      color: '#fff'
  }
});
