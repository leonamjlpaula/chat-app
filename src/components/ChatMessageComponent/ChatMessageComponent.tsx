import React from 'react';

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
}: ChatMessage) => {
    return (
        <Container>
            <Avatar avatarURL={avatarURL} />
            <MessageStack>
                <TitleStack>
                    <TextWrapper>
                        <DisplayName numberOfLines={1} ellipsizeMode={'tail'}>
                            {displayName}
                            {displayName}
                            {displayName}
                        </DisplayName>
                    </TextWrapper>
                    <SendDate>2:31PM</SendDate>
                </TitleStack>
                <MessageContent>{content}</MessageContent>
            </MessageStack>
        </Container>
    );
};

export default ChatMessageComponent;
