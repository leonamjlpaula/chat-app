import React from 'react';
import { SignIn, SignUp } from '@app/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    );
}
