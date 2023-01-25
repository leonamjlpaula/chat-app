import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TextBodyLight } from '@app/designSystem';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0px 40px;
`;

const Text = styled(TextBodyLight)`
    text-align: center;
`;

const LoadingPlaceholder = ({ text }: { text: string }) => {
    return (
        <Container>
            <ActivityIndicator size={40} />
            <Text>{text}</Text>
        </Container>
    );
};

export default LoadingPlaceholder;
