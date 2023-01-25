module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
    ],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    },
    setupFiles: ['<rootDir>/__mocks__/mock.js'],
};
