import { HslaColor } from '@ngx-kit/styler';
import { HsvaColor } from '../meta';

export function hsla2hsva(hsla: HslaColor): HsvaColor {
  const h = Math.min(hsla.hue, 1);
  const s = Math.min(hsla.saturation, 1);
  const l = Math.min(hsla.lightness, 1);
  const a = Math.min(hsla.alpha, 1);
  if (l === 0) {
    return {h, s: 0, v: 0, a};
  } else {
    const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
    return {h, s: 2 * (v - l) / v, v, a};
  }
}
