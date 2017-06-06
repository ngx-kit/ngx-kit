import { ElementDef, RegistrationDef, StateDef } from '@ngx-kit/styler';

export interface KitFormErrorStyle {
  getStyles(): KitFormErrorStyleSet;
}

export interface KitFormErrorStyleSet extends RegistrationDef {
  host: KitFormErrorStyleSetHost;
}

export interface KitFormErrorStyleSetHost extends ElementDef {
  $states: {
    visible: StateDef;
  };
}
