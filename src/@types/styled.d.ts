import 'styled-components';

import dark from '../styles/themes/dark';

type ITheme = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
