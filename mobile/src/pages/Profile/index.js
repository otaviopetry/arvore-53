import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AvatarPlaceholder from '../../assets/avatar-placeholder.png';

export default function Profile({ navigation }) {

    function goBack () {
        navigation.goBack();
    }

    return (

    /* Big container */
    <SafeAreaView style={styles.container}>

        <StatusBar style="light" backgroundColor="#45cbcd" />

        { /* Profile Header: Avatar, Name, School and Badges */ }
        <View style={styles.header}>

            <View style={styles.linkGoBack}>
                <TouchableOpacity onPress={ goBack }>
                    <Icon name="arrow-left" size={20} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.userContainer}>
                <View style={styles.summary}>
                    <View style={styles.avatarContainer}>
                        <Image source={AvatarPlaceholder} style={styles.userAvatar} />
                    </View>
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.userName}>Bianca</Text>
                            <Text style={styles.userTag}>Viajante do Tempo</Text>
                            <Text style={styles.userText}>Colégio Leonardo da Vinci</Text>
                            <Text style={styles.userText}>1º ano A - Médio</Text>
                        </View>                  
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.badgesContainer}>
            <View style={styles.badges}>
                <Image style={styles.badge} source={{ uri: 'http://192.168.0.102:3333/journey/badges/badge-le-de-tudo.png' }} />
                <Image style={styles.badge} source={{ uri: 'http://192.168.0.102:3333/journey/badges/badge-multicultural.png' }} />
                <Image style={styles.badge} source={{ uri: 'http://192.168.0.102:3333/journey/badges/badge-100porcento-fiel.png' }} />
                
            </View>
        </View>

        { /* What I'm Reading section */ }
        <View style={styles.whatImReading}>
            <Text style={styles.sectionTitle}>O que estou lendo</Text>
            <TouchableOpacity style={styles.theBook} onPress={ () => navigation.navigate('Book')}>
                <View style={{width: '30%', marginRight: 16}}>
                    <Image style={styles.bookCover} source={{ uri: 'http://192.168.0.102:3333/uploads/book-cover-Julio-Verne-01.jpeg' }} />
                </View>
                <View style={styles.theBook}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.theBookTitle}>A volta ao mundo em 80 dias</Text>
                        <Text style={styles.theBookAuthor}>Julio Verne</Text>
                        <Text style={styles.theBookSynopsis}>Lorem Ipsum dolor sit amet consectetur adipiscing elit</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

        { /* User Bookshelf */ }
        <View style={styles.bookshelf}>
            <Text>Minha estante</Text>
            <View style={styles.theActualShelf}>
                <Text>Livros da estante</Text>
            </View>            
        </View>

        

        { /* What I'm recommending section */ }
        <View style={styles.whatImRecommending}>
            <Text>O que eu indico</Text>
            <View style={styles.recommendedBooksContainer}>
                <View style={styles.recommendedBook}>
                    <Text>Livro 1</Text>
                    <Text>Sinopse do livro 1</Text>
                </View>
                <View style={styles.recommendedBook}>
                    <Text>Livro 2</Text>
                    <Text>Sinopse do livro 2</Text>
                </View>
                <View style={styles.recommendedBook}>
                    <Text>Livro 3</Text>
                    <Text>Sinopse do livro 3</Text>
                </View>
            </View>
        </View>
        
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#eee'
    },
    bookCover: {
        width: '100%',
        height: 200
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    mainText: {
        marginTop: 8,
        fontWeight: 'bold',
        color: '#fff'
    },
    header: {
        backgroundColor: '#c7ecee',
        paddingBottom: 64
    },
    linkGoBack: {
        marginTop: 16,
        marginLeft: 8
    },
    avatarContainer: {
        marginLeft: 16
    },
    userContainer: {
        alignItems: 'stretch',
        marginTop: 16,        
        flexDirection: 'row'
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006266'
    },
    userTag: {
        fontSize: 16,
        color: '#006266',
        fontStyle: 'italic',
        marginBottom: 8
    },
    summary: {
        flexDirection: 'row'
    },
    userAvatar: {
        marginRight: 16
    },
    badgesContainer: {
        alignItems: 'center',
        marginBottom: 16
    },
    badges: {
        marginTop: -24,
        marginBottom: 16,
        paddingHorizontal: 16,
        height: 48,
        backgroundColor: '#55adc1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 40
    },
    badge: {
        width: 96,
        height: 96,
        marginHorizontal: 8
    },
    icon: {
        fontSize: 36,
        marginHorizontal: 8
    },
    bookshelf: {
        padding: 2
    },
    theActualShelf: {

    },
    whatImReading: {
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    theBook: {
        marginTop: 8,
        flexDirection: 'row',
        flexShrink: 1
    },
    theBookTitle: {
        fontSize: 24,
        color: '#006266',
        fontWeight: 'bold'
    },
    theBookSynopsis: {
        flexShrink: 1
    },
    whatImRecommending: {
        borderWidth: 1,
        padding: 2
    },
    recommendedBooksContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    recommendedBook: {
        marginRight: 8
    }
});
