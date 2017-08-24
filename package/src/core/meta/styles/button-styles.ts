import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { KitButtonGroupDirection } from '../../../button/meta';

export interface KitButtonStyle extends ComponentStyle {
  host(state: {
    color: string;
    size: string;
    grouped: 'none' | KitButtonGroupDirection;
    selected: boolean;
    disabled: boolean;
    loading: boolean;
    link: boolean;
  }): StyleDef;
}

export interface KitButtonGroupStyle extends ComponentStyle {
  host(state: {direction: KitButtonGroupDirection}): StyleDef;
}
