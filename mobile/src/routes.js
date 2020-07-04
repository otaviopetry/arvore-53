import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import FirstPage from './pages/FirstPage';
import Library from './pages/Library';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="FirstPage" component={FirstPage} />
                <AppStack.Screen name="Library" component={Library} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}