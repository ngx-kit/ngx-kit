import { ElementDef, RegistrationDef, StyleDef } from '@ngx-kit/styler';

export interface KitSelectStyle {
  getStyles(): KitSelectStyleSet;
}

export interface KitSelectStyleSet extends RegistrationDef {
  host: ElementDef;
  option: KitSelectStyleSetOption;
}

export interface KitSelectStyleSetOption extends ElementDef {
  $states: {
    selected: StyleDef;
  };
}
