import React, { memo, useState } from 'react';
import { CheckBox } from '@app/designSystem';

import Avatar from '../Avatar/Avatar';

import { Container, DisplayName, TextWrapper } from './styles';

interface UserListItemProps extends User {
    onPress: () => void;
    isSelected?: boolean;
}

const UserListItem = ({
    avatarURL,
    displayName,
    onPress,
}: UserListItemProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleOnPress = () => {
        setIsSelected(prev => !prev);
        onPress();
    };

    return (
        <Container onPress={handleOnPress}>
            <Avatar avatarURL={avatarURL} activeNow />
            <TextWrapper>
                <DisplayName ellipsizeMode="tail">{displayName}</DisplayName>
            </TextWrapper>
            <CheckBox selected={isSelected} />
        </Container>
    );
};

export default memo(UserListItem);
