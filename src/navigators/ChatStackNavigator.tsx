import React from 'react';
import { ChatRoom, ChatsList } from '@app/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ChatStackParamList = {
    ChatsList: undefined;
    ChatRoom: { stringfiedChat: string };
    NewChat: undefined;
};

const ChatStack = createNativeStackNavigator<ChatStackParamList>();

export default function ChatStackNavigator() {
    return (
        <ChatStack.Navigator screenOptions={{ headerShown: false }}>
            <ChatStack.Screen name="ChatsList" component={ChatsList} />
            <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
        </ChatStack.Navigator>
    );
}
