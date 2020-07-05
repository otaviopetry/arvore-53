import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import FirstPage from './pages/FirstPage';
import Library from './pages/Library';
import Quiz from './pages/Quiz';
import QuizQuestion1 from './pages/Quiz/QuizQuestion01';
import QuizQuestion2 from './pages/Quiz/QuizQuestion02';
import QuizQuestion3 from './pages/Quiz/QuizQuestion03';
import QuizQuestion4 from './pages/Quiz/QuizQuestion04';
import QuizQuestion5 from './pages/Quiz/QuizQuestion05';
import QuizFinalScreen from './pages/Quiz/QuizFinalScreen';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Bookshelf from './pages/Bookshelf';
import Book from './pages/Book';
import BooksRead from './pages/BooksRead';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>                
                <AppStack.Screen name="FirstPage" component={FirstPage} />
                <AppStack.Screen name="Quiz" component={Quiz} />
                <AppStack.Screen name="QuizQuestion1" component={QuizQuestion1} />
                <AppStack.Screen name="QuizQuestion2" component={QuizQuestion2} />
                <AppStack.Screen name="QuizQuestion3" component={QuizQuestion3} />
                <AppStack.Screen name="QuizQuestion4" component={QuizQuestion4} />
                <AppStack.Screen name="QuizQuestion5" component={QuizQuestion5} />
                <AppStack.Screen name="QuizFinalScreen" component={QuizFinalScreen} />
                <AppStack.Screen name="Library" component={Library} />
                <AppStack.Screen name="Profile" component={Profile} />                       
                <AppStack.Screen name="Achievements" component={Achievements} />                       
                <AppStack.Screen name="Bookshelf" component={Bookshelf} />                     
                <AppStack.Screen name="Book" component={Book} />
                <AppStack.Screen name="BooksRead" component={BooksRead} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}