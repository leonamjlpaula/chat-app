import React from 'react';
import { defaultTheme } from '@app/styles/defaultTheme';
import { generateAvatarURL } from '@app/utils/generateAvatarURL';
import { render } from '@testing-library/react-native';
import subDays from 'date-fns/subDays';
import subMinutes from 'date-fns/subMinutes';
import { ThemeProvider } from 'styled-components/native';

import ChatListItem from './ChatListItem';
type Props = {
    children?: React.ReactNode;
};
const Providers: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);
describe('ChatListItem', () => {
    it('should display 1 day ago as formatted date', async () => {
        const mockFn = jest.fn();

        const chat: Chat = {
            chatName: 'chatName',
            createdAt: new Date(),
            hash: '123',
            id: '1',
            lastMessage: 'lastMessage',
            updatedAt: subMinutes(subDays(new Date(), 1), 1),
            userInfos: [
                {
                    avatarURL: generateAvatarURL('1'),
                    displayName: '#1',
                    id: '1',
                },
                {
                    avatarURL: generateAvatarURL('2'),
                    displayName: '#2',
                    id: '2',
                },
            ],
            users: ['1', '2'],
        };
        const props = {
            onPress: mockFn,
            ...chat,
            userId: '1',
        };
        const { getByTestId } = render(<ChatListItem {...props} />, {
            wrapper: Providers,
        });

        const formattedDate = getByTestId(`chat-list-formatted-date-1`);
        expect(formattedDate.children).toContain('1 day ago');
    });
});
