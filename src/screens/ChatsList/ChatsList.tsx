import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
    Avatar,
    ChatListItem,
    CircleLogo,
    EmptyPlaceholder,
    LoadingPlaceholder,
} from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Container } from '@app/designSystem';
import { ChatStackParamList } from '@app/navigators/ChatStackNavigator';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import isAfter from 'date-fns/isAfter';

import { Header, Title } from './styles';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatRoom'>;

const EmptyComponent = () => (
    <EmptyPlaceholder
        text={`You don't have any chats yet.\nClick on + below to creat your first chat!`}
    />
);

const ChatsList = ({ navigation }: Props) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useAuth();

    const onSnapshot = (
        querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    ) => {
        setIsLoading(false);
        if (querySnapshot.empty) {
            setChats([]);
            return;
        }

        const newChats: Chat[] = [];
        querySnapshot.forEach(snapshot => {
            const {
                userInfos,
                createdAt,
                updatedAt,
                chatName,
                hash,
                lastMessage,
                users,
            } = snapshot.data();
            const chat = {
                id: snapshot.id,
                userInfos,
                createdAt: createdAt.toDate(),
                updatedAt: updatedAt.toDate(),
                chatName,
                hash,
                lastMessage,
                users,
            };

            if (lastMessage) newChats.push(chat);
        });
        const sortedChats = newChats.sort((a, b) =>
            isAfter(a.updatedAt, b.updatedAt) ? -1 : 1,
        );

        setChats(sortedChats);
    };

    useEffect(() => {
        setIsLoading(true);
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

    const handleNavigation = useCallback(
        (item: Chat) => {
            navigation.navigate('ChatRoom', {
                stringfiedChat: JSON.stringify(item),
            });
        },
        [navigation],
    );

    const renderItem = useCallback(
        ({ item }: { item: Chat }) => (
            <ChatListItem {...item} onPress={() => handleNavigation(item)} />
        ),
        [handleNavigation],
    );

    if (isLoading) {
        return <LoadingPlaceholder text="Fetching chats..." />;
    }

    return (
        <Container>
            <Header>
                <CircleLogo />
                <Title>Messages</Title>
                <Avatar avatarURL={user?.avatarURL || ''} size={32} />
            </Header>
            <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                data={chats}
                renderItem={renderItem}
                keyExtractor={({ id }) => id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={EmptyComponent}
            />
        </Container>
    );
};

export default ChatsList;
