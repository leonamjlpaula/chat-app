import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import SendSVG from '@app/assets/images/send.svg';

import { Container, Input, SendButtonContainer } from './styles';

interface SendMessageInputProps extends TextInputProps {
    onSend: (text: string) => void;
}

const SendMessageInput = ({ onSend, ...rest }: SendMessageInputProps) => {
    const [value, setValue] = useState('');

    const handlOnSend = (text: string) => {
        if (!text) return;
        onSend(text);
        setValue('');
    };

    return (
        <Container>
            <Input
                {...rest}
                value={value}
                onChangeText={setValue}
                onSubmitEditing={({ nativeEvent }) =>
                    handlOnSend(nativeEvent.text)
                }
            />
            <SendButtonContainer
                onPress={() => handlOnSend(value)}
                disabled={value.length === 0}>
                <SendSVG />
            </SendButtonContainer>
        </Container>
    );
};

export default SendMessageInput;
