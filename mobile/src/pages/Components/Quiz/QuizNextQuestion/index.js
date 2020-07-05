import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles.js'

export default function NextQuestion ({navigation, id}) {
    return (
        <TouchableOpacity onPress={ () => navigation.navigate(`QuizQuestion${id}`)} style={styles.nextQuestion} >
            <Text style={styles.nextQuestionText}>Próxima <Icon name="arrow-right" style={styles.nextQuestionIcon}  /></Text>
        </TouchableOpacity>
    );
}