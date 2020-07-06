import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../../services/api';

import styles from '../styles.js';

import logoImg from '../../../assets/logo-arvore.png';

export default function QuizQuestion01({ navigation }) {

    // navigate back
    function goBack () {
        navigation.goBack();
    }

    // initialize selected answer state
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    // question id
    const questionId = 4;

    // answers container
    const question = {
        id: questionId,
        question: 'Se você estivesse perdido na floresta, você...',
        answers: [
            {   
                id: 1,
                text: '...aproveitaria a natureza para organizar os pensamentos.',
                tags: [
                    'filosofia',
                    'autoconhecimento'
                ]
            },
            {
                id: 2,
                text: '... conjuraria um animal guardião.',
                tags: [
                    'fantasia'
                ]
            },
            {
                id: 3,
                text: '... obviamente, usaria sua bússola e anotações no seu mapa para se encontrar.',
                tags: [
                    'aventura',
                    'ciência'
                ]
            },
            {
                id: 4,
                text: '... iria até o fim para descobrir o paradeiro da Senhora Jameson',
                tags: [
                    'detetive',
                    'suspense'
                ]
            }
        ]
    };


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
                <Text style={styles.question}>{question.question}</Text>              
                
                <View style={styles.answerContainer}>
                    {question.answers.map( answer => (
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
    
                <TouchableOpacity onPress={ () => navigation.navigate('QuizFinalScreen')} style={styles.nextQuestion} >
                    <Text style={styles.nextQuestionText}>Próxima <Icon name="arrow-right" style={styles.nextQuestionIcon}  /></Text>
                </TouchableOpacity>
            </>
                        
        </SafeAreaView>
    );
}
