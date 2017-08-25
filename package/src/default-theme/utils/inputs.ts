import { mix, opacify } from '@ngx-kit/styler';
import { ColorsSet } from '../meta/params';

export function genInputDisabled(background: string, invert: string, input: string): ColorsSet {
  return {
    background: mix(.95, background, invert),
    border: mix(.8, input, background),
    text: opacify(-.4, invert),
  };
}
export function genInputHoverBorder(input: string, invert: string) {
  return mix(.7, input, invert);
}
