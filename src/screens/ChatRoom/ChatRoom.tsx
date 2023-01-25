import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SectionList,
    SectionListData,
} from 'react-native';
import { pushNewMessage } from '@app/api/pushNewMessage';
import { updateLastMessage } from '@app/api/updateLastMessage';
import ChevronLeftSVG from '@app/assets/images/chevron-left.svg';
import {
    ChatMessageComponent,
    ChatMessageSectionHeader,
    SendMessageInput,
} from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { ChatStackParamList } from '@app/navigators/ChatStackNavigator';
import { getChatName } from '@app/utils/getChatName';
import firestore, {
    FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isToday from 'date-fns/isToday';
import groupBy from 'lodash/groupBy';

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
interface GroupedData {
    title: string;
    data: ChatMessage[];
}

const ChatRoom = ({ navigation, route }: Props) => {
    const [groupedData, setGroupedData] = useState<GroupedData[]>([]);

    const chat = JSON.parse(route.params?.stringfiedChat);

    const { user: loggedUser } = useAuth();

    const messageListRef = useRef<SectionList<ChatMessage, GroupedData>>(null);

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

        const groupedList = Object.values(
            groupBy(sortedMessages, msg => format(msg.createdAt, 'MM-dd-yyyy')),
        );

        const newData: GroupedData[] = groupedList.map(list => {
            const groupDataItem: GroupedData = {
                data: [...list],
                title: isToday(new Date(list[0].createdAt))
                    ? 'TODAY'
                    : format(list[0].createdAt, 'MM-dd-yyyy'),
            };
            return groupDataItem;
        });

        setGroupedData(newData);
    };

    useEffect(() => {
        // A small delay is necessary here when first rendering a long list of messages
        if (groupedData.length === 0) return;
        const sectionIndex = groupedData.length - 1;
        const itemIndex = groupedData[sectionIndex].data.length - 1;

        setTimeout(() => {
            messageListRef.current?.scrollToLocation({
                itemIndex,
                sectionIndex,
            });
        }, 500);
    }, [groupedData]);

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

    const renderItem = useCallback(
        ({ item }: { item: ChatMessage }) => <ChatMessageComponent {...item} />,
        [],
    );

    const renderSectionHeader = useCallback(
        ({
            section,
        }: {
            section: SectionListData<ChatMessage, GroupedData>;
        }) => <ChatMessageSectionHeader title={section.title} />,
        [],
    );

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
            <SectionList
                ref={messageListRef}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
                sections={groupedData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={renderSectionHeader}
                stickySectionHeadersEnabled={false}
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
