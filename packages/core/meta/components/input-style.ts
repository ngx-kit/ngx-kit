import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitInputStyle {
  getStyles(): KitInputStyleSet;
}

export interface KitInputStyleSet extends RegistrationDef {
  host: ElementDef;
  input: KitInputStyleSetInput;
}

export interface KitInputStyleSetInput extends ElementDef {
  $states: {
  };
}
