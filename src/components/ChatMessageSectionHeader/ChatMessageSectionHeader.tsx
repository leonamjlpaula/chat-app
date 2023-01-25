import React, { memo } from 'react';
import { TextBodyLight } from '@app/designSystem';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
`;

export const Line = styled.View`
    flex: 1;
    height: 1px;
    padding-left: 8px;
    background: ${({ theme }) => theme.shapes.lightLineColor};
`;

export const SectionTitle = styled(TextBodyLight)`
    flex-direction: row;
    font-size: 11px;
`;

const ChatMessageSectionHeader = ({ title }: { title: string }) => {
    return (
        <Container>
            <SectionTitle>{title}</SectionTitle>
            <Line />
        </Container>
    );
};

export default memo(ChatMessageSectionHeader);
