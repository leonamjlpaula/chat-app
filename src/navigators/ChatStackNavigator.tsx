import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatStack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <ChatStack.Navigator>
            <ChatStack.Screen name="ChatsList" component={} />
        </ChatStack.Navigator>
    );
}
