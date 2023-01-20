import styled from 'styled-components/native';

import { TextBody, TextBodyLight, TextTitle } from '../../designSystem';

export const Container = styled.View`
    flex-direction: row;
    margin: 12px 0px;
`;

export const HStack = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const VStack = styled.View`
    flex: 1;
    margin-left: 12px;
    justify-content: space-between;
`;

export const LastMessage = styled(TextBody)``;

export const Title = styled(TextTitle)`
    flex-grow: 1;
`;

export const LastMessageTime = styled(TextBodyLight)`
    font-size: 13px;
`;

export const TextWrapper = styled.View`
    flex: 1;
`;

export const NotificationIcon = styled.View`
    height: 8px;
    width: 8px;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 4px;
`;
