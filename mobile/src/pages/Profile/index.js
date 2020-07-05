import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AvatarPlaceholder from '../../assets/avatar-placeholder.png';

const user = {
    name: 'Bianca',
    vocation: 'Viajante do Tempo',
    schoolInfo: {
        school: 'Colégio Leonardo da Vinci',
        year: '1º ano A - Ensino Médio'
    },
    badges: [
        {
            id: 1,
            name: 'Lê de tudo',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-le-de-tudo.png'
        },
        {
            id: 2,
            name: 'Multicultural',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-multicultural.png'
        },
        {
            id: 3,
            name: '100% fiel',
            image_uri: 'http://192.168.0.102:3333/journey/badges/badge-100porcento-fiel.png'
        }
    ],
    whatImReading: {
        title: 'A volta ao mundo em 80 dias',
        author: 'Julio Verne',
        synopsis: 'Lorem ipsum dolor sit amet consectetur',
        image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Julio-Verne-01.jpeg'
    },
    myBookshelf: [
        {
            id: 1,
            name: 'Alice no País das Maravilhas',
            author: 'Lewis Carrol',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Lewis-Caroll-01.jpg'
        },
        {
            id: 2,
            name: 'Oliver Twist',
            author: 'Charles Dickens',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Charles-Dickens-01.jpg'
        },
        {
            id: 3,
            name: 'A ilha do tesouro',
            author: 'Robert Louis Stevensson',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Robert-Stevensson-01.jpg'
        },
        {
            id: 4,
            name: 'Que lindo é o seu jardim',
            author: 'Agatha Christie',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Agatha-Christie-01.jpg'
        },
        {
            id: 5,
            name: 'As aventuras de Robinson Crusoé',
            author: 'Daniel Defoe',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Daniel-Defoe-01.jpg'
        },
        {
            id: 6,
            name: 'Mulherzinhas',
            author: 'Louisa May Alcott',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Louisa-May-Alcott.jpg'
        }
    ],
    whatImRecommending: [
        {
            id: 6,
            name: 'Mulherzinhas',
            author: 'Louisa May Alcott',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Louisa-May-Alcott.jpg'
        },
        {
            id: 5,
            name: 'As aventuras de Robinson Crusoé',
            author: 'Daniel Defoe',
            image_uri: 'http://192.168.0.102:3333/uploads/book-cover-Daniel-Defoe-01.jpg'
        }
    ],
    tags: [
        'aventura',
        'história',
        'ciências',
        'suspense',
        'autores antigos'
    ]
}

export default function Profile({ navigation }) {    

    function goBack () {
        navigation.goBack();
    }

    return (

    /* Big container */
    <SafeAreaView style={styles.container}>

        <StatusBar style="light" backgroundColor="#45cbcd" />

        <ScrollView>
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
                                <Text style={styles.userName}>{user.name}</Text>
                                <Text style={styles.userTag}>{user.vocation}</Text>
                                <Text style={styles.userText}>{user.schoolInfo.school}</Text>
                                <Text style={styles.userText}>{user.schoolInfo.year}</Text>
                            </View>                  
                        </View>
                    </View>
                </View>
            </View>
    
            <TouchableOpacity onPress={ () => navigation.navigate('Achievements')}>
                <View style={styles.badgesContainer}>
                    
                        <View style={styles.badges}>
                            
                            {user.badges.map( badge => (
                                <Image key={badge.id} style={styles.badge} source={{ uri: badge.image_uri  }} />
                            ))}
                            
                        </View>
                </View>
            </TouchableOpacity>

    
            { /* What I'm Reading section */ }
            <View style={styles.whatImReading}>
                <Text style={styles.sectionTitle}>O que estou lendo</Text>
                <TouchableOpacity style={styles.theBook} onPress={ () => navigation.navigate('Book')}>
                    <View style={{width: '30%', marginRight: 16}}>
                        <Image style={styles.bookCover} source={{ uri: user.whatImReading.image_uri }} />
                    </View>
                    <View style={styles.theBook}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.theBookTitle}>{user.whatImReading.title}</Text>
                            <Text style={styles.theBookAuthor}>{user.whatImReading.author}</Text>
                            <Text style={styles.theBookSynopsis}>{user.whatImReading.synopsis}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    
            { /* User Bookshelf */ }
            <View style={styles.bookshelf}>
                <Text style={styles.sectionTitle}>Minha estante</Text>
                <Text style={styles.sectionSubtitle}>Livros que completei</Text>
                <ScrollView style={styles.theActualShelf} horizontal>                    
                    { user.myBookshelf.map( book => (
                        <View key={book.id} style={styles.book}>
                            <Image style={styles.bookshelfBook} source={{ uri: book.image_uri }} />
                        </View>
                    ))}                    
                </ScrollView>            
            </View>
    
            
    
            { /* What I'm recommending section */ }
            <View style={styles.whatImRecommending}>
                <Text style={styles.sectionTitle}>O que eu indico</Text>
                <Text style={styles.sectionSubtitle}>Livros que me marcaram</Text>
                <View style={styles.recommendedBooksContainer}>
                    { user.whatImRecommending.map( book => (
                        <View key={book.id}>
                            <Image style={styles.recommendedBook} source={{ uri: book.image_uri }} />
                        </View>  
                    ))}
                                      
                </View>
            </View>
            
            { /* User reading habits tags */ }
            <View style={styles.tags}>
                <Text style={styles.sectionTitle}>Tags de interesse</Text>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>Aventura</Text>                  
                    <Text style={styles.tag}>História</Text>                  
                    <Text style={styles.tag}>Ciências</Text>                  
                    <Text style={styles.tag}>Suspense</Text>                  
                    <Text style={styles.tag}>Autores antigos</Text>                  
                </View>                           
            </View>

            
        </ScrollView>
        
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e1efef'
    },
    bookCover: {
        width: '100%',
        height: 200
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    sectionSubtitle: {
        marginBottom: 8,
        fontSize: 13,
        fontStyle: 'italic'
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
        padding: 16
    },
    book: {
        marginRight: 8
    },
    bookshelfBook: {
        width: 110,
        height: 180
    },
    whatImReading: {
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    theBook: {
        flexDirection: 'row',
        flexShrink: 1,
        marginTop: 8
    },
    theBookTitle: {
        fontSize: 24,
        color: '#006266',
        fontWeight: 'bold'
    },
    theBookAuthor: {
        fontWeight: 'bold'
    },
    theBookSynopsis: {
        flexShrink: 1
    },
    whatImRecommending: {
        padding: 16,
        backgroundColor: '#eee'        
    },
    recommendedBooksContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    recommendedBook: {
        marginRight: 8,
        width: 120,
        height: 190
    },
    tags: {
        padding: 16
    },
    tagContainer: {
        marginTop: 8,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: '#fff',
        color: '#006266',
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 16,
        flexWrap: 'wrap',
        textTransform: 'lowercase'
    }
});
