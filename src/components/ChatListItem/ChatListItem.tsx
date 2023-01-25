import React, { memo } from 'react';
import { getChatName } from '@app/utils/getChatName';
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

interface ChatListItemProps extends Chat {
    onPress: () => void;
    userId: string;
}

const ChatListItem = ({
    lastMessage,
    updatedAt,
    chatName,
    userInfos,
    onPress,
    userId,
    id,
}: ChatListItemProps) => {
    const filteredUserInfos = userInfos.filter(pair => pair.id !== userId);

    const formmatedDate = isToday(updatedAt)
        ? format(updatedAt, 'hh:mm aa')
        : formatDistanceStrict(updatedAt, new Date(), {
              addSuffix: true,
          });

    let formattedChatName = chatName || getChatName({ userInfos, userId });

    return (
        <Container onPress={onPress}>
            {userInfos.length > 2 ? (
                <GroupChatAvatar
                    avatarURLBack={filteredUserInfos[0].avatarURL}
                    avatarURLFront={filteredUserInfos[1].avatarURL}
                />
            ) : (
                <Avatar avatarURL={filteredUserInfos[0].avatarURL} activeNow />
            )}
            <VStack>
                <HStack>
                    <Title>{formattedChatName}</Title>
                    <NotificationIcon />
                </HStack>
                <HStack>
                    <TextWrapper>
                        <LastMessage ellipsizeMode="tail" numberOfLines={1}>
                            {lastMessage}
                        </LastMessage>
                    </TextWrapper>
                    <LastMessageTime testID={`chat-list-formatted-date-${id}`}>
                        {formmatedDate}
                    </LastMessageTime>
                </HStack>
            </VStack>
        </Container>
    );
};

export default memo(ChatListItem);
