import 'styled-components';

import { defaultTheme } from '../styles/defaultTheme';

type CustomTheme = typeof defaultTheme;

declare module 'styled-components/native' {
    export interface DefaultTheme extends CustomTheme {}
}
