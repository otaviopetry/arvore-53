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
    const questionId = 2;

    // answers container
    const question = {
        id: questionId,
        question: 'Qual destes personagens é o seu favorito?',
        answers: [
            {   
                id: 1,
                text: 'Harry Potter',
                tags: [
                    'fantasia'
                ]
            },
            {
                id: 2,
                text: 'Anne with an E',
                tags: [
                    'drama',
                    'romance'
                ]
            },
            {
                id: 3,
                text: 'Spider-man',
                tags: [
                    'aventura'
                ]
            },
            {
                id: 4,
                text: 'Sherlock Holmes',
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
    
                <TouchableOpacity onPress={ () => navigation.navigate(`QuizQuestion${questionId+1}`)} style={styles.nextQuestion} >
                    <Text style={styles.nextQuestionText}>Próxima <Icon name="arrow-right" style={styles.nextQuestionIcon}  /></Text>
                </TouchableOpacity>
            </>
                        
        </SafeAreaView>
    );
}
