import { TextTitle } from '@app/designSystem';
import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Title = styled(TextTitle)`
    font-size: 20px;
    color: black;
`;
