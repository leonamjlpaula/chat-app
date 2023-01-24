import React from 'react';
import { useAuth } from '@app/context/AuthProvider';
import format from 'date-fns/format';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import isToday from 'date-fns/isToday';

import Avatar from '../Avatar/Avatar';
import { GroupChatAvatar } from '..';

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
    avatars,
}: Chat) {
    const { user } = useAuth();
    const filteredAvatars = avatars.filter(pair => pair.id !== user?.id);

    const formmatedDate = isToday(updatedAt)
        ? format(updatedAt, 'hh:MM aa')
        : formatDistanceStrict(updatedAt, new Date(), {
              addSuffix: true,
          });

    return (
        <Container>
            {avatars.length > 2 ? (
                <GroupChatAvatar
                    avatarURLBack={filteredAvatars[0].avatarURL}
                    avatarURLFront={filteredAvatars[1].avatarURL}
                />
            ) : (
                <Avatar avatarURL={filteredAvatars[0].avatarURL} />
            )}
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
                    <LastMessageTime>{formmatedDate}</LastMessageTime>
                </HStack>
            </VStack>
        </Container>
    );
}
