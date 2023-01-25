import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { createChat } from '@app/api/createChat';
import { fetchAllUsers } from '@app/api/fetchAllUsers';
import { fetchChatByHash } from '@app/api/fetchChatByHash';
import AddSVG from '@app/assets/images/add.svg';
import { TextButton, UserListItem } from '@app/components';
import { useAuth } from '@app/context/AuthProvider';
import { Input } from '@app/designSystem';
import { generateChatHash } from '@app/utils/generateChatHash';
import { useNavigation } from '@react-navigation/native';

import {
    AddButton,
    Container,
    Header,
    InnerContainer,
    ModalContainer,
    Spacer,
    Title,
} from './styles';

const NewChat = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [searchString, setSearchString] = useState('');
    const [chatNameString, setChatNameString] = useState('');

    const allUsers = useRef<User[]>([]);

    const { user } = useAuth();
    const { navigate } = useNavigation();

    useEffect(() => {
        if (!modalVisible) {
            setSelectedUserIds([]);
            setSearchString('');
        }

        async function loadData() {
            const result = await fetchAllUsers();
            if (result) {
                const filteredResult = result.filter(u => u.id !== user?.id);
                setUsers([...filteredResult]);
                allUsers.current = [...filteredResult];
            }
        }
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalVisible]);

    const handleOnCancel = () => {
        setModalVisible(false);
    };

    const navigateToChat = (chat: Chat) => {
        handleOnCancel();
        navigate('ChatRoom', { stringfiedChat: JSON.stringify(chat) });
    };

    const handleOnCreate = async () => {
        if (selectedUserIds.length === 0) return;
        const hash = generateChatHash(selectedUserIds);
        // let chatName = '';
        const filteredSelectedUsers = allUsers.current.filter(u =>
            selectedUserIds.includes(u.id),
        );

        let userInfos: UserChatInfo[] = filteredSelectedUsers.map(u => ({
            id: u.id,
            avatarURL: u.avatarURL,
            displayName: u.displayName,
        }));
        userInfos = [
            ...userInfos,
            {
                avatarURL: user?.avatarURL!,
                id: user?.id!,
                displayName: user?.displayName!,
            },
        ];

        if (selectedUserIds.length > 1) {
            const chat = await createChat({
                chatName: chatNameString,
                hash,
                userIds: [...selectedUserIds, user?.id || ''],
                userInfos,
            });
            navigateToChat(chat);
            return;
        }

        const existingChat = await fetchChatByHash(hash);
        if (existingChat) {
            navigateToChat(existingChat);
            return;
        }
        const chat = await createChat({
            chatName: chatNameString,
            hash,
            userIds: [...selectedUserIds, user?.id || ''],
            userInfos,
        });
        navigateToChat(chat);
    };

    const handleOnNewChat = () => {
        setModalVisible(true);
    };

    const handleOnEraseSearchString = () => {
        setSearchString('');
    };

    const handleOnUserPress = useCallback(
        (userId: string) => {
            if (selectedUserIds.includes(userId))
                setSelectedUserIds(ids => ids.filter(id => id !== userId));
            else {
                setSelectedUserIds(ids => [...ids, userId]);
            }
        },
        [selectedUserIds],
    );

    useEffect(() => {
        const filteredUsers = allUsers.current.filter(u =>
            u.displayName
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase()),
        );
        setUsers(filteredUsers);
    }, [searchString]);

    const renderItem = useCallback(
        ({ item }: { item: User }) => (
            <UserListItem
                {...item}
                onPress={() => handleOnUserPress(item.id)}
            />
        ),
        [handleOnUserPress],
    );

    return (
        <>
            <AddButton onPress={handleOnNewChat}>
                <AddSVG />
            </AddButton>
            <ModalContainer
                isVisible={modalVisible}
                swipeDirection={'down'}
                onSwipeComplete={handleOnCancel}
                onBackdropPress={handleOnCancel}>
                <Container>
                    <Header>
                        <TextButton onPress={handleOnCancel}>Cancel</TextButton>
                        <Title>New message</Title>
                        <TextButton
                            onPress={handleOnCreate}
                            disabled={selectedUserIds.length === 0}>
                            Create
                        </TextButton>
                    </Header>
                    <InnerContainer>
                        <Input
                            placeholder="Jim Halpert, ..."
                            leftIcon="magnify"
                            rightIcon="close-circle"
                            onRightIconPress={handleOnEraseSearchString}
                            value={searchString}
                            onChangeText={setSearchString}
                        />
                        <Spacer />
                        {selectedUserIds.length > 1 && (
                            <>
                                <Input
                                    leftIcon="account-group"
                                    placeholder="Group name"
                                    value={chatNameString}
                                    onChangeText={setChatNameString}
                                />
                                <Spacer />
                            </>
                        )}
                        <FlatList
                            data={users}
                            renderItem={renderItem}
                            keyExtractor={({ id }) => id}
                            showsVerticalScrollIndicator={false}
                        />
                    </InnerContainer>
                </Container>
            </ModalContainer>
        </>
    );
};

export default NewChat;
