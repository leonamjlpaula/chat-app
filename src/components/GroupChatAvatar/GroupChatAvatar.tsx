import React, { memo } from 'react';
import styled from 'styled-components/native';

const AvatarBack = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
`;
const AvatarFront = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 5px;
    position: absolute;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 1px;
    bottom: 0px;
    right: 0px;
`;

const Container = styled.View`
    height: 40px;
    width: 40px;
`;

interface GroupChatAvatarProps {
    avatarURLBack: string;
    avatarURLFront: string;
}

const GroupChatAvatar = ({
    avatarURLBack,
    avatarURLFront,
}: GroupChatAvatarProps) => {
    return (
        <Container>
            <AvatarBack
                source={{
                    uri: avatarURLBack,
                }}
            />
            <AvatarFront
                source={{
                    uri: avatarURLFront,
                }}
            />
        </Container>
    );
};
export default memo(GroupChatAvatar);
