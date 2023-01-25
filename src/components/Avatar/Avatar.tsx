import React, { memo } from 'react';
import styled from 'styled-components/native';

export const AvatarImage = styled.Image<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 6px;
`;

const Container = styled.View``;

const ActiveIndicator = styled.View`
    position: absolute;
    bottom: -4px;
    right: -4px;
    height: 12px;
    width: 12px;
    border-radius: 6px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.indicators.activeNow};
`;

const DEFAULT_SIZE = 40;

interface AvatarProps {
    avatarURL: string;
    size?: number;
    activeNow?: boolean;
}

const Avatar = ({
    avatarURL,
    size = DEFAULT_SIZE,
    activeNow = false,
}: AvatarProps) => {
    return (
        <Container>
            <AvatarImage source={{ uri: avatarURL }} size={size} />
            {activeNow && <ActiveIndicator />}
        </Container>
    );
};

export default memo(Avatar);
