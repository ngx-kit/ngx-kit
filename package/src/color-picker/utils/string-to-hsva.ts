import { parseToRgb } from '@ngx-kit/styler';
import { HsvaColor } from '../meta';
import { rgbaToHsva } from './rgba-to-hsva';

export function stringToHsva(colorString: string): HsvaColor {
  return rgbaToHsva(parseToRgb(colorString));
}
