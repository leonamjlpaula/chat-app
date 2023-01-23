import { Container, TextBody, TextTitleLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const ChatContainer = styled(Container)`
    padding-left: 0px;
    padding-right: 0px;
`;
export const Header = styled.View`
    align-items: center;
`;

export const ActiveNowContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
`;

export const ActiveNowTitle = styled(TextBody)`
    flex-direction: row;
    margin-left: 5px;
    font-size: 13px;
`;

export const ActiveNowIndicator = styled.View`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    background: ${({ theme }) => theme.indicators.activeNow};
`;

export const BackButtonContainer = styled.View`
    position: absolute;
    left: 28px;
    top: 0px;
    bottom: 0px;
    justify-content: center;
    align-items: center;
`;

export const BackButtonTouchable = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const ChatName = styled(TextTitleLight)``;

export const Separator = styled.View`
    height: 1px;
    background: #f0f3f5;
`;
