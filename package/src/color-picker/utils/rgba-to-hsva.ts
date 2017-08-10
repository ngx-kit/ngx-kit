import { isRgba, RgbaColor, RgbColor } from '@ngx-kit/styler';
import { HsvaColor } from '../meta';

export function rgbaToHsva(rgba: RgbaColor | RgbColor): HsvaColor {
  const r = Math.min(rgba.red / 255, 1);
  const g = Math.min(rgba.green / 255, 1);
  const b = Math.min(rgba.blue / 255, 1);
  const a = isRgba(rgba) ? Math.min(rgba.alpha, 1) : 1;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number;
  let s: number;
  const v: number = max;
  const d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {h, s, v, a};
}
