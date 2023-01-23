import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ChatListItem, CircleLogo } from '@app/components';
import { Container } from '@app/designSystem';
import firestore from '@react-native-firebase/firestore';

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

    useEffect(() => {
        // firestore()
        //     .collection('users')
        //     .get()
        //     .then(queySnapshot => {
        //         queySnapshot.forEach(snapshot => {
        //             console.log(snapshot.data());
        //         });
        //     });
    }, []);

    return (
        <Container>
            <Header>
                <CircleLogo />
                <Title>Messages</Title>
                <Avatar
                    avatarURL="https://api.dicebear.com/5.x/pixel-art/png?seed=Jane"
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
