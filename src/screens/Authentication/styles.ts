import { TextBodyLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    padding: 48px;
    height: 100%;
`;

export const Spacer = styled.View<{ size?: number }>`
    height: ${({ size }) => (size ? size : 20)}px;
`;

export const LoginButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.button.background};
    padding: 8px;
    border-radius: 8px;
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const LoginButtonText = styled.Text`
    color: ${({ theme }) => theme.button.textColor};
`;

export const LinkText = styled(TextBodyLight)`
    font-size: 11px;
    text-decoration: underline;
`;

export const HStack = styled.View`
    flex-direction: row;
`;

export const LoadingIndicator = styled.ActivityIndicator`
    margin-right: 8px;
`;
