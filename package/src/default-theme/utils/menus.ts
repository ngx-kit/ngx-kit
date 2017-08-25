import { mix } from '@ngx-kit/styler';

export function genMenuItemHover(colors: {border: string, background: string, invert: string}) {
  return {
    background: mix(.95, colors.background, colors.invert),
    border: mix(.9, colors.border, colors.invert),
    text: colors.invert,
  };
}
