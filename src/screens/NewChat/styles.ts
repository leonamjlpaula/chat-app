import Modal from 'react-native-modal';
import { TextTitleLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const Title = styled(TextTitleLight)`
    font-size: 17px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled(Modal)`
    justify-content: flex-end;
    margin: 0px;
`;

export const Container = styled.View`
    background: ${({ theme }) => theme.screens.backgroundColor};
    height: 90%;
    padding: 12px 16px 0px 12px;
`;

export const InnerContainer = styled.View`
    padding: 8px 8px 0px 8px;
`;

export const Spacer = styled.View`
    height: 8px;
`;
