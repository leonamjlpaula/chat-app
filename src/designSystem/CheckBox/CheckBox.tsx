import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${({ theme }) => theme.checkBox.size}px;
    width: ${({ theme }) => theme.checkBox.size}px;
    border-color: ${({ theme }) => theme.checkBox.borderColor};
    border-radius: ${({ theme }) => theme.checkBox.borderRadius}px;
    border-width: ${({ theme }) => theme.checkBox.borderWidth}px;
    align-items: center;
    justify-content: center;
`;

interface CheckBoxProps {
    selected: boolean;
}

const CheckBox = ({ selected }: CheckBoxProps) => {
    const theme = useTheme();

    return (
        <Container>
            {selected ? (
                <Icon
                    name="check-bold"
                    color={theme.checkBox.selectedColor}
                    size={theme.checkBox.iconSize}
                />
            ) : null}
        </Container>
    );
};

export default CheckBox;
