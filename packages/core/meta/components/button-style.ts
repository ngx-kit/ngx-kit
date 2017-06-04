import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitButtonStyle {
  getStyles(): KitButtonStyleSet;
}

export interface KitButtonStyleSet extends RegistrationDef {
  host: KitButtonStyleSetHost;
}

export interface KitButtonStyleSetHost extends ElementDef {
  $states: {
    size: StyleDef;
    type: StyleDef;
    disabled: StyleDef;
  };
}
