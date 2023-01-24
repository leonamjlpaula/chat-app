import React from 'react';
import { ChatRoom, ChatsList } from '@app/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChatStack = createNativeStackNavigator();

export default function ChatStackNavigator() {
    return (
        <ChatStack.Navigator screenOptions={{ headerShown: false }}>
            <ChatStack.Screen name="ChatsList" component={ChatsList} />
            <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
        </ChatStack.Navigator>
    );
}
