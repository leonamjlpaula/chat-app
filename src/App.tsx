import React, { useEffect } from 'react';
import { AuthProvider } from '@app/context/AuthProvider';
import { defaultTheme } from '@app/styles/defaultTheme';
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

import { AppRoutes } from './navigators';

export default function App() {
    //TODO: Remove
    useEffect(() => {
        firestore().settings({
            persistence: false,
        });
    }, []);

    return (
        <NavigationContainer>
            <ThemeProvider theme={defaultTheme satisfies DefaultTheme}>
                <AuthProvider>
                    <AppRoutes />
                </AuthProvider>
            </ThemeProvider>
        </NavigationContainer>
    );
}
