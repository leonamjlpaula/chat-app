import React from 'react';
import { useAuth } from '@app/context/AuthProvider';

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

export default function AppRoutes() {
    const { user } = useAuth();

    if (user) return <TabNavigator />;

    return <AuthStack />;
}
