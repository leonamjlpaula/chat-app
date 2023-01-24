import React from 'react';
import { AuthStack } from '@app/navigators';
import { defaultTheme } from '@app/styles/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={defaultTheme satisfies DefaultTheme}>
                <AuthStack />
            </ThemeProvider>
        </NavigationContainer>
    );
}
