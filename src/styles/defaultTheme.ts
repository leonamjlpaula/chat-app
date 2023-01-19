const colors = {
    green: '#008A2F',
    darkGrey: '#42464D',
    grey: '#717680',
    black: '#191B1F',
    white: '#fff',
    blue: '#506CF0',
    lightGrey: '#D2D7DB',
};

export const defaultTheme = {
    typography: {
        title: {
            fontFamily: 'monospace',
            size: '15px',
            weight: 700,
            color: colors.black,
        },
        titleLight: {
            fontFamily: 'monospace',
            size: '15px',
            weight: 600,
            color: colors.black,
        },
        body: {
            fontFamily: 'SF Pro Text',
            size: '15px',
            weight: 400,
            color: colors.darkGrey,
        },
        bodyLight: {
            fontFamily: 'SF Pro Text',
            size: '15px',
            weight: 400,
            color: colors.grey,
        },
    },
    shapes: {
        lineColor: colors.lightGrey,
    },
    colors: { ...colors },
};
