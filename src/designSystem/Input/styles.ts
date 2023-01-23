import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const RNInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }) => theme.input.textColor};
    height: 34px;
    font-size: 17px;
    padding: 0px;
    margin: 0px;
`;

export const Container = styled.View`
    flex-direction: row;
    border-width: 1px;
    border-color: ${({ theme }) => theme.input.borderColor};
    border-radius: 8px;
    align-items: center;
    padding: 0px 8px;
`;

export const LeftIcon = styled(Icon)`
    padding-right: 8px;
`;

export const RightIcon = styled(Icon)`
    padding-left: 8px;
`;
