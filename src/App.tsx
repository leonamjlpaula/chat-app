import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

import { defaultTheme } from './styles/defaultTheme';
import { TabNavigator } from './navigators';

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider theme={defaultTheme satisfies DefaultTheme}>
                <TabNavigator />
            </ThemeProvider>
        </NavigationContainer>
    );
}
