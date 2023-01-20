const colors = {
    green: '#008A2F',
    darkGrey: '#42464D',
    grey: '#717680',
    greyMedium: '#90929D',
    black: '#191B1F',
    white: '#fff',
    blue: '#506CF0',
    lightGrey: '#D2D7DB',
};

const fontFamily = 'Menlo';

export const defaultTheme = {
    typography: {
        title: {
            fontFamily,
            size: '15px',
            weight: 700,
            color: colors.black,
        },
        titleLight: {
            fontFamily,
            size: '15px',
            weight: 600,
            color: colors.black,
        },
        body: {
            fontFamily,
            size: '15px',
            weight: 400,
            color: colors.darkGrey,
        },
        bodyLight: {
            fontFamily,
            size: '15px',
            weight: 400,
            color: colors.grey,
        },
    },
    shapes: {
        lineColor: colors.lightGrey,
    },
    tabIcons: { activeColor: colors.black, inactiveColor: colors.greyMedium },
    screens: {
        backgroundColor: colors.white,
    },
    colors: { ...colors },
};
