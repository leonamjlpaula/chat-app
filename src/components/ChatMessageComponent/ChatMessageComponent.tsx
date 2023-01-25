import React, { memo } from 'react';
import format from 'date-fns/format';

import Avatar from '../Avatar/Avatar';

import {
    Container,
    DisplayName,
    MessageContent,
    MessageStack,
    SendDate,
    TextWrapper,
    TitleStack,
} from './styles';

const ChatMessageComponent = ({
    avatarURL,
    content,
    displayName,
    createdAt,
}: ChatMessage) => {
    const formattedDate = format(createdAt, 'hh:mm aa');

    return (
        <Container>
            <Avatar avatarURL={avatarURL} />
            <MessageStack>
                <TitleStack>
                    <TextWrapper>
                        <DisplayName numberOfLines={1} ellipsizeMode={'tail'}>
                            {displayName}
                        </DisplayName>
                    </TextWrapper>
                    <SendDate>{formattedDate}</SendDate>
                </TitleStack>
                <MessageContent>{content}</MessageContent>
            </MessageStack>
        </Container>
    );
};

export default memo(ChatMessageComponent);
