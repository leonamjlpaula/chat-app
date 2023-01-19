import styled from 'styled-components/native';

export const TextBody = styled.Text`
    color: ${({ theme }) => theme.typography.body.color};
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.size};
    font-weight: ${({ theme }) => theme.typography.body.weight};
`;

export const TextTitle = styled.Text`
    color: ${({ theme }) => theme.typography.title.color};
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
    font-size: ${({ theme }) => theme.typography.title.size};
    font-weight: ${({ theme }) => theme.typography.title.weight};
`;

export const TextBodyLight = styled.Text`
    color: ${({ theme }) => theme.typography.bodyLight.color};
    font-family: ${({ theme }) => theme.typography.bodyLight.fontFamily};
    font-size: ${({ theme }) => theme.typography.bodyLight.size};
    font-weight: ${({ theme }) => theme.typography.bodyLight.weight};
`;
