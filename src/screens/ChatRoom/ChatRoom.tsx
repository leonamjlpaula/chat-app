import React, { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { pushNewMessage } from '@app/api/pushNewMessage';
import { updateLastMessage } from '@app/api/updateLastMessage';
import ChevronLeftSVG from '@app/assets/images/chevron-left.svg';
import { ChatMessageComponent, SendMessageInput } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { ChatStackParamList } from '@app/navigators/ChatStackNavigator';
import { getChatName } from '@app/utils/getChatName';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import isAfter from 'date-fns/isAfter';

import {
    ActiveNowContainer,
    ActiveNowIndicator,
    ActiveNowTitle,
    BackButtonContainer,
    BackButtonTouchable,
    ChatContainer,
    ChatName,
    Header,
    Separator,
} from './styles';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatRoom'>;

const ChatRoom = ({ navigation, route }: Props) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const chat = JSON.parse(route.params?.stringfiedChat);

    const { user: loggedUser } = useAuth();

    const messageListRef = useRef<FlatList>(null);

    const formattedChatName =
        chat.chatName ||
        getChatName({ userInfos: chat.userInfos, userId: loggedUser?.id! });

    const handleOnBackPress = () => {
        navigation.navigate('ChatsList');
    };

    const handleSendMessage = async (message: string) => {
        await pushNewMessage({
            content: message,
            user: loggedUser!,
            chatId: chat.id,
        });
        await updateLastMessage({ chatId: chat.id, lastMessage: message });
    };

    const onSnapshot = (
        querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    ) => {
        if (querySnapshot.empty) return;
        const newMessages: ChatMessage[] = [];
        querySnapshot.forEach(snapshot => {
            const { content, createdAt, avatarURL, displayName, user } =
                snapshot.data();
            const message = {
                id: snapshot.id,
                content,
                createdAt: createdAt.toDate(),
                avatarURL,
                displayName,
                user,
            };
            newMessages.push(message);
        });
        const sortedMessages = newMessages.sort((a, b) =>
            isAfter(a.createdAt, b.createdAt) ? 1 : -1,
        );

        setMessages(sortedMessages);
    };

    useEffect(() => {
        //A small delay is necessary here when first rendering a long list of messages
        setTimeout(() => {
            messageListRef.current?.scrollToEnd();
        }, 100);
    }, [messages]);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('chats')
            .doc(chat.id)
            .collection('messages')

            .onSnapshot({
                next: onSnapshot,
                error: error => console.log(error),
            });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ChatContainer>
            <Header>
                <BackButtonContainer>
                    <BackButtonTouchable onPress={handleOnBackPress}>
                        <ChevronLeftSVG />
                    </BackButtonTouchable>
                </BackButtonContainer>
                <ChatName>{formattedChatName}</ChatName>
                <ActiveNowContainer>
                    <ActiveNowIndicator />
                    <ActiveNowTitle>Active Now</ActiveNowTitle>
                </ActiveNowContainer>
            </Header>
            <Separator />
            <FlatList
                ref={messageListRef}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                data={messages}
                renderItem={({ item }) => <ChatMessageComponent {...item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
            <Separator />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SendMessageInput
                    placeholder="Type a message"
                    onSend={handleSendMessage}
                    returnKeyType="send"
                />
            </KeyboardAvoidingView>
        </ChatContainer>
    );
};

export default ChatRoom;
