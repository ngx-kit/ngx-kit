import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitInputStyle {
  getStyles(): KitInputStyleDef;
}

export interface KitInputStyleDef extends RegistrationDef {
  host: ElementDef;
  input: KitInputStyleDefInput;
}

export interface KitInputStyleDefInput extends ElementDef {
  $states: {
  };
}
