import 'styled-components';

import light from '../styles/themes/light';

type ITheme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
