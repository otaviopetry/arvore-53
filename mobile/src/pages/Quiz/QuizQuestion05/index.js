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
    const questionId = 5;

    // answers container
    const question = {
        id: questionId,
        question: 'Abacate?',
        answers: [
            {   
                id: 1,
                text: 'Maçã',
                tags: [
                    'história'
                ]
            },
            {
                id: 2,
                text: 'Pera',
                tags: [
                    'fantasia'
                ]
            },
            {
                id: 3,
                text: 'Uva',
                tags: [
                    'aventura',
                    'ciência'
                ]
            },
            {
                id: 4,
                text: 'Bergamota',
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
