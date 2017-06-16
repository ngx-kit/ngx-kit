import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitSelectStyle {
  getStyles(): KitSelectStyleDef;
}

export interface KitSelectStyleDef extends RegistrationDef {
  host: ElementDef;
  option: KitSelectStyleDefOption;
}

export interface KitSelectStyleDefOption extends ElementDef {
  $states: {
    selected: StyleDef;
  };
}
