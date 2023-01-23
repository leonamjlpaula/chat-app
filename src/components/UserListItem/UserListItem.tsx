import React from 'react';
import { CheckBox } from '@app/designSystem';

import Avatar from '../Avatar/Avatar';

import { Container, DisplayName, TextWrapper } from './styles';

interface UserListItemProps extends NewChatUser {
    onPress: () => void;
}

const UserListItem = ({
    avatarURL,
    displayName,
    isSelected = false,
    onPress,
}: UserListItemProps) => {
    return (
        <Container onPress={onPress}>
            <Avatar avatarURL={avatarURL} />
            <TextWrapper>
                <DisplayName ellipsizeMode="tail">{displayName}</DisplayName>
            </TextWrapper>
            <CheckBox selected={isSelected} />
        </Container>
    );
};

export default UserListItem;
