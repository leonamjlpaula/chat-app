import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Avatar, ChatListItem, CircleLogo } from '../../components';
import { Container } from '../../designSystem';

import { Header, Title } from './styles';

const mockChats: Chat[] = [
    {
        avatars: [],
        chatName: 'Chat #1',
        createdAt: new Date(),
        id: '1',
        lastMessage: 'Hi there!',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #2',
        createdAt: new Date(),
        id: '2',
        lastMessage: 'Hi there!',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '3',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '4',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '5',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '6',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '7',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '8',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '9',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '10',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
    {
        avatars: [],
        chatName: 'Chat #3',
        createdAt: new Date(),
        id: '11',
        lastMessage:
            'Hi there! This is a very long last message for a day at one farm in the middle of nothing',
        updatedAt: new Date(),
        users: [],
    },
];

const ChatsList = () => {
    const [chats, setChats] = useState<Chat[]>(mockChats);

    return (
        <Container>
            <Header>
                <CircleLogo />
                <Title>Messages</Title>
                <Avatar
                    avatarURL="https://www.shareicon.net/data/256x256/2016/07/05/791214_man_512x512.png"
                    size={32}
                />
            </Header>
            <FlatList
                data={chats}
                renderItem={({ item }) => <ChatListItem {...item} />}
                keyExtractor={({ id }) => id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
};

export default ChatsList;
