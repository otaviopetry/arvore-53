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

    <SafeAreaView style={styles.container}>

        <View style={styles.header}>
            <View style={styles.summary}>
                <Image source={AvatarPlaceholder} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                    <View>
                        <Text>Bianca</Text>
                        <Text>1º ano - Colégio Santa Maria</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Icon name="alert-octagon" style={styles.icon} />
                        <Icon name="anchor" style={styles.icon} />
                        <Icon name="archive" style={styles.icon} />
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.bookshelf}>
            <Text>Minha estante</Text>
            <View style={styles.theActualShelf}>
                <Text>Livros da estante</Text>
            </View>            
        </View>

        <View style={styles.whatImReading}>
            <Text>O que estou lendo</Text>
            <View style={styles.theBook}>
                <Image source={AvatarPlaceholder} />
                <View style={styles.theBook}>
                    <View>
                        <Text style={styles.theBookTitle}>A volta ao mundo em 80 dias</Text>
                        <Text style={styles.theBookAuthor}>Julio Verne</Text>
                    </View>
                </View>
            </View>
        </View>
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
        padding: 8,
        backgroundColor: '#45cbcd',
        },
        logoImg: {
            marginBottom: 16
        },
        mainText: {
            marginTop: 8,
            fontWeight: 'bold',
            color: '#fff'
    },
    header: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 8,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'row'
        
    },
    summary: {
        flexDirection: 'row'
    },
    userAvatar: {
        marginRight: 8
    },
    badgeContainer: {
        flexDirection: 'row'
    },
    bookshelf: {
        borderWidth: 1,
        padding: 2
    },
    theActualShelf: {

    },
    whatImReading: {
        borderWidth: 1,
        padding: 2
    },
    theBook: {
        marginTop: 8,
        flexDirection: 'row'
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
