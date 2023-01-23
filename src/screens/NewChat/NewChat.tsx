import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { createChat } from '@app/api/createChat';
import { fetchAllUsers } from '@app/api/fetchAllUsers';
import { fetchChatByHash } from '@app/api/fetchChatByHash';
import AddSVG from '@app/assets/images/add.svg';
import { TextButton, UserListItem } from '@app/components';
import { Input } from '@app/designSystem';
import { composeGroupChatName } from '@app/utils/composeGroupChatName';
import { generateChatHash } from '@app/utils/generateChatHash';

import {
    AddButton,
    Container,
    Header,
    InnerContainer,
    ModalContainer,
    Spacer,
    Title,
} from './styles';

const USER_ID = 'bl9i7nN0sA3pfLdhJyAy';

const NewChat = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [searchString, setSearchString] = useState('');
    const [chatNameString, setChatNameString] = useState('');

    const allUsers = useRef<User[]>([]);

    useEffect(() => {
        if (!modalVisible) {
            setSelectedUserIds([]);
            setSearchString('');
        }

        async function loadData() {
            const result = await fetchAllUsers();
            if (result) {
                const filteredResult = result.filter(u => u.id !== USER_ID);
                setUsers([...filteredResult]);
                allUsers.current = [...filteredResult];
            }
        }
        loadData();
    }, [modalVisible]);

    const handleOnCancel = () => {
        setModalVisible(false);
    };

    const navigateToChat = (chat: Chat) => {
        //TODO
    };

    const handleOnCreate = async () => {
        const hash = generateChatHash(selectedUserIds);
        let chatName = '';
        const filteredSelectedUsers = allUsers.current.filter(u =>
            selectedUserIds.includes(u.id),
        );
        const avatars: UserAvatarPair[] = filteredSelectedUsers.map(u => ({
            id: u.id,
            avatarURL: u.avatarURL,
        }));

        if (selectedUserIds.length > 1) {
            chatName = chatNameString;
            if (!chatName) {
                const selectedUserName = filteredSelectedUsers.map(
                    u => u.displayName,
                );
                chatName = composeGroupChatName(selectedUserName);
            }
        } else {
            chatName = filteredSelectedUsers[0].displayName || '';
        }

        if (selectedUserIds.length > 1) {
            const chat = await createChat({
                chatName,
                hash,
                userIds: [...selectedUserIds, USER_ID],
                userAvatars: avatars,
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
            chatName,
            hash,
            userIds: [...selectedUserIds, USER_ID],
            userAvatars: avatars,
        });
        navigateToChat(chat);
    };

    const handleOnNewChat = () => {
        setModalVisible(true);
    };

    const handleOnEraseSearchString = () => {
        setSearchString('');
    };

    const handleOnUserPress = (userId: string) => {
        if (selectedUserIds.includes(userId))
            setSelectedUserIds(ids => ids.filter(id => id !== userId));
        else {
            setSelectedUserIds(ids => [...ids, userId]);
        }
    };

    useEffect(() => {
        const filteredUsers = allUsers.current.filter(user =>
            user.displayName
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase()),
        );
        setUsers(filteredUsers);
    }, [searchString]);

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
                            renderItem={({ item }) => (
                                <UserListItem
                                    {...item}
                                    onPress={() => handleOnUserPress(item.id)}
                                    isSelected={selectedUserIds.includes(
                                        item.id,
                                    )}
                                />
                            )}
                            keyExtractor={({ id }) => id}
                        />
                    </InnerContainer>
                </Container>
            </ModalContainer>
        </>
    );
};

export default NewChat;
