import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextBody, TextBodyLight } from '@app/designSystem';

interface TextButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    disabled?: boolean;
}

const TextButton = ({
    children,
    onPress,
    disabled = false,
}: TextButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {disabled ? (
                <TextBodyLight>{children}</TextBodyLight>
            ) : (
                <TextBody>{children}</TextBody>
            )}
        </TouchableOpacity>
    );
};

export default TextButton;
