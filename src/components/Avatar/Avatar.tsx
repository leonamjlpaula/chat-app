import React from 'react';
import styled from 'styled-components/native';

export const AvatarImage = styled.Image<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 6px;
`;

const DEFAULT_SIZE = 40;

interface AvatarProps {
    avatarURL: string;
    size?: number;
}

export default function Avatar({
    avatarURL,
    size = DEFAULT_SIZE,
}: AvatarProps) {
    return <AvatarImage source={{ uri: avatarURL }} size={size} />;
}
