import React from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, LeftIcon, RightIcon, RNInput } from './styles';

interface InputProps extends TextInputProps {
    leftIcon?: string;
    rightIcon?: string;
    onRightIconPress?: () => void;
}

const Input = ({
    leftIcon,
    onRightIconPress,
    rightIcon,
    ...rest
}: InputProps) => {
    const theme = useTheme();
    return (
        <Container>
            {!!leftIcon && (
                <LeftIcon
                    name={leftIcon}
                    size={20}
                    color={theme.input.defaultIconColor}
                />
            )}

            <RNInput {...rest} />
            {!!rightIcon && (
                <TouchableOpacity onPress={onRightIconPress}>
                    <RightIcon
                        name={rightIcon}
                        size={16}
                        color={theme.input.defaultIconColor}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
};

export default Input;
