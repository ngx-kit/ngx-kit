import { parseToRgb } from '@ngx-kit/styler';
import { HsvaColor } from '../meta';
import { rgbaToHsva } from './rgba-to-hsva';

export function stringToHsva(colorString: string): HsvaColor | null {
  try {
    return rgbaToHsva(parseToRgb(colorString));
  } catch (e) {
    return null;
  }
}
