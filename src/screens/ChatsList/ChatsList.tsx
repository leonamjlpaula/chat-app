import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ChatListItem, CircleLogo } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Container } from '@app/designSystem';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import isAfter from 'date-fns/isAfter';

import { Header, Title } from './styles';

const ChatsList = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useAuth();

    const onSnapshot = (
        querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    ) => {
        if (!querySnapshot) return;
        const newChats: Chat[] = [];
        querySnapshot.forEach(snapshot => {
            const {
                avatars,
                createdAt,
                updatedAt,
                chatName,
                hash,
                lastMessage,
                users,
            } = snapshot.data();
            const chat = {
                id: snapshot.id,
                avatars,
                createdAt: createdAt.toDate(),
                updatedAt: updatedAt.toDate(),
                chatName,
                hash,
                lastMessage,
                users,
            };
            newChats.push(chat);
        });
        const sortedChats = newChats.sort((a, b) =>
            isAfter(a.updatedAt, b.updatedAt) ? -1 : 1,
        );

        setChats(sortedChats);
    };

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('chats')
            .where('users', 'array-contains', user?.id)
            .onSnapshot({
                next: onSnapshot,
                error: error => console.log(error),
            });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Header>
                <CircleLogo />
                <Title>Messages</Title>
                <Avatar avatarURL={user?.avatarURL || ''} size={32} />
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
