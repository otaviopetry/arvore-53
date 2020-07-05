import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import FirstPage from './pages/FirstPage';
import Library from './pages/Library';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Bookshelf from './pages/Bookshelf';
import Book from './pages/Book';
import BooksRead from './pages/BooksRead'
import Achievements from './pages/Achievements';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>                
                <AppStack.Screen name="FirstPage" component={FirstPage} />
                <AppStack.Screen name="Quiz" component={Quiz} />
                <AppStack.Screen name="Library" component={Library} />
                <AppStack.Screen name="Profile" component={Profile} />                       
                <AppStack.Screen name="Achievements" component={Achievements} />                       
                <AppStack.Screen name="Bookshelf" component={Bookshelf} />                     
                <AppStack.Screen name="Book" component={Book} />
                <AppStack.Screen name="BooksRead" component={BooksRead} />
                <AppStack.Screen name="Achievements" component={Achievements} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}