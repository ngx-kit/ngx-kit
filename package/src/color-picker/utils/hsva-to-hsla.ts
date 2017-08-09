import { HslaColor } from '@ngx-kit/styler';
import { HsvaColor } from '../meta';

export function hsvaToHsla(hsva: HsvaColor): HslaColor {
  const hue = hsva.h * 360, saturation = hsva.s, v = hsva.v, alpha = hsva.a;
  if (v === 0) {
    return {
      alpha,
      hue,
      lightness: 0,
      saturation: 0,
    };
  } else if (saturation === 0 && v === 1) {
    return {
      alpha,
      hue,
      lightness: 1,
      saturation: 1,
    };
  } else {
    const lightness = v * (2 - saturation) / 2;
    return {
      alpha,
      hue,
      lightness,
      saturation: v * saturation / (1 - Math.abs(2 * lightness - 1)),
    };
  }
}
