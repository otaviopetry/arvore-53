import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../../services/api';

import styles from '../styles.js';

import logoImg from '../../../assets/logo-arvore.png';

import NextQuizQuestion from '../../Components/Quiz/QuizNextQuestion';

export default function QuizQuestion01({ navigation }) {

    // navigate back
    function goBack () {
        navigation.goBack();
    }

    // initialize selected answer state
    const [selectedAnswer, setSelectedAnswer] = useState(['0']);

    // question id
    const questionId = 1;

    // answers container
    const question = {
        id: 1,
        question: 'Qual destes inícios de livro te dão mais vontade de continuar?',
        answers: [
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

                <TouchableOpacity onPress={ () => navigation.navigate(`QuizQuestion${questionId+1}`) } style={styles.nextQuestion} >
                    <Text style={styles.nextQuestionText}>Próxima <Icon name="arrow-right" style={styles.nextQuestionIcon}  /></Text>
                </TouchableOpacity>
    
                
            </>
                        
        </SafeAreaView>
    );
}
