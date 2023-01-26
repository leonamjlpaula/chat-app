import React from 'react';
import { AuthProvider } from '@app/context/AuthProvider';
import { defaultTheme } from '@app/styles/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import { AppRoutes } from './navigators';

export default function App() {
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
