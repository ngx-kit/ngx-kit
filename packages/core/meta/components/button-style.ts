import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitButtonStyle {
  getStyles(): KitButtonStyleDef;
}

export interface KitButtonStyleDef extends RegistrationDef {
  host: KitButtonStyleDefHost;
}

export interface KitButtonStyleDefHost extends ElementDef {
  $states: {
    size: StyleDef;
    type: StyleDef;
    disabled: StyleDef;
  };
}
