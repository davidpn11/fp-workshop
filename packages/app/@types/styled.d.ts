import 'styled-components';
import type {Theme} from '@jet-pie/theme/variations/skip';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
