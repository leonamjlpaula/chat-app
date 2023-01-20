import React from 'react';

import Avatar from '../Avatar/Avatar';

import {
    Container,
    HStack,
    LastMessage,
    LastMessageTime,
    NotificationIcon,
    TextWrapper,
    Title,
    VStack,
} from './styles';

export default function ChatListItem({
    lastMessage,
    updatedAt,
    chatName,
}: Chat) {
    return (
        <Container>
            <Avatar avatarURL="https://www.shareicon.net/data/256x256/2016/07/05/791214_man_512x512.png" />
            <VStack>
                <HStack>
                    <Title>{chatName}</Title>
                    <NotificationIcon />
                </HStack>
                <HStack>
                    <TextWrapper>
                        <LastMessage ellipsizeMode="tail" numberOfLines={1}>
                            {lastMessage}
                        </LastMessage>
                    </TextWrapper>
                    <LastMessageTime>
                        {updatedAt.toDateString()}
                    </LastMessageTime>
                </HStack>
            </VStack>
        </Container>
    );
}
