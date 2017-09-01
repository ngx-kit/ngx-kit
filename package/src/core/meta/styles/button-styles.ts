import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

export interface KitButtonStyle extends ComponentStyle {
  host(state: any): StyleDef;
}

export interface KitButtonGroupStyle extends ComponentStyle {
  host(state: any): StyleDef;
}
