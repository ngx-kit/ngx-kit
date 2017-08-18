import { defToggle } from '@ngx-kit/styler';
import { ColorsSet } from '../meta/params';

export const BORDER_TOP = 0x1;
export const BORDER_RIGHT = 0x2;
export const BORDER_BOTTOM = 0x4;
export const BORDER_LEFT = 0x8;
export const BORDER_ALL = BORDER_TOP | BORDER_RIGHT | BORDER_BOTTOM | BORDER_LEFT;
export function applyColorSet(set: ColorsSet,
                              borderWidth = 1,
                              borderSide = BORDER_ALL,
                              borderStyle = 'solid'): any {
  return {
    background: set.background,
    color: set.text,
    ...defToggle(borderSide === BORDER_ALL, {
      border: [borderWidth, borderStyle, set.border],
    }, {
      ...defToggle(!!(borderSide & BORDER_TOP), {
        borderTop: [borderWidth, borderStyle, set.border],
      }),
      ...defToggle(!!(borderSide & BORDER_RIGHT), {
        borderRight: [borderWidth, borderStyle, set.border],
      }),
      ...defToggle(!!(borderSide & BORDER_BOTTOM), {
        borderBottom: [borderWidth, borderStyle, set.border],
      }),
      ...defToggle(!!(borderSide & BORDER_LEFT), {
        borderLeft: [borderWidth, borderStyle, set.border],
      }),
    }),
  };
}
