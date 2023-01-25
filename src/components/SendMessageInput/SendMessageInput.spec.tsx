import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import SendMessageInput from './SendMessageInput';

describe('SendMessageInput', () => {
    it('should clear input after sending message via button', async () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<SendMessageInput onSend={mockFn} />);

        const input = getByTestId('input-chat-message');
        const sendButton = getByTestId('input-chat-send-button');

        fireEvent(input, 'focus');
        fireEvent.changeText(input, 'any text');

        fireEvent.press(sendButton);
        expect(input.props.value).toEqual('');
    });
});
