import { TextTitleLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
`;

export const DisplayName = styled(TextTitleLight)`
    padding: 0px 8px;
`;

export const TextWrapper = styled.View`
    flex: 1;
`;
