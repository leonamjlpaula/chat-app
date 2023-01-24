import React from 'react';
import { SignIn, SignUp } from '@app/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatStack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <ChatStack.Navigator screenOptions={{ headerShown: false }}>
            <ChatStack.Screen name="SignIn" component={SignIn} />
            <ChatStack.Screen name="SignUp" component={SignUp} />
        </ChatStack.Navigator>
    );
}
