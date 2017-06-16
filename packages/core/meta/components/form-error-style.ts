import { ElementDef, RegistrationDef, StateDef } from '@ngx-kit/styler';

export interface KitFormErrorStyle {
  getStyles(): KitFormErrorStyleDef;
}

export interface KitFormErrorStyleDef extends RegistrationDef {
  host: KitFormErrorStyleDefHost;
}

export interface KitFormErrorStyleDefHost extends ElementDef {
  $states: {
    visible: StateDef;
  };
}
