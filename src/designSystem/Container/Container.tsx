import { Platform } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    padding: ${Platform.OS === 'ios' ? '66px' : '6px'} 20px 0px 20px;
    background: ${({ theme }) => theme.screens.backgroundColor};
`;

export default Container;
