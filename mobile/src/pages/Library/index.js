import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

import BookPlaceholder from '../../assets/placeholder-book-cover.png';
import SmallBookPlaceholder from '../../assets/placeholder-smallbook.png';

export default function Library({ navigation }) {

    const [searchText, setSearchText] = React.useState('')

    function goBack () {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchText}
                        placeholder={'Pesquise pelo título, autor, categoria e etc.'}
                        onChangeText={text => setSearchText(text)}
                    />
                    <ScrollView 
                        horizontal
                        style={styles.pageNavigation}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity>
                            <Text style={styles.menuLink}>Explorar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => navigation.navigate('Profile')}>
                            <Text style={styles.menuLink}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuLink}>Offline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuLink}>Favoritos</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.libraryMainContent}>
    
                    <View style={styles.featuredBooksSection}>
                        <Text style={styles.title}>Sugestões para você</Text>
    
                        <ScrollView horizontal>
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                        </ScrollView>
                    </View>
    
                    <View style={styles.featuredBooksSection}>
                        <Text style={styles.title}>Destaques</Text>
    
                        <ScrollView horizontal>
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                            <Image source={BookPlaceholder} style={styles.libraryBook} />
                        </ScrollView>
                    </View>
    
                    <View style={styles.featuredBooksSection}>
                        <Text style={styles.title}>Continuar lendo</Text>
    
                        <ScrollView horizontal>
                            <Image source={SmallBookPlaceholder} style={styles.libraryBook} />
                            <Image source={SmallBookPlaceholder} style={styles.libraryBook} />
                            <Image source={SmallBookPlaceholder} style={styles.libraryBook} />
                            <Image source={SmallBookPlaceholder} style={styles.libraryBook} />
                        </ScrollView>
                    </View>
    
    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: Constants.statusBarHeight + 20,
    width: '100%',
    backgroundColor: '#45cbcd',
    padding: 8
  },
  searchInput: {
      backgroundColor: '#fff',
      padding: 8,
      marginBottom: 8,
      marginHorizontal: 4,
      borderRadius: 5
  },
  pageNavigation: {
      paddingVertical: 12,
  },
  menuLink: {
      marginRight: 24,
      textTransform: 'uppercase',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20
  },
  libraryMainContent: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      padding: 8
  },
  title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16
  },
  featuredBooksSection: {
      paddingTop: 16,
      marginBottom: 24
  },
  libraryBook: {
      marginRight: 8
  }
});
