import { TextBody, TextBodyLight, TextTitleLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    padding: 12px 0px;
`;

export const DisplayName = styled(TextTitleLight)``;

export const MessageContent = styled(TextBody)``;

export const MessageStack = styled.View`
    margin-left: 12px;
    flex: 1;
`;

export const SendDate = styled(TextBodyLight)`
    margin-left: 8px;
    font-size: 13px;
`;

export const TitleStack = styled.View`
    flex-direction: row;
    margin-bottom: 2px;
`;

export const TextWrapper = styled.View`
    flex: 1;
`;
