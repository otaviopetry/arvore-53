import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
      color: '#fff'
  },
  nextQuestionText: {
      color: '#fff',
      fontSize: 18
  },
  nextQuestionIcon: {
      fontSize: 18
  }
});
